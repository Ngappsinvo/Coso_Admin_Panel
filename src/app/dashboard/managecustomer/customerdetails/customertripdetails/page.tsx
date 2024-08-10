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

export default function CustomerTripDeatils() {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
    const [openEndDatePicker, setOpenEndDatePicker] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <>
            <PageTitle
                title="Manage Customer Details"
                breadcrumbs={[
                    { href: "/", label: "Manage Customer" },
                    { href: "/customer/riya-gupta", label: "Riya Gupta" },
                    { href: "/customer/riya-gupta/details", label: "Trip Details", isCurrent: true }
                ]}
            />
            <div className="py-5 px-5">

                <div className='flex justify-between items-center py-5'>
                    <span className="text-sm font-semibold">Trip ID: 98990</span>
                    <button className='border-2 border-[#e84c3d] p-1 rounded-lg text-sm font-medium text-[#e84c3d]'>Dwonload Invoice</button>
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
                                        <Link href='/' className="text-sm font-semibold text-gray-600 underline">View Details</Link>
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

                {/* Coso Trip */}
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
                                        <span className="text-gray-500 text-sm font-medium truncate">Experience:</span>
                                        <span className="ml-2 text-gray-800 text-sm">+15 years</span>
                                    </div>
                                    <div className="flex items-start mb-2">
                                        <AiOutlineMail className="w-4 h-4 mr-3 text-gray-700" />
                                        <span className="text-gray-500 text-sm font-medium truncate">Total Number of hosted Trip:</span>
                                        <span className="ml-2 text-gray-800 text-sm truncate">15</span>
                                    </div>
                                    <div className="flex items-start">
                                        <AiOutlineUser className="w-4 h-4 mr-3 text-gray-700" />
                                        <span className="text-gray-500 text-sm font-medium">Language:</span>
                                        <span className="ml-2 text-gray-800 text-sm">Speaks English and Hindi</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-4'>
                        <div className="flex items-start">
                            <span className="text-gray-800 text-sm font-medium truncate">About:</span>
                            <span className="ml-2 text-gray-500 text-sm font-medium">Hey Folks</span>
                        </div>
                        <p className='text-sm font-medium text-gray-500'>I am a music producer and art lover. Our earthly style luxury villas are thouthfullydesigned bring to you resort style living in your own personal abode.</p>
                    </div>
                </div>

                {/* Traveller Details */}
                <div className="mt-7 py-5 px-5 rounded-md flex flex-col lg:flex-row items-start lg:items-center gap-5 bg-[#fffff9]">
                    <div className="w-full">
                        <span className="text-sm font-bold">Traveller Details</span>
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-2 gap-2 lg:gap-4">
                            <div className="w-full lg:w-1/2">
                                <div className="flex items-start mb-2">
                                    <AiOutlineUser className="w-4 h-4 mr-3 text-gray-700" />
                                    <span className="text-gray-500 text-sm font-medium truncate">Name:</span>
                                    <span className="ml-2 text-gray-800 text-sm">Pragya Gupta</span>
                                </div>
                                <div className="flex items-start mb-2">
                                    <AiOutlineMail className="w-4 h-4 mr-3 text-gray-700" />
                                    <span className="text-gray-500 text-sm font-medium truncate">E-mail:</span>
                                    <span className="ml-2 text-gray-800 text-sm truncate">riya.gupta32@gmail.com</span>
                                </div>
                                <div className="flex items-start mb-2">
                                    <AiOutlineEnvironment className="w-4 h-4 mr-3 text-gray-700" />
                                    <span className="text-gray-500 text-sm font-medium">Address:</span>
                                    <span className="ml-2 text-gray-800 text-sm">Lorem ipsum dolor sit amet.</span>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="flex items-start mb-2">
                                    <AiOutlinePhone className="w-4 h-4 mr-3 text-gray-700" />
                                    <span className="text-gray-500 text-sm font-medium truncate">Mobile Number:</span>
                                    <span className="ml-2 text-gray-800 text-sm">+1234567890</span>
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

                {/* Customer Details */}
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

                {/* Arrival Guide */}
                <div className='my-3'>
                    <span className='text-sm font-bold'>Arrival Guide</span>
                </div>

                <div className="container mx-auto px-5 py-5 bg-[#fffff9]">
                    <div className="relative">
                        {/* <!-- Roadmap Line --> */}
                        <div className="absolute inset-0 flex items-center left-[10px]">
                            <div className="w-1 bg-gray-200 h-full"></div>
                        </div>

                        {/* <!-- Roadmap Items --> */}
                        <div className="relative space-y-6">
                            {/* <!-- Step 1 --> */}
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-6 h-6 bg-white flex items-center justify-center rounded-full shadow-md">
                                    <span className='w-3 h-3 bg-[#e84c3d] flex items-center justify-center rounded-full shadow-md'></span>
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-sm font-bold mb-4 capitalize">Lorem ipsum dolor sit amet consectetur</h3>
                                    <p className="text-gray-400 text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequatur quis sit commodi incidunt at dolorem nesciunt, exercitationem ipsa inventore ratione, assumenda voluptatibus eos quisquam provident. Cumque laudantium quisquam minima! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequatur quis sit commodi incidunt at dolorem nesciunt, exercitationem ipsa inventore ratione, assumenda voluptatibus eos quisquam provident. Cumque laudantium quisquam minima!</p>
                                </div>
                            </div>

                            {/* <!-- Step 2 --> */}
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-6 h-6 bg-white flex items-center justify-center rounded-full shadow-md">
                                    <span className='w-3 h-3 bg-[#e84c3d] flex items-center justify-center rounded-full shadow-md'></span>
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-sm font-bold mb-4 capitalize">Lorem ipsum dolor sit amet consectetur</h3>
                                    <p className="text-gray-400 text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequatur quis sit commodi incidunt at dolorem nesciunt, exercitationem ipsa inventore ratione, assumenda voluptatibus eos quisquam provident. Cumque laudantium quisquam minima! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequatur quis sit commodi incidunt at dolorem nesciunt, exercitationem ipsa inventore ratione, assumenda voluptatibus eos quisquam provident. Cumque laudantium quisquam minima!</p>
                                </div>
                            </div>

                            {/* <!-- Step 3 --> */}
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-6 h-6 bg-white flex items-center justify-center rounded-full shadow-md">
                                    <span className='w-3 h-3 bg-[#e84c3d] flex items-center justify-center rounded-full shadow-md'></span>
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-sm font-bold mb-4 capitalize">Lorem ipsum dolor sit amet consectetur</h3>
                                    <p className="text-gray-400 text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequatur quis sit commodi incidunt at dolorem nesciunt, exercitationem ipsa inventore ratione, assumenda voluptatibus eos quisquam provident. Cumque laudantium quisquam minima! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequatur quis sit commodi incidunt at dolorem nesciunt, exercitationem ipsa inventore ratione, assumenda voluptatibus eos quisquam provident. Cumque laudantium quisquam minima!</p>
                                    <p className="text-gray-400 text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequatur quis sit commodi incidunt at dolorem nesciunt, exercitationem ipsa inventore ratione, assumenda voluptatibus eos quisquam provident. Cumque laudantium quisquam minima! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequatur quis sit commodi incidunt at dolorem nesciunt, exercitationem ipsa inventore ratione, assumenda voluptatibus eos quisquam provident. Cumque laudantium quisquam minima!</p>
                                </div>
                            </div>

                            {/* <!-- Step 4 --> */}
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-6 h-6 bg-white flex items-center justify-center rounded-full shadow-md">
                                    <span className='w-3 h-3 bg-[#e84c3d] flex items-center justify-center rounded-full shadow-md'></span>
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-sm font-bold mb-4 capitalize">Lorem ipsum dolor sit amet consectetur</h3>
                                    <p className={`text-gray-400 text-sm font-medium ${isExpanded ? 'line-clamp-none' : 'line-clamp-3'}`}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequatur quis sit commodi incidunt at dolorem nesciunt, exercitationem ipsa inventore ratione, assumenda voluptatibus eos quisquam provident. Cumque laudantium quisquam minima! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequatur quis sit commodi incidunt at dolorem nesciunt, exercitationem ipsa inventore ratione, assumenda voluptatibus eos quisquam provident. Cumque laudantium quisquam minima!
                                    </p>
                                    <span className="mt-2 text-[#e84c3d] font-medium text-sm underline"
                                            onClick={toggleReadMore}>{isExpanded ? 'Read Less' : 'Read More'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Price Breakup */}
                <div className='px-4 py-4 sm:px-5 sm:py-5 bg-[#fffff9] mt-5 mb-10'>
                    <h1 className='font-bold text-lg sm:text-xl mb-2'>Price Breakup</h1>

                    <span className='font-bold text-sm sm:text-md'>Total Amount</span>
                    <div className='px-2 sm:px-3 py-4 sm:py-5'>
                        <div className='flex justify-between items-center mb-4 sm:mb-5'>
                            <span className='text-xs sm:text-sm font-semibold text-gray-500'>1 Rooms x Private Sharing Room</span>
                            <span className='text-xs sm:text-sm font-medium'>$ 42,100</span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span className='text-xs sm:text-sm font-semibold text-gray-500'>Taxes and Service</span>
                            <span className='text-xs sm:text-sm font-medium'>$ 2,434</span>
                        </div>
                    </div>

                    <span className='font-bold text-sm sm:text-md'>Discount Coupon</span>
                    <div className='flex justify-between items-center py-4 sm:py-5'>
                        <span className='text-[#e84c3d] font-bold text-sm sm:text-base'>MMTBESTBUY</span>
                        <span className='text-xs sm:text-sm text-[#2dba28] font-semibold'>-$ 5,078</span>
                    </div>

                    <hr className='mb-2' />

                    <div className='flex justify-between items-center mb-3 sm:mb-4'>
                        <span className='text-xs sm:text-sm font-bold'>Total Price</span>
                        <span className='text-xs sm:text-sm font-semibold'>$ 40,456</span>
                    </div>
                    <div className='flex justify-between items-center'>
                        <span className='text-xs sm:text-sm font-bold'>Booking Amount</span>
                        <span className='text-xs sm:text-sm font-semibold text-[#e84c3d]'>$ 20,123</span>
                    </div>
                </div>

            </div>
        </>
    );
}

