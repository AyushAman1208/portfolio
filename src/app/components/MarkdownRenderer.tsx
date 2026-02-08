// components/MarkdownRenderer.tsx
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

type Props = {
  content: string;
};

export default function MarkdownRenderer({ content }: Props) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
      components={{
        h1: ({ children }) => (
          <h1 className="text-3xl font-bold mb-4">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-2xl font-semibold mb-3">{children}</h2>
        ),
        p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
        code({ className, children, ...props }) {
          const isBlock = className?.startsWith("language-");

          if (!isBlock) {
            return (
              <code className="bg-gray-100 px-1 rounded text-sm">
                {children}
              </code>
            );
          }

          return (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
