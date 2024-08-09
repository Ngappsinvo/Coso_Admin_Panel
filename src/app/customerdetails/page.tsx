"use client"
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PageTitle from "@/components/ui/PageTitle";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlinePhone, AiOutlineMail, AiOutlineUser, AiOutlineEnvironment, AiOutlineCalendar, AiOutlineTeam } from "react-icons/ai";
import { AiOutlineDown } from 'react-icons/ai';

export default function CustomerDeatils() {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
    const [openEndDatePicker, setOpenEndDatePicker] = useState(false);
    return (
        <>
            <PageTitle
                title="Manage Customer Details"
                breadcrumbs={[
                    { href: "/", label: "Manage Customer" },
                    { href: "/customer/riya-gupta", label: "Riya Gupta" },
                    { href: "/customer/riya-gupta/details", label: "Details", isCurrent: true }
                ]}
            />
            <div className="py-5 px-5">
                <span className="text-sm font-semibold">Customer ID: 98990</span>
                <div className="mt-7 py-5 px-5 rounded-md flex flex-col lg:flex-row items-start lg:items-center gap-5 bg-[#fffff9]">
                    <div className="w-full lg:w-[170px] h-[150px] rounded-lg bg-white overflow-hidden">
                        <Image src='/user-details.png' alt="" height={120} width={150} className='object-cover w-full h-full' />
                    </div>
                    <div className="w-full">
                        <span className="text-sm font-semibold">Riya Gupta</span>
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-2 gap-2 lg:gap-4">
                            <div className="w-full lg:w-1/2">
                                <div className="flex items-start mb-2">
                                    <AiOutlinePhone className="w-4 h-4 mr-3 text-gray-700" />
                                    <span className="text-gray-500 text-sm font-medium truncate">Mobile Number:</span>
                                    <span className="ml-2 text-gray-800 text-sm">+1234567890</span>
                                </div>
                                <div className="flex items-start mb-2">
                                    <AiOutlineMail className="w-4 h-4 mr-3 text-gray-700" />
                                    <span className="text-gray-500 text-sm font-medium truncate">E-mail:</span>
                                    <span className="ml-2 text-gray-800 text-sm truncate">riya.gupta32@gmail.com</span>
                                </div>
                                <div className="flex items-start">
                                    <AiOutlineUser className="w-4 h-4 mr-3 text-gray-700" />
                                    <span className="text-gray-500 text-sm font-medium">Gender:</span>
                                    <span className="ml-2 text-gray-800 text-sm">Female</span>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="flex items-start mb-2">
                                    <AiOutlineEnvironment className="w-4 h-4 mr-3 text-gray-700" />
                                    <span className="text-gray-500 text-sm font-medium">Address:</span>
                                    <span className="ml-2 text-gray-800 text-sm">Lorem ipsum dolor sit amet.</span>
                                </div>
                                <div className="flex items-start mb-2">
                                    <AiOutlineTeam className="w-4 h-4 mr-3 text-gray-700" />
                                    <span className="text-gray-500 text-sm font-medium truncate">Total Number Booking:</span>
                                    <span className="ml-2 text-gray-800 text-sm">5</span>
                                </div>
                                <div className="flex items-start">
                                    <AiOutlineCalendar className="w-4 h-4 mr-3 text-gray-700" />
                                    <span className="text-gray-500 text-sm font-medium">Date Of Birth:</span>
                                    <span className="ml-2 text-gray-800 text-sm">16 July 1996</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full py-3 sm:py-5 px-3 sm:px-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                    <div>
                        <span className="text-sm font-bold">All trips</span>
                    </div>
                    <div className="bg-[#fffaf6] rounded-md py-2 px-3 flex items-center gap-1">
                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setOpenStartDatePicker(true)}>
                            <Image src="/calender.png" alt="" width={15} height={15} />
                            <span className="text-xs font-semibold">From</span>
                            <AiOutlineDown className="w-3 h-3 text-gray-500 font-bold" />
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => {
                                    setStartDate(date);
                                    setOpenStartDatePicker(false);
                                }}
                                open={openStartDatePicker}
                                onClickOutside={() => setOpenStartDatePicker(false)}
                                className="hidden"
                                customInput={<div />}
                            />
                        </div>
                        <ArrowRightIcon className="w-4 h-4" />
                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setOpenEndDatePicker(true)}>
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => {
                                    setEndDate(date);
                                    setOpenEndDatePicker(false);
                                }}
                                open={openEndDatePicker}
                                onClickOutside={() => setOpenEndDatePicker(false)}
                                className="hidden"
                                customInput={<div />}
                            />
                            <Image src="/calender.png" alt="" width={15} height={15} />

                            <span className="text-xs font-semibold">To</span>
                            <AiOutlineDown className="w-3 h-3 text-gray-500 font-bold" />
                        </div>
                    </div>
                </div>

                <div className="py-5 px-5 rounded-md bg-[#fffff9]">
                    <div className='relative h-[5px] w-full bg-gradient-to-r from-[#832b22] via-[#be3e32] to-[#f0e5de] rounded-full mb-3'>
                        <Image src='/plane.png' alt='Plane Icon' height={50} width={50} className='w-[35px] h-[35px] sm:w-[47px] sm:h-[47px] absolute -top-4 sm:-top-5 right-7 sm:right-14 transform' />
                    </div>
                    <span className="text-sm font-bold text-[#e84c3d]">No More Booking Available</span>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 mt-3">
                        <div className="relative w-full lg:w-[170px] h-[150px] rounded-lg bg-white overflow-hidden">
                            <Image src='/user-img.png' alt="" height={120} width={150} className='object-cover w-full h-full' />
                            <span className='absolute top-2 left-2 bg-[#ecffc9] py-2 px-4 rounded-full text-[#2dba28] text-xs font-semibold'>
                                Completed
                            </span>
                        </div>
                        <div className="w-full bg-white p-0 lg:p-5">
                            <span className="text-sm font-bold">Experience Spain</span>
                            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-1 gap-4">
                                <div>
                                    <div className="flex items-center gap-1 mb-1">
                                        <Image src="/pin.png" alt="" width={15} height={15} />
                                        <span className="text-sm font-bold text-[#e84c3d]">Barcelona | Seville | Madrid</span>
                                    </div>
                                    <div className="flex items-center gap-1 mb-1">
                                        <Image src="/calender.png" alt="" width={15} height={15} />
                                        <p className="text-sm font-medium text-gray-500">
                                            12 Jan - 18 Jan'25 <span className="text-black font-semibold">(7 Nights)</span>
                                        </p>
                                    </div>
                                    <div>
                                        <Link href='/customertripdetails' className="text-sm font-semibold text-gray-600 underline">View Details</Link>
                                    </div>
                                    <div className="flex items-center gap-2 mt-1">
                                        <Image src="/coso.png" alt="" width={18} height={18} />
                                        <span className="text-gray-500 text-sm font-medium truncate">Hosted by:</span>
                                        <span className="text-black-200 text-sm font-medium">Coso Trip</span>
                                    </div>
                                </div>
                                <div className="w-full lg:w-auto">
                                    <div className="flex items-center gap-1">
                                        <Image src="/complete.png" alt="" width={15} height={15} />
                                        <span className="text-sm font-semibold">Completed</span>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <span className="text-sm font-medium text-[#2dba28]truncate">Total Paid:</span>
                                        <span className="ml-2 font-medium text-sm text-[#2dba28]">$27,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

