import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Image from 'next/image';

interface PasswordInputProps {
    label: string;
    placeholder: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, placeholder }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='mt-5'>
            <label className='block font-semibold text-gray-500 pb-3 text-sm'>{label}</label>
            <div className='relative'>
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                    <Image src="/lock.png" alt='' width={15} height={15} />
                </span>
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder={placeholder}
                    className='w-full pl-10 pr-10 outline-red-300 p-2 h-10 rounded-md border border-gray-300 placeholder:text-sm'
                />
                <span
                    className='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer'
                    onClick={togglePasswordVisibility}
                >
                    {showPassword ? <AiOutlineEye className='text-gray-400' /> : <AiOutlineEyeInvisible className='text-gray-400' />}
                </span>
            </div>
        </div>
    );
};

export default PasswordInput;
