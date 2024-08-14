import { useState } from 'react';
import { BellIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Link from "next/link";
import Notification from '../Notification'; // Adjust the path according to your file structure

type BreadcrumbItem = {
    href: string;
    label: string;
    isCurrent?: boolean;
};

type Props = {
    title: string;
    breadcrumbs?: BreadcrumbItem[];
    className?: string;
}

export default function PageTitle({ title, breadcrumbs = [], className }: Props) {
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

    const toggleNotifications = () => {
        setIsNotificationsOpen(!isNotificationsOpen);
    };

    return (
        <div className={`w-full py-3 px-3 sm:py-5 sm:px-5 font-medium text-[#e84c3d] border-b border-[#e84c3d] flex flex-col sm:flex-row justify-between items-start sm:items-center ${className}`}>
            <nav className="w-full sm:w-auto flex items-start sm:items-center text-gray-700 rounded-lg" aria-label="Breadcrumb">
                <ol className="inline-flex items-start sm:items-center">
                    {breadcrumbs.map((item, index) => (
                        <li key={index} className="inline-flex items-center">
                            {index > 0 && (
                                <svg className="w-5 h-5 text-[#e84c3d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
                                </svg>
                            )}
                            {item.isCurrent ? (
                                <span className="text-xs lg:text-sm text-black font-semibold">{item.label}</span>
                            ) : (
                                <Link href={item.href} className="text-[#e84c3d] font-semibold inline-flex items-center text-xs lg:text-sm ">
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
            <div className='mt-3 sm:mt-0 flex justify-start sm:justify-center items-center gap-3 w-full sm:w-auto'>
            <div>
                    <BellIcon className="cursor-pointer" onClick={toggleNotifications} />
                    <Notification isOpen={isNotificationsOpen} onClose={() => setIsNotificationsOpen(false)} />
                </div>
                <div className='flex items-center gap-2 bg-[#e84c3d] py-1 pl-1 pr-3 text-white text-sm font-normal rounded-full'>
                    <div className='w-[30px] h-[30px] rounded-full bg-white overflow-hidden'>
                        <Image
                            src="/admin.png"
                            alt='Profile picture'
                            width={500}
                            height={500}
                            className='object-cover w-full h-full'
                        />
                    </div>
                    <span>Deborah Hicks</span>
                </div>
            </div>
        </div>
    );
}
