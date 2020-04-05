import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism-light';
import okaidia from 'react-syntax-highlighter/dist/cjs/styles/prism/okaidia';

import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import yaml from 'react-syntax-highlighter/dist/cjs/languages/prism/yaml';
import php from 'react-syntax-highlighter/dist/cjs/languages/prism/php';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('yaml', yaml);
SyntaxHighlighter.registerLanguage('php', php);

export const Code = ({ children, className }) => {
  const language = className.replace(/language-/, '');

  return (
    <SyntaxHighlighter
      language={language}
      style={okaidia}
      codeTagProps={{}}
      useInlineStyles
    >
      {children}
    </SyntaxHighlighter>
  );
};
