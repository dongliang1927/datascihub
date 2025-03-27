import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function CodeBlock({ code, language = 'python' }) {
  return (
    <div className="code-block">
      <SyntaxHighlighter 
        language={language} 
        style={vscDarkPlus}
        showLineNumbers={true}
        wrapLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
} 