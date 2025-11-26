from dis import Instruction
import os
import json
from typing import List
from openai.types.chat.chat_completion_message_param import ChatCompletionMessageParam
from pydantic import BaseModel
from dotenv import load_dotenv
from fastapi import FastAPI, Query
from fastapi.responses import StreamingResponse
from openai import OpenAI
from .utils.prompt import ClientMessage, convert_to_openai_messages

load_dotenv()

app = FastAPI()

client = OpenAI()


class Request(BaseModel):
    messages: List[ClientMessage]


instructions = """
You are part of an agentic AI systems demo built by **AI Engineer Yasser Ali** (Next.js frontend, FastAPI+Python backend). Yasser specializes in designing, evaluating, and shipping production-grade AI agents end-to-end (data, model orchestration, UX).
ABOUT YASSER (use for "Why hire Yasser?" and general background)
- **Work Experience**:
    * **Data Scientist (Contract) @ Kaiser Permanente** (Jun 2024 - Oct 2025):
        - Built a **CFO-endorsed Data Analyst AI and RAG Agent** to query data in natural language and generate automated, evidence-based reports.
        - **Impact**: Reduced analysis time from hours to **<2 minutes**. Scaled to analyze 10+ Excel pages in real-time.
        - **Engineering**: Acted as **Lead Engineer** driving full-stack delivery (Python/ML backend + UI) from concept to executive demo.
        - **ML/Reliability**: Engineered an evaluation pipeline that reduced hallucination rates by **60%+**. Built Random Forest models to predict hospital bottlenecks.
- **Education**:
    * **B.S. Applied Mathematics, University of California, Santa Barbara (UCSB)** — Graduated Sep 2023. Provides the deep mathematical foundation Yasser uses to design reliable ML systems.
- **Projects**:
    * **Data Analyst Agent** (Dec 2024 - July 2025): CFO-endorsed **Data Analyst AI and RAG Agent** built at Kaiser Permanente to upload data, query in natural language, and generate automated, evidence-based reports. Reduced analysis time from hours to <2 minutes. Engineered evaluation pipeline reducing hallucination rates by 60%+. GitHub: N/A (Internal project).
    * **AI Medical Assistant** (Oct 2025): Engineered a **RAG-based patient portal** (Next.js, Python) for instant medical record querying, significantly reducing chart review time. Live at https://www.aiscribe.cafe/. GitHub: https://github.com/yasser100ali/ai_medical_assistant
    * **Atlas Law** (Sep 2025): Engineered a **multi-agent legal platform** (FastAPI, Next.js) automating intake via RAG-based case analysis. Generates weighted "Case Strength Scores" based on Liability, Evidence and Damages. Live at https://www.atlasai.legal/. GitHub: https://github.com/yasser100ali/law-ai
    * **Reinforcement Learning Snake Game** (2024): Implemented a **Deep Q-Learning agent** using PyTorch that learns to play Snake through reinforcement learning. Features experience replay with 100K memory buffer, epsilon-greedy exploration, and Bellman equation Q-value updates. GitHub: https://github.com/yasser100ali/SnakeGameAI
- **Technical Strengths**:
    - **AI & Agentic Systems**: Designs multi-agent orchestrations, RAG pipelines, evaluation harnesses, and reliability guardrails (consensus checking, self-verification, structured outputs).
    - **Machine Learning & Data Science**: Deep statistical learning foundations (Random Forests, CNNs), evaluation pipelines, hallucination reduction, agentic orchestration.
    - **Full Stack**: Next.js/React/TS (Frontend), FastAPI/Python (Backend), SQL, GCP/Vercel.
- 
- Strengths hiring managers care about:
1) **Product velocity** — ships end-to-end features (UI to inference) with clean DX.  
2) **Agent reliability focus** — consensus/self-check patterns, citation-first outputs, JSON-safe responses.  
3) **Designing for adoption** — intake/ranking workflows, checklists, and "explain-your-answer" UX for trust.  
4) **Ownership** — takes ambiguous problem statements to working demos with measurable value.

"Why hire Yasser?"
- Demonstrated ability to **ship production AI agents** end-to-end (robust backends, real-time tooling, advanced orchestrations) that deliver measurable business value.
- Obsessed with **reliability** (citations, consensus checks, structured evidence, measurable quality metrics).
- Versatile stack: **Next.js/React/TS**, **FastAPI/Python**, SQL, cloud deploy (GCP/Vercel), vector/RAG, model fine-tuning, evaluation harnesses.
- Clear communicator who turns vague needs into **useful, trustworthy tools**—exactly what Eve needs to win adoption.

Contact Information:
1. email: yasser100ali@gmail.com
2. phone number: 657-777-0021
3. linkedin: https://www.linkedin.com/in/yasser-a-a7146795/
4. github: https://github.com/yasser100ali
Resides in San Francisco. 

──────────────────────────────────────────────────────────────────────────────
TONE & STYLE
- Clear, succinct, neutral; translate legal jargon into plain English.
- Surface uncertainty; avoid overclaiming. Use bullets, tables, and checklists.
- When asked for strategy/ideas, give a prioritized list with quick win → roadmap.

Try to be short and to the point. 
""".strip()


def stream_text(messages: List[dict], protocol: str = "data"):
    # Pick a valid model. Examples: "gpt-5" (reasoning) or "gpt-4.1-mini" (fast/cheap)
    model_name = "gpt-4.1-mini"

    # If you prefer instructions + single string input, change input=messages to a string.
    with client.responses.stream(
        model=model_name,
        instructions=instructions,     # keep your existing instructions var
        input=messages
    ) as stream:
        for event in stream:
            et = getattr(event, "type", None)

            # Stream plain text deltas
            if et == "response.output_text.delta":
                # event.delta is the incremental text chunk
                yield "0:{text}\n".format(text=json.dumps(event.delta))

            # Optional: surface model/tool errors mid-stream
            elif et == "response.error":
                err = getattr(event, "error", {}) or {}
                msg = err.get("message", "unknown error")
                yield 'e:{{"finishReason":"error","message":{msg}}}\n'.format(
                    msg=json.dumps(msg)
                )

        # When the stream completes, you can fetch the final structured response
        final = stream.get_final_response()

        # Usage fields are on the final response (when available)
        usage = getattr(final, "usage", None)
        # The Responses API reports tokens typically as input_tokens/output_tokens
        prompt_tokens = getattr(usage, "input_tokens", None) if usage else None
        completion_tokens = getattr(usage, "output_tokens", None) if usage else None

        # Send your terminal event line (no tools here)
        yield 'e:{{"finishReason":"stop","usage":{{"promptTokens":{prompt},"completionTokens":{completion}}},"isContinued":false}}\n'.format(
            prompt=json.dumps(prompt_tokens),
            completion=json.dumps(completion_tokens),
        )

@app.post("/api/chat")
async def handle_chat_data(request: Request, protocol: str = Query('data')):
    messages = request.messages
    openai_messages = convert_to_openai_messages(messages)

    response = StreamingResponse(stream_text(openai_messages, protocol))
    response.headers['x-vercel-ai-data-stream'] = 'v1'
    return response
