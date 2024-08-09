"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export default function SetPassword() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='relative w-full h-screen'>
            {/* Background Image */}
            <div className='absolute inset-0'>
                <Image
                    src="/bg.png"
                    alt="Background Image"
                    layout="fill"
                    // objectFit="cover"
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

                    
                    {/* Password Input */}
                    <div className='mt-5'>
                        <label className='block font-bold pb-2'>Old Password</label>
                        <div className='relative'>
                            <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                                <AiOutlineLock className='text-gray-400' />
                            </span>
                            <input 
                                type={showPassword ? 'text' : 'password'} 
                                placeholder='Enter your password' 
                                className='w-full pl-10 pr-10 outline-red-300 p-2 h-10 rounded-md border border-gray-300 placeholder:text-sm' 
                            />
                            <span 
                                className='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer'
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <AiOutlineEye className='text-gray-400' /> : <AiOutlineEyeInvisible className='text-gray-400' /> }
                            </span>
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className='mt-5'>
                        <label className='block font-bold pb-2'>New Password</label>
                        <div className='relative'>
                            <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                                <AiOutlineLock className='text-gray-400' />
                            </span>
                            <input 
                                type={showPassword ? 'text' : 'password'} 
                                placeholder='Enter your password' 
                                className='w-full pl-10 pr-10 outline-red-300 p-2 h-10 rounded-md border border-gray-300 placeholder:text-sm' 
                            />
                            <span 
                                className='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer'
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <AiOutlineEye className='text-gray-400' /> : <AiOutlineEyeInvisible className='text-gray-400' /> }
                            </span>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className='mt-5'>
                        <button className='w-full bg-[#e84c3d] rounded-md p-2 text-white shadow-lg'>Set Password</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
