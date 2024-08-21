"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminLogin() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = () => {
        let valid = true;

        if (!email.trim()) {  // Check if email is empty
            setEmailError('Email is required.');
            toast.error('Email is required.');
            valid = false;
        } else if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
            toast.error('Please enter a valid email address.');
            valid = false;
        } else {
            setEmailError('');
        }

        if (!password.trim()) {  // Check if password is empty
            setPasswordError('Password is required.');
            toast.error('Password is required.');
            valid = false;
        } else if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters long.');
            toast.error('Password must be at least 6 characters long.');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (valid) {
            // Handle form submission
            toast.success('Login Successfully.');
            console.log('Form is valid. Submitting...');
        }
    };

    return (
        <div className='relative w-full h-screen'>
            <ToastContainer />
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
                    <h1 className='text-2xl font-bold text-center text-[#e84c3d]'>Login</h1>

                    {/* Email Input */}
                    <div className='mt-5'>
                        <label className='block font-bold pb-2'>E-mail</label>
                        <div className='relative'>
                            <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                                <AiOutlineMail className='text-gray-400' />
                            </span>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Enter your email'
                                className={`w-full pl-10 outline-red-300 p-2 h-10 rounded-md border ${emailError ? 'border-red-500' : 'border-gray-300'} placeholder:text-sm`}
                            />
                        </div>
                        {emailError && <p className='text-red-500 text-xs mt-1 font-semibold'>{emailError}</p>}
                    </div>

                    {/* Password Input */}
                    <div className='mt-5'>
                        <label className='block font-bold pb-2'>Password</label>
                        <div className='relative'>
                            <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                                <AiOutlineLock className='text-gray-400' />
                            </span>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Enter your password'
                                className={`w-full pl-10 pr-10 outline-red-300 p-2 h-10 rounded-md border ${passwordError ? 'border-red-500' : 'border-gray-300'} placeholder:text-sm`}
                            />
                            <span
                                className='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer'
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <AiOutlineEye className='text-gray-400' /> : <AiOutlineEyeInvisible className='text-gray-400' />}
                            </span>
                        </div>
                        <div className='flex justify-between items-center'>
                            {passwordError && <p className='text-red-500 text-xs mt-1 font-semibold'>{passwordError}</p>}
                            <Link href="/admin/forgetpassword" className='text-xs text-gray-500 mt-1 font-medium ml-auto'>
                                Forget Password?
                            </Link>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className='mt-5'>
                        <button
                            onClick={handleSubmit}
                            className='w-full bg-[#e84c3d] rounded-md p-2 text-white shadow-lg'
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
