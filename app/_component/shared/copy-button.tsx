'use client';

import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CopyTextButton = ({ text }: { text?: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <CopyToClipboard text={text ?? ''} onCopy={handleCopy}>
      <button className='border rounded-lg py-1 px-2'>
        {isCopied ? '복사 완료' : '복사'}
      </button>
    </CopyToClipboard>
  );
};

export default CopyTextButton;
