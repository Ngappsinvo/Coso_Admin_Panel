"use client"
import React, { useState } from 'react';
import PageTitle from "@/components/ui/PageTitle";
import Image from 'next/image';
import PasswordInput from '@/components/ui/PasswordInput';

export default function ManageSetting() {
    return (
        <>
            <PageTitle
                title="Manage CMS"
                breadcrumbs={[{ href: "/", label: "Manage CMS", isCurrent: true }]}
            />
            <div className="px-5 py-5 pt-20">
                <div className="border p-5 rounded-lg">
                    <span className="text-md font-semibold">Manage Setting</span>
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-10 mt-5">
                        <div className='md:col-span-4'>
                            <PasswordInput label="Current Password" placeholder="Current Password" />
                            <PasswordInput label="New Password" placeholder="New Password" />
                            <PasswordInput label="Confirm Password" placeholder="Confirm Password" />
                            <div className='mt-10 md:mt-52'>
                                <button className='bg-[#e84c3d] rounded-lg p-2 px-14 text-white w-full md:w-auto'>Save</button>
                            </div>
                        </div>
                        <div className='flex justify-center items-end md:col-span-2'>
                            <Image src='/lock-img.png' alt='Security Lock' width={400} height={400} className='w-full md:w-auto' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
