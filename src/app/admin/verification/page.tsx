"use client"
import Image from 'next/image';
import React, { useState, useRef, useEffect, ChangeEvent, KeyboardEvent, RefCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Verification() {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [timer, setTimer] = useState(60); // Timer in seconds
    const [isTimerActive, setIsTimerActive] = useState(true);
    const [otpError, setOtpError] = useState<string>(''); // State for OTP validation error
    const inputs = useRef<HTMLInputElement[]>([]);

    const correctOtp = '123456'; // Hardcoded correct OTP for demonstration

    useEffect(() => {
        if (isTimerActive) {
            const interval = setInterval(() => {
                setTimer((prev) => {
                    if (prev === 1) {
                        clearInterval(interval);
                        setIsTimerActive(false); // Stop the timer when it reaches zero
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [isTimerActive]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = e.target.value.slice(0, 1); // Only take the first character
        setOtp(newOtp);

        // Move focus to the next input field
        if (e.target.value && index < 5) {
            inputs.current[index + 1]?.focus();
        }
        setOtpError(''); // Clear error when user starts typing
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
        // Move focus to the previous input field when backspace is pressed
        if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
            inputs.current[index - 1]?.focus();
        }
    };

    const setRef: RefCallback<HTMLInputElement> = (el) => {
        if (el) {
            // Add the element to the array if it's not already there
            if (!inputs.current.includes(el)) {
                inputs.current.push(el);
            }
        }
    };

    const handleSubmit = () => {
        const enteredOtp = otp.join('');

        // Validate if all OTP fields are filled
        if (otp.some(value => value === '')) {
            setOtpError('Please enter all 6 digits of the OTP.');
            return;
        }

        // Check if the entered OTP matches the correct OTP
        if (enteredOtp === correctOtp) {
            toast.success('OTP verified successfully!');  // Show success toast
            // You can add further logic here, such as redirecting the user
            return;
        } else {
            setOtpError('The OTP you entered is incorrect. Please try again.');
        }
    };

    const resendCode = () => {
        setIsTimerActive(true);
        setTimer(60); // Reset timer to 60 seconds
        setOtp(['', '', '', '', '', '']); // Clear OTP input fields
        setOtpError(''); // Clear any previous errors
        // Add code to resend the OTP
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
                    <h1 className='text-2xl font-bold text-center text-[#e84c3d]'>Verification required</h1>
                    <p className='text-sm text-center text-gray-600 pt-5 px-4'>
                        To continue, complete this verification step. We've sent an OTP to the e-mail xyz********. Please enter it below to complete Verification.
                    </p>

                    {/* OTP Input */}
                    <div className='mt-5 flex justify-between px-5'>
                        {otp.map((value, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength={1}
                                value={value}
                                onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className={`w-12 h-12 text-center border rounded-full text-lg focus:outline-none ${otpError ? 'border-red-500' : 'border-gray-300'}`}
                                ref={setRef}
                            />
                        ))}
                    </div>
                    {otpError && <p className='text-red-500 text-center text-xs mt-2 font-semibold'>{otpError}</p>} {/* OTP Error Message */}
                    {/* Timer */}
                    <div className='my-7 text-center text-sm text-gray-600'>
                        {isTimerActive ? (
                            `${Math.floor(timer / 60)}:${(timer % 60).toString().padStart(2, '0')}`
                        ) : null}
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button onClick={handleSubmit} className='w-full bg-[#e84c3d] rounded-md p-2 text-white shadow-lg'>Submit</button>
                    </div>
                    <div className='mt-5 text-center text-sm text-gray-600'>
                        {isTimerActive ? (
                            <button onClick={resendCode} className='font-semibold' disabled>
                                Resend the code again
                            </button>
                        ) : (
                            <button onClick={resendCode} className='text-[#e84c3d] font-semibold'>
                                Resend the code again
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
