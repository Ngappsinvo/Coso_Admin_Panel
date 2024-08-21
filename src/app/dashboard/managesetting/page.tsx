"use client"
import React, { useState } from 'react';
import PageTitle from "@/components/ui/PageTitle";
import Image from 'next/image';
import PasswordInput from '@/components/ui/PasswordInput';
import { ToastContainer, toast } from 'react-toastify';  // Importing toast functions
import 'react-toastify/dist/ReactToastify.css'; 

export default function ManageSetting() {
    const [currentPassword, setCurrentPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [errors, setErrors] = useState<{ currentPassword?: string, newPassword?: string, confirmPassword?: string }>({});

    const validateForm = (): boolean => {
        const newErrors: { currentPassword?: string, newPassword?: string, confirmPassword?: string } = {};

        // Example validation logic
        if (!currentPassword) {
            newErrors.currentPassword = 'Current password is required.';
        }

        if (!newPassword) {
            newErrors.newPassword = 'New password is required.';
        } else if (newPassword.length < 6) {
            newErrors.newPassword = 'New password must be at least 6 characters long.';
        }

        if (confirmPassword !== newPassword) {
            newErrors.confirmPassword = 'Passwords do not match.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSave = () => {
        if (validateForm()) {
            // Proceed with saving the settings
            console.log('Form is valid. Saving settings...');
            toast.success('Sccessfully'); 
        }
    };
    

    return (
        <>
        <ToastContainer />
            <PageTitle
                title="Manage CMS"
                breadcrumbs={[{ href: "/", label: "Manage CMS", isCurrent: true }]}
            />
            <div className="px-5 py-5 pt-20">
                <div className="border p-5 rounded-lg">
                    <span className="text-md font-semibold">Manage Setting</span>
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-10 mt-5">
                        <div className='md:col-span-4'>
                            <PasswordInput
                                label="Current Password"
                                placeholder="Current Password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                error={errors.currentPassword}
                            />
                            <PasswordInput
                                label="New Password"
                                placeholder="New Password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                error={errors.newPassword}
                            />
                            <PasswordInput
                                label="Confirm Password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                error={errors.confirmPassword}
                            />
                            <div className='mt-10 md:mt-52'>
                                <button
                                    className='bg-[#e84c3d] rounded-lg p-2 px-14 text-white w-full md:w-auto'
                                    onClick={handleSave}
                                >
                                    Save
                                </button>
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
