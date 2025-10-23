
import React, { useState, useEffect } from 'react';

interface TerminalProps {
  message: string;
}

export const Terminal: React.FC<TerminalProps> = ({ message }) => {
  const [typedMessage, setTypedMessage] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setTypedMessage('');
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < message.length) {
        setTypedMessage((prev) => prev + message.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [message]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="p-4 bg-black border border-green-700 rounded-md text-left text-sm md:text-base">
      <pre className="whitespace-pre-wrap">
        <code>
          {typedMessage}
          <span className={`bg-green-400 w-2 h-4 inline-block ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
        </code>
      </pre>
    </div>
  );
};
