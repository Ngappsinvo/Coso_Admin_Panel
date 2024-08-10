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

export default function HostsDeatils() {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
    const [openEndDatePicker, setOpenEndDatePicker] = useState(false);
    return (
        <>
            <PageTitle
                title="Manage Customer Details"
                breadcrumbs={[
                    { href: "/", label: "Manage Hosts" },
                    { href: "/customer/riya-gupta", label: "Riya Gupta" },
                    { href: "/customer/riya-gupta/details", label: "Details", isCurrent: true }
                ]}
            />
            <div className="py-5 px-5">
                <span className="text-sm font-semibold">Host ID: 98990</span>
                <div className='bg-[#fffff9] rounded-md mt-7 py-5 px-5'>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 ">
                        <div className="w-full lg:w-[170px] h-[150px] rounded-lg bg-white overflow-hidden flex justify-center items-center">
                            <Image src='/cosotrip.png' alt="" height={100} width={100} className='object-cover' />
                        </div>
                        <div className="w-full">
                            <span className="text-sm font-bold">Coso Trip</span>
                            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-2 gap-2 lg:gap-4">
                                <div className="w-full lg:w-1/2">
                                    <div className="flex items-start mb-2">
                                        <AiOutlinePhone className="w-4 h-4 mr-3 text-gray-700" />
                                        <span className="text-gray-500 text-xs font-medium truncate">Experience:</span>
                                        <span className="ml-2 text-gray-800 text-xs font-medium">+15 years</span>
                                    </div>
                                    <div className="flex items-start mb-2">
                                        <AiOutlineMail className="w-4 h-4 mr-3 text-gray-700" />
                                        <span className="text-gray-500 text-xs font-medium truncate">Total Number of hosted Trip:</span>
                                        <span className="ml-2 text-gray-800 text-xs font-medium  truncate">15</span>
                                    </div>
                                    <div className="flex items-start">
                                        <AiOutlineUser className="w-4 h-4 mr-3 text-gray-700" />
                                        <span className="text-gray-500 text-xs font-medium">Language:</span>
                                        <span className="ml-2 text-gray-800 text-xs font-medium">Speaks English and Hindi</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Date Picker */}
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

                <div className="p-3 bg-[#fffdf3] rounded-lg flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-max my-2">
                    <div className="flex items-center justify-between sm:gap-10 w-full sm:w-auto">
                        <span className="text-sm font-bold text-gray-500">Upcoming</span>
                        <div className="bg-[#e84c3d] rounded-full px-3 py-1 text-xs font-semibold text-white">
                            200
                        </div>
                    </div>
                    <div className="flex items-center justify-between sm:gap-10 w-full sm:w-auto">
                        <span className="text-sm font-semibold text-[#e84c3d]">Past</span>
                        <div className="bg-[#e84c3d] rounded-full px-3 py-1 text-xs font-semibold text-white">
                            500
                        </div>
                    </div>
                    <div className="flex items-center justify-between sm:gap-10 w-full sm:w-auto">
                        <span className="text-sm font-semibold text-gray-500">Ongoing</span>
                        <div className="bg-[#e84c3d] rounded-full px-3 py-1 text-xs font-semibold text-white">
                            50
                        </div>
                    </div>
                </div>

                {/* Experience */}
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
                                    <div className="flex items-center gap-1 mb-2">
                                        <Image src="/pin.png" alt="" width={15} height={15} />
                                        <span className="text-sm font-bold text-[#e84c3d]">Barcelona | Seville | Madrid</span>
                                    </div>
                                    <div className="flex items-center gap-1 mb-1">
                                        <Image src="/calender.png" alt="" width={12} height={12} />
                                        <p className="text-xs font-medium text-gray-500">
                                            12 Jan - 18 Jan'25 <span className="text-black font-semibold">(7 Nights)</span>
                                        </p>
                                    </div>
                                    <div>
                                        <Link href='/dashboard/managehosts/hostsdetails/hoststripdetails' className="text-xs font-semibold text-gray-600 underline">View Details</Link>
                                    </div>
                                    <div className="flex items-center gap-1 mt-1">
                                        <Image src="/coso.png" alt="" width={15} height={15} />
                                        <span className="text-gray-500 text-xs font-medium truncate">Hosted by :</span>
                                        <span className="text-black-200 text-xs font-medium">Coso Trip</span>
                                    </div>
                                </div>
                            </div>
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
                                    <div className="flex items-center gap-1 mb-2">
                                        <Image src="/pin.png" alt="" width={15} height={15} />
                                        <span className="text-sm font-bold text-[#e84c3d]">Barcelona | Seville | Madrid</span>
                                    </div>
                                    <div className="flex items-center gap-1 mb-1">
                                        <Image src="/calender.png" alt="" width={12} height={12} />
                                        <p className="text-xs font-medium text-gray-500">
                                            12 Jan - 18 Jan'25 <span className="text-black font-semibold">(7 Nights)</span>
                                        </p>
                                    </div>
                                    <div>
                                        <Link href='/dashboard/managehosts/hostsdetails/hoststripdetails' className="text-xs font-semibold text-gray-600 underline">View Details</Link>
                                    </div>
                                    <div className="flex items-center gap-1 mt-1">
                                        <Image src="/coso.png" alt="" width={15} height={15} />
                                        <span className="text-gray-500 text-xs font-medium truncate">Hosted by :</span>
                                        <span className="text-black-200 text-xs font-medium">Coso Trip</span>
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

