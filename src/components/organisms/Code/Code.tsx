import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import cc from 'classcat';
import s from './Code.module.css';

export const Code = ({ children, className, metastring: _, ...plugins }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    Prism.highlightElement(elementRef.current);
  }, []);

  return (
    <pre className={cc([s.code, 'line-numbers'])} {...plugins}>
      <code ref={elementRef} className={className.replace(/\s+/, '')}>
        {children.trim()}
      </code>
    </pre>
  );
};
