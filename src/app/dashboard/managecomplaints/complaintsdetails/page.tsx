"use client";
import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import PageTitle from "@/components/ui/PageTitle";
import ChatWindow from '@/components/chatting/ChatWindow';
import MessageInput from '@/components/chatting/MessageInput';

export default function ComplaintsDetails() {
    const [messages, setMessages] = useState<{ id: number; text: string; avatar: string; timestamp: string; isSender: boolean }[]>([
        { id: 1, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, autem distinctio.', avatar: '/1.png', timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }), isSender: false },
    ]);

    const handleSendMessage = (text: string) => {
        const currentTime = new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });
        setMessages([...messages, { id: messages.length + 1, text, avatar: '/2.png', timestamp: currentTime, isSender: true }]);
    };

    return (
        <>
            <PageTitle
                title="Manage Complaints Details"
                breadcrumbs={[
                    { href: "/", label: "Manage Complaints" },
                    { href: "/customer/riya-gupta/details", label: "Details", isCurrent: true }
                ]}
            />
            <div className='my-5 mx-3 sm:mx-5 md:mx-10 border bg-[#fffdf3] px-4 sm:px-6 md:px-10 py-4 rounded-lg'>
                <div className='space-y-4'>
                    <span className="text-sm font-semibold block sm:text-base"># 123 Issue With Refund</span>
                    <div className="flex gap-2 mt-2">
                        <span className="text-black-200 text-sm font-medium block sm:inline">Title:</span>
                        <span className="text-gray-500 text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, autem distinctio.</span>
                    </div>
                    <div className="mt-4 bg-[#e84c3d] rounded-full px-4 py-1 text-xs font-semibold text-white w-fit">
                        Id:232323
                    </div>
                    <div className="flex flex-col h-[calc(100vh-10rem)] sm:h-[calc(100vh-12rem)] mb-5 mt-10 bg-white">
                        <div className="flex-grow overflow-y-auto">
                            <ChatWindow messages={messages} />
                        </div>
                        <MessageInput onSendMessage={handleSendMessage} />
                    </div>
                </div>
            </div>
        </>
    );
}
