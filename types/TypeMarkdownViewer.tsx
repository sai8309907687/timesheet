"use client";
import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownViewerProps {
  markdownText: string;
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ markdownText }) => {
  const markdownContent = useMemo(() => markdownText, [markdownText]);

  return (
    <div className="mx-auto p-4 bg-white rounded-lg shadow-md text-justify">
      <ReactMarkdown
        // className="prose prose-lg max-w-full text-gray-700"
        remarkPlugins={[remarkGfm]}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;
