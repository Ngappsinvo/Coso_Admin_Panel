import React from 'react';
import { AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

interface PasswordInputProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, placeholder, value, onChange, error }) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='mt-5'>
            <label className='block font-bold pb-2'>{label}</label>
            <div className='relative'>
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                    <AiOutlineLock className='text-gray-400' />
                </span>
                <input 
                    type={showPassword ? 'text' : 'password'} 
                    placeholder={placeholder} 
                    value={value}
                    onChange={onChange}
                    className={`w-full pl-10 pr-10 outline-red-300 p-2 h-10 rounded-md border ${error ? 'border-red-500' : 'border-gray-300'} placeholder:text-sm`}
                />
                <span 
                    className='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer'
                    onClick={togglePasswordVisibility}
                >
                    {showPassword ? <AiOutlineEye className='text-gray-400' /> : <AiOutlineEyeInvisible className='text-gray-400' /> }
                </span>
            </div>
            {error && <p className='text-red-500 text-xs mt-1'>{error}</p>}
        </div>
    );
};

export default PasswordInput;
