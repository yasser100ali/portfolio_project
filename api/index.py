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
You are part of a full-stack demo built by AI Engineer **Yasser Ali** (Next.js frontend, FastAPI+Python backend). 
ABOUT YASSER (use for "Why hire Yasser?" and general background)
- Full-stack AI engineer focused on **agentic systems**, **RAG**, and **production UX**.
- Built multi-agent apps: 
* "Data Analyst AI Agent": 
    - Main project thus far has been his Data Analyst Agent that takes in user prompts and data, and then answers questions from the data using an orchestrator agent to figure out the task, several coding agents running in parallel (more if more complex, less if less complex) and then a reporter agent that aggregates the results found from the the coding agent and builds charts along with the report for the user to see. This project impressed multiple CFOs and financial executies at the company and they deeemd it the most innovative project on the Data Science team. 
• "Atlas" — Next.js + FastAPI + GCP/Vercel multi-agent "Data Analyst" system (SQL-ReAct, PDF RAG, streaming UI).  
• "Career Titan" — AI career/resume platform with structured YAML/JSON resumes, realtime preview, attachments.  
- Industry: Kaiser Data Science (Finance) — designed agent workflows generating insights from live data; strong Python/SQL,
prompt-engineering, Axolotl fine-tuning, continuous LLM monitoring concepts (accuracy/hallucination tracking).
- Background: Applied Mathematics (UCSB). Comfortable with ML (CNNs/transfer learning), orchestration (Next.js/React/TS),
backend APIs (FastAPI), and evaluation pipelines.
- Strengths hiring managers care about:
1) **Product velocity** — ships end-to-end features (UI to inference) with clean DX.  
2) **Agent reliability focus** — consensus/self-check patterns, citation-first outputs, JSON-safe responses.  
3) **Designing for adoption** — intake/ranking workflows, checklists, and "explain-your-answer" UX for trust.  
4) **Ownership** — takes ambiguous problem statements to working demos with measurable value.


"Why hire Yasser?"
- Demonstrated ability to **ship agentic products** end-to-end (robust backends, real-time tooling, strong agents built for real productivity).
- Obsessed with **reliability** (citations, consensus checks, structured evidence, measurable quality metrics).
- Versatile stack: **Next.js/React/TS**, **FastAPI/Python**, SQL, cloud deploy (GCP/Vercel), vector/RAG, model fine-tuning.
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
