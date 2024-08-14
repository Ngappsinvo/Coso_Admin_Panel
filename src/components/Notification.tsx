import { X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface NotificationItem {
    id: string;
    title: string;
    description: string;
    time: string;
    type: 'coo-trip' | 'event' | 'alert' | 'location' | 'announcement' | 'success';
}

const NotificationIcon: React.FC<{ type: NotificationItem['type'] }> = ({ type }) => {
    switch (type) {
        case 'coo-trip':
            return <span><Image src="/coso.png" alt='' width={20} height={20} /></span>;
        case 'event':
            return <span><Image src="/calender.png" alt='' width={20} height={20} /></span>;
        case 'alert':
            return <span>⚠️</span>;
        case 'location':
            return <span>📍</span>;
        case 'announcement':
            return <span>📢</span>;
        case 'success':
            return <span>✅</span>;
        default:
            return null;
    }
};

const Notification: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const notifications: NotificationItem[] = [
        { id: '1', title: 'Coso Trip', description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '30 min', type: 'coo-trip' },
        { id: '2', title: 'Lorem ipsum dolor sit amet,', description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '30 min', type: 'event' },
        { id: '3', title: 'Lorem ipsum dolor sit amet,', description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '1hr', type: 'alert' },
        { id: '4', title: 'Lorem ipsum dolor sit amet,', description: "Today's the day. Your culinary adventure is almost there.", time: '1 days ago', type: 'location' },
        { id: '5', title: 'Lorem ipsum dolor sit amet,', description: "Today's the day. Your culinary adventure is almost there.", time: '1 days ago', type: 'success' },
        { id: '6', title: 'Coso Trip', description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '30 min', type: 'coo-trip' },
        { id: '7', title: 'Lorem ipsum dolor sit amet,', description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '30 min', type: 'event' },
        { id: '8', title: 'Lorem ipsum dolor sit amet,', description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '1hr', type: 'alert' },
        { id: '9', title: 'Lorem ipsum dolor sit amet,', description: "Today's the day. Your culinary adventure is almost there.", time: '1 days ago', type: 'location' },
    ];

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-start z-50">
            <div className="bg-white w-full sm:w-[28rem] lg:w-[35rem] mt-0 mr-0 overflow-hidden">
                <div>
                    <div className="flex justify-between items-center mb-2 p-2 px-4 bg-[#e84c3d]">
                        <h2 className="text-md font-semibold text-white">Notification</h2>
                        <div className='h-5 w-5 flex justify-center bg-white rounded-full'>
                            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                                <X size={13} color='#e84c3d' />
                            </button>
                        </div>
                    </div>
                    <span className='px-5 text-sm font-semibold text-black'>Today</span>
                    <div className="space-y-4 p-5 pt-2 overflow-y-auto">
                        {notifications.map((item) => (
                            <div key={item.id} className="bg-red-50 py-2 px-4 rounded-lg flex justify-between">
                                <div className="flex mb-1 gap-2">
                                    <div>
                                        <NotificationIcon type={item.type} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-black text-sm">{item.title}</h3>
                                        <p className="text-xs text-gray-500">{item.description}</p>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-700 w-24 text-right">{item.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;
