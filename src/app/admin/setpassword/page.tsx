"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SetPassword() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [oldPassword, setOldPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [oldPasswordError, setOldPasswordError] = useState<string>('');
    const [newPasswordError, setNewPasswordError] = useState<string>('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const validateForm = () => {
        let isValid = true;

        // Assuming the correct old password for demonstration purposes
        const correctOldPassword = 'oldpassword123';

        // Validate Old Password
        if (!oldPassword) {
            setOldPasswordError('Old password is required.');
            isValid = false;
        } else if (oldPassword !== correctOldPassword) {
            setOldPasswordError('Old password is incorrect.');
            isValid = false;
        } else {
            setOldPasswordError('');
        }

        // Validate New Password
        if (!newPassword) {
            setNewPasswordError('New password is required.');
            isValid = false;
        } else if (newPassword.length < 6) {
            setNewPasswordError('New password must be at least 6 characters long.');
            isValid = false;
        } else if (!/[A-Z]/.test(newPassword) || !/[0-9]/.test(newPassword) || !/[!@#$%^&*]/.test(newPassword)) {
            setNewPasswordError('New password must contain at least one uppercase letter, one number, and one special character.');
            isValid = false;
        } else {
            setNewPasswordError('');
        }

        return isValid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            // Show success toast notification
            toast.success('Password set successfully!');
            // Handle further actions like saving the new password, redirecting, etc.
            console.log('Password set successfully.');
        }
    };

    return (
        <div className='relative w-full h-screen'>
            {/* Background Image */}
            <div className='absolute inset-0'>
                <Image
                    src="/bg.png"
                    alt="Background Image"
                    fill
                    quality={100}
                />
            </div>
            {/* Content */}
            <div className='relative z-10 flex justify-center items-center w-full h-full'>
                <div className='w-[500px] p-5'>
                    <div className='flex justify-center mb-5'>
                        <Image src='/logo.png' alt='Logo' width={150} height={150} />
                    </div>
                    <h1 className='text-2xl font-bold text-center text-[#e84c3d]'>Set Password</h1>
                    <p className='text-sm text-center text-gray-600 pt-5 font-semibold px-2'>Please enter the password</p>

                    {/* Old Password Input */}
                    <div className='mt-5'>
                        <label className='block font-bold pb-2'>Old Password</label>
                        <div className='relative'>
                            <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                                <AiOutlineLock className='text-gray-400' />
                            </span>
                            <input 
                                type={showPassword ? 'text' : 'password'} 
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                placeholder='Enter your old password' 
                                className={`w-full pl-10 pr-10 outline-red-300 p-2 h-10 rounded-md border ${oldPasswordError ? 'border-red-500' : 'border-gray-300'} placeholder:text-sm`} 
                            />
                            <span 
                                className='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer'
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <AiOutlineEye className='text-gray-400' /> : <AiOutlineEyeInvisible className='text-gray-400' /> }
                            </span>
                        </div>
                        {oldPasswordError && <p className='text-red-500 text-xs mt-1 font-semibold'>{oldPasswordError}</p>}
                    </div>

                    {/* New Password Input */}
                    <div className='mt-5'>
                        <label className='block font-bold pb-2'>New Password</label>
                        <div className='relative'>
                            <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                                <AiOutlineLock className='text-gray-400' />
                            </span>
                            <input 
                                type={showPassword ? 'text' : 'password'} 
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder='Enter your new password' 
                                className={`w-full pl-10 pr-10 outline-red-300 p-2 h-10 rounded-md border ${newPasswordError ? 'border-red-500' : 'border-gray-300'} placeholder:text-sm`} 
                            />
                            <span 
                                className='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer'
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <AiOutlineEye className='text-gray-400' /> : <AiOutlineEyeInvisible className='text-gray-400' /> }
                            </span>
                        </div>
                        {newPasswordError && <p className='text-red-500 text-xs mt-1 font-semibold'>{newPasswordError}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className='mt-5'>
                        <button 
                            onClick={handleSubmit} 
                            className='w-full bg-[#e84c3d] rounded-md p-2 text-white shadow-lg'
                        >
                            Set Password
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
