// components/ChatWindow.tsx
import React from 'react';
import ChatMessage from './ChatMessage';

interface ChatWindowProps {
  messages: { id: number; text: string; avatar: string; timestamp: string; isSender: boolean }[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  return (
    <div className="flex flex-col h-full overflow-y-auto px-3 md:px-10 py-5">
      {messages.map((msg) => (
        <ChatMessage
          key={msg.id}
          message={msg.text}
          avatar={msg.avatar}
          timestamp={msg.timestamp}
          isSender={msg.isSender}
        />
      ))}
    </div>
  );
};

export default ChatWindow;
