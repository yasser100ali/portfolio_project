import Link from "next/link";
import React, { memo } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const normalizeMathMarkdown = (input: string): string => {
  let output = input;
  // Convert block lines like: [ ...latex... ] → $$ ... $$ so KaTeX renders
  output = output.replace(/^\s*\[(.+?)\]\s*$/gm, (fullMatch, inner) => {
    const content = String(inner).trim();
    if (/\\[a-zA-Z]+|[\^_]/.test(content)) {
      return `$$\n${content}\n$$`;
    }
    return fullMatch;
  });
  // Convert escaped TeX display delimiters \[ ... \] → $$ ... $$
  output = output.replace(/\\\[(.+?)\\\]/gs, (_m, inner) => `$$\n${inner}\n$$`);
  // Convert escaped inline delimiters \( ... \) → $...$
  output = output.replace(/\\\((.+?)\\\)/g, (_m, inner) => `$${inner}$`);
  return output;
};

const NonMemoizedMarkdown = ({ children }: { children: string }) => {
  const components: Partial<Components> = {
    // @ts-expect-error
    code: ({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        // @ts-expect-error
        <pre
          {...props}
          className={`${className} text-sm w-[80dvw] md:max-w-[500px] overflow-x-scroll bg-zinc-100 p-3 rounded-lg mt-2 dark:bg-zinc-800`}
        >
          <code className={match[1]}>{children}</code>
        </pre>
      ) : (
        <code
          className={`${className} text-sm bg-zinc-100 dark:bg-zinc-800 py-0.5 px-1 rounded-md`}
          {...props}
        >
          {children}
        </code>
      );
    },
    ol: ({ node, children, ...props }) => {
      return (
        <ol className="list-decimal list-outside ml-4" {...props}>
          {children}
        </ol>
      );
    },
    li: ({ node, children, ...props }) => {
      return (
        <li className="py-1" {...props}>
          {children}
        </li>
      );
    },
    ul: ({ node, children, ...props }) => {
      return (
        <ul className="list-disc list-outside ml-4" {...props}>
          {children}
        </ul>
      );
    },
    strong: ({ node, children, ...props }) => {
      return (
        <span className="font-semibold" {...props}>
          {children}
        </span>
      );
    },
    a: ({ node, children, ...props }) => {
      return (
        // @ts-expect-error
        <Link
          className="text-blue-500 hover:underline break-all"
          target="_blank"
          rel="noreferrer"
          {...props}
        >
          {children}
        </Link>
      );
    },
    h1: ({ node, children, ...props }) => {
      return (
        <h1 className="text-3xl font-semibold mt-6 mb-2" {...props}>
          {children}
        </h1>
      );
    },
    h2: ({ node, children, ...props }) => {
      return (
        <h2 className="text-2xl font-semibold mt-6 mb-2" {...props}>
          {children}
        </h2>
      );
    },
    h3: ({ node, children, ...props }) => {
      return (
        <h3 className="text-xl font-semibold mt-6 mb-2" {...props}>
          {children}
        </h3>
      );
    },
    h4: ({ node, children, ...props }) => {
      return (
        <h4 className="text-lg font-semibold mt-6 mb-2" {...props}>
          {children}
        </h4>
      );
    },
    h5: ({ node, children, ...props }) => {
      return (
        <h5 className="text-base font-semibold mt-6 mb-2" {...props}>
          {children}
        </h5>
      );
    },
    h6: ({ node, children, ...props }) => {
      return (
        <h6 className="text-sm font-semibold mt-6 mb-2" {...props}>
          {children}
        </h6>
      );
    },
    table: ({ node, children, ...props }) => {
      return (
        <div className="w-[80dvw] md:max-w-[720px] overflow-x-auto mt-2 rounded-lg ring-1 ring-border">
          <table className="w-full text-sm" {...props}>
            {children}
          </table>
        </div>
      );
    },
    thead: ({ node, children, ...props }) => {
      return (
        <thead className="bg-muted/60" {...props}>
          {children}
        </thead>
      );
    },
    tbody: ({ node, children, ...props }) => {
      return (
        <tbody className="divide-y divide-border" {...props}>
          {children}
        </tbody>
      );
    },
    tr: ({ node, children, ...props }) => {
      return (
        <tr className="even:bg-muted/30 hover:bg-muted/40" {...props}>
          {children}
        </tr>
      );
    },
    th: ({ node, children, ...props }) => {
      return (
        <th className="text-left font-medium px-3 py-2 whitespace-nowrap border-b border-border" {...props}>
          {children}
        </th>
      );
    },
    td: ({ node, children, ...props }) => {
      return (
        <td className="px-3 py-2 align-top border-b border-border" {...props}>
          {children}
        </td>
      );
    },
  };

  const normalized = React.useMemo(() => normalizeMathMarkdown(children), [children]);

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} components={components}>
      {normalized}
    </ReactMarkdown>
  );
};

export const Markdown = memo(
  NonMemoizedMarkdown,
  (prevProps, nextProps) => prevProps.children === nextProps.children,
);
