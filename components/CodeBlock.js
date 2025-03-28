import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function CodeBlock({ language, code }) {
  return (
    <div className="bg-gray-800 text-gray-100 p-4 rounded-md my-6 overflow-x-auto">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-400">{language}</span>
      </div>
      <pre className="text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
} 