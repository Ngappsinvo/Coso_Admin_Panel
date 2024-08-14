// components/ChatMessage.tsx
import React from 'react';
import Image from 'next/image';

interface ChatMessageProps {
    message: string;
    avatar: string;
    timestamp: string;
    isSender: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, avatar, timestamp, isSender }) => {
    return (
        <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} mb-4 items-end`}>
            {!isSender && (
                <div className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 mr-2">
                    <Image src={avatar} alt="Receiver Avatar" width={48} height={48} className='rounded-full object-cover' />
                </div>
            )}
            <div className="px-4 py-1 rounded-lg max-w-[15rem] sm:max-w-sm bg-[#fffdf3] text-gray-400 flex flex-col justify-between">
                <div className="text-sm mb-1 text-gray-500 break-words whitespace-pre-wrap">{message}</div>
                <div className="text-xs text-gray-500 text-right">{timestamp}</div>
            </div>

            {isSender && (
                <div className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 ml-2">
                    <Image src={avatar} alt="Sender Avatar" width={48} height={48} className='rounded-full object-cover' />
                </div>
            )}
        </div>
    );
};

export default ChatMessage;
