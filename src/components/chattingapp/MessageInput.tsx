// components/MessageInput.tsx
import Image from 'next/image';
import React, { useState } from 'react';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="flex items-center p-4 sm:p-6">
      <div className="flex items-center flex-grow relative">
        <input
          type="text"
          className="w-full py-3 px-4 pr-12 border border-gray-300 rounded-full text-sm focus:outline-none"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button
          className="absolute right-5 top-1/2 transform -translate-y-1/2"
          onClick={handleSendMessage}
        >
          <Image src="/send.png" alt="Send" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
