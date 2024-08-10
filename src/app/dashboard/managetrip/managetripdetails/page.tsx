"use client"
import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import PageTitle from "@/components/ui/PageTitle";
import Image from "next/image";
import Link from "next/link";
import { Search } from 'lucide-react';
import Accordion from '@/components/accordion';
import { FaStar } from 'react-icons/fa';
import { AiOutlinePhone, AiOutlineMail, AiOutlineUser, AiOutlineEnvironment, AiOutlineCalendar, AiOutlineTeam } from "react-icons/ai";
import Modal from '@/components/Modal';

export default function ManageTripDeatils() {
    const [isReadMore, setIsReadMore] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    const itineraryData = [
        {
            title: (
                <div className='flex items-center gap-2 sm:gap-4'>
                    <div className="w-14 h-14 bg-white rounded-md flex items-center justify-center px-3">
                        <span className="text-sm font-bold text-[#e84c3d] leading-tight text-center">Day 1</span>
                    </div>
                    <div>
                        <span className="text-xs">Mon, 12th August'24</span>
                        <p className="text-sm font-bold">Arrival in Kochi & Trip Day</p>
                    </div>
                </div>
            ),
            content: (
                <div>
                    <ul className="list-decimal pl-5 text-gray-500 text-xs sm:text-sm">
                        <li>Reached Airport /Train Station - Pickup Included (Fixed Time)</li>
                        <li>Transferred To Hotel</li>
                        <li>Day Will Be At Rest and Free Time To Explore The City</li>
                        <li>Dinner With Bonfire</li>
                    </ul>
                    <div className='flex items-center gap-3 sm:gap-4 py-3'>
                        <Image src="/hosts-trip/accommodation.png" alt="" width={20} height={20} />
                        <div>
                            <span className="text-black text-xs font-bold truncate">Stay :</span>
                            <span className="text-black text-xs font-bold"> Star Hotel</span>
                        </div>
                        <div className="flex items-center gap-1 pl-0 sm:pl-20">
                            <FaStar className="text-[#ffdc64] w-3 h-3" />
                            <FaStar className="text-[#ffdc64] w-3 h-3" />
                            <FaStar className="text-[#ffdc64] w-3 h-3" />
                        </div>
                    </div>
                    <div className="container-fluid mx-auto py-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Column 1 */}
                            <div className="px-4 pl-0">
                                <h3 className="text-sm font-semibold mb-3 text-black">Inclusions</h3>
                                <div className='flex items-center gap-3 mb-5'>
                                    <Image src='/hosts-trip/pickup.png' alt='' width={20} height={20} />
                                    <span className='text-sm font-medium text-black '>Pickup For Ariport</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <Image src='/hosts-trip/meal.png' alt='' width={20} height={20} />
                                    <span className='text-sm font-medium text-black'>Dinner</span>
                                </div>
                            </div>
                            {/* Column 2 */}
                            <div className="px-4 pl-0">
                                <h3 className="text-sm font-semibold mb-3 text-black">Exclusions</h3>
                                <div className='flex items-center gap-3 mb-5'>
                                    <Image src='/hosts-trip/transport.png' alt='' width={20} height={20} />
                                    <span className='text-sm font-medium text-black'>Local Transport</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <Image src='/hosts-trip/meal.png' alt='' width={20} height={20} />
                                    <span className='text-sm font-medium text-black'>Lunch</span>
                                </div>
                            </div>
                            {/* Column 3 */}
                            <div className="px-4 pl-0">
                                <h3 className="text-sm font-semibold mb-3 text-black">Experience</h3>
                                <div className='flex items-center gap-3 mb-5'>
                                    <Image src='/hosts-trip/temple.png' alt='' width={20} height={20} />
                                    <span className='text-sm font-medium text-black'>Temples</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <Image src='/hosts-trip/fire.png' alt='' width={20} height={20} />
                                    <span className='text-sm font-medium text-black'>Bonfire</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: (
                <div className='flex items-center gap-2 sm:gap-4'>
                    <div className="w-14 h-14 bg-white rounded-md flex items-center justify-center px-3">
                        <span className="text-sm font-bold text-[#e84c3d] leading-tight text-center">Day 2</span>
                    </div>
                    <div>
                        <span className="text-xs">Mon, 13th August'24</span>
                        <p className="text-sm font-bold">Kochi To Munnar</p>
                    </div>
                </div>
            ),
            content: (
                <div>
                    <ul className="list-decimal pl-5 text-gray-500 text-xs sm:text-sm">
                        <li>Reached Airport /Train Station - Pickup Included (Fixed Time)</li>
                        <li>Transferred To Hotel</li>
                        <li>Day Will Be At Rest and Free Time To Explore The City</li>
                        <li>Dinner With Bonfire</li>
                    </ul>
                    <div className='flex items-center gap-3 sm:gap-4 py-3'>
                        <Image src="/hosts-trip/accommodation.png" alt="" width={20} height={20} />
                        <div>
                            <span className="text-black text-xs font-bold truncate">Stay :</span>
                            <span className="text-black text-xs font-bold"> Star Hotel</span>
                        </div>
                        <div className="flex items-center gap-1 pl-0 sm:pl-20">
                            <FaStar className="text-[#ffdc64] w-3 h-3" />
                            <FaStar className="text-[#ffdc64] w-3 h-3" />
                            <FaStar className="text-[#ffdc64] w-3 h-3" />
                        </div>
                    </div>
                    <div className="container-fluid mx-auto py-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Column 1 */}
                            <div className="px-4 pl-0">
                                <h3 className="text-sm font-semibold mb-3 text-black">Inclusions</h3>
                                <div className='flex items-center gap-3 mb-5'>
                                    <Image src='/hosts-trip/pickup.png' alt='' width={20} height={20} />
                                    <span className='text-sm font-medium text-black '>Pickup For Ariport</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <Image src='/hosts-trip/meal.png' alt='' width={20} height={20} />
                                    <span className='text-sm font-medium text-black'>Dinner</span>
                                </div>
                            </div>
                            {/* Column 2 */}
                            <div className="px-4 pl-0">
                                <h3 className="text-sm font-semibold mb-3 text-black">Exclusions</h3>
                                <div className='flex items-center gap-3 mb-5'>
                                    <Image src='/hosts-trip/transport.png' alt='' width={20} height={20} />
                                    <span className='text-sm font-medium text-black'>Local Transport</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <Image src='/hosts-trip/meal.png' alt='' width={20} height={20} />
                                    <span className='text-sm font-medium text-black'>Lunch</span>
                                </div>
                            </div>
                            {/* Column 3 */}
                            <div className="px-4 pl-0">
                                <h3 className="text-sm font-semibold mb-3 text-black">Experience</h3>
                                <div className='flex items-center gap-3 mb-5'>
                                    <Image src='/hosts-trip/temple.png' alt='' width={20} height={20} />
                                    <span className='text-sm font-medium text-black'>Temples</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <Image src='/hosts-trip/fire.png' alt='' width={20} height={20} />
                                    <span className='text-sm font-medium text-black'>Bonfire</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: (
                <div className='flex items-center gap-2 sm:gap-4'>
                    <div className="w-14 h-14 bg-white rounded-md flex items-center justify-center px-3">
                        <span className="text-sm font-bold text-[#e84c3d] leading-tight text-center">Day 3</span>
                    </div>
                    <div>
                        <span className="text-xs">Mon, 14th August'24</span>
                        <p className="text-sm font-bold">Day Trip Around Munnar</p>
                    </div>
                </div>
            ),
            content: (
                <div>
                    <ul className="list-decimal pl-5 text-gray-500 text-xs sm:text-sm">
                        <li>Reached Airport /Train Station - Pickup Included (Fixed Time)</li>
                        <li>Transferred To Hotel</li>
                        <li>Day Will Be At Rest and Free Time To Explore The City</li>
                        <li>Dinner With Bonfire</li>
                    </ul>
                    <div className='flex items-center gap-3 sm:gap-4 py-3'>
                        <Image src="/hosts-trip/accommodation.png" alt="" width={20} height={20} />
                        <div>
                            <span className="text-black text-xs font-bold truncate">Stay :</span>
                            <span className="text-black text-xs font-bold"> Star Hotel</span>
                        </div>
                        <div className="flex items-center gap-1 pl-0 sm:pl-20">
                            <FaStar className="text-[#ffdc64] w-3 h-3" />
                            <FaStar className="text-[#ffdc64] w-3 h-3" />
                            <FaStar className="text-[#ffdc64] w-3 h-3" />
                        </div>
                    </div>
                    <div className="container-fluid mx-auto py-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Column 1 */}
                            <div className="px-4 pl-0">
                                <h3 className="text-sm font-semibold mb-3 text-black">Inclusions</h3>
                                <div className='flex items-center gap-3 mb-5'>
                                    <Image src='/hosts-trip/pickup.png' alt='' width={20} height={20} />
                                    <span className='text-sm font-medium text-black '>Pickup For Ariport</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <Image src='/hosts-trip/meal.png' alt='' width={20} height={20} />
                                    <span className='text-sm font-medium text-black'>Dinner</span>
                                </div>
                            </div>
                            {/* Column 2 */}
                            <div className="px-4 pl-0">
                                <h3 className="text-sm font-semibold mb-3 text-black">Exclusions</h3>
                                <div className='flex items-center gap-3 mb-5'>
                                    <Image src='/hosts-trip/transport.png' alt='' width={20} height={20} />
                                    <span className='text-sm font-medium text-black'>Local Transport</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <Image src='/hosts-trip/meal.png' alt='' width={20} height={20} />
                                    <span className='text-sm font-medium text-black'>Lunch</span>
                                </div>
                            </div>
                            {/* Column 3 */}
                            <div className="px-4 pl-0">
                                <h3 className="text-sm font-semibold mb-3 text-black">Experience</h3>
                                <div className='flex items-center gap-3 mb-5'>
                                    <Image src='/hosts-trip/temple.png' alt='' width={20} height={20} />
                                    <span className='text-sm font-medium text-black'>Temples</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <Image src='/hosts-trip/fire.png' alt='' width={20} height={20} />
                                    <span className='text-sm font-medium text-black'>Bonfire</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    const faqsData = [
        {
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            content: "Possimus eveniet non dolorem iste doloribus distinctio beatae, dicta maiores provident, tempore voluptatum expedita porro illum incidunt! Aliquam libero reiciendis ut dicta maiores provident, tempore voluptatum expedita porro illum incidunt! Aliquam libero reiciendis ut dicta maiores provident, tempore voluptatum expedita porro illum incidunt! Aliquam libero reiciendisArrive in Barcelona, check into your hotel, and explore the city center."
        },
        {
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            content: "Possimus eveniet non dolorem iste doloribus distinctio beatae, dicta maiores provident, tempore voluptatum expedita porro illum incidunt! Aliquam libero reiciendis ut dicta maiores provident, tempore voluptatum expedita porro illum incidunt! Aliquam libero reiciendis ut dicta maiores provident, tempore voluptatum expedita porro illum incidunt! Aliquam libero reiciendis"
        },
    ];


    return (
        <>
            <PageTitle
                title="Manage Trip & Booking"
                breadcrumbs={[
                    { href: "/", label: "Manage Trip & Booking" },
                    { href: "/customer/riya-gupta", label: "Riya Gupta" },
                    { href: "/customer/riya-gupta/details", label: "Details", isCurrent: true }
                ]}
            />
            <div className="py-5 px-5">
                <div className='flex justify-between items-center py-5'>
                    <span className="text-sm font-semibold">Trip ID: 98990</span>
                    <button className='border-2 border-[#e84c3d] p-1 rounded-lg text-sm font-medium text-[#e84c3d]' onClick={() => setIsModalOpen(true)}>Dwonload Invoice</button>
                </div>

                <div className="py-5 px-5 rounded-md bg-[#fffff9]">
                    {/* Experience */}
                    <div>
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
                                            <Link href='/customertripdetails' className="text-xs font-semibold text-gray-600 underline">View Details</Link>
                                        </div>
                                        <div className="flex items-center gap-1 mt-1">
                                            <Image src="/coso.png" alt="" width={15} height={15} />
                                            <span className="text-gray-500 text-xs font-medium truncate">Hosted by :</span>
                                            <span className="text-black-200 text-xs font-medium">Coso Trip</span>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-auto">
                                        <div className="flex items-center gap-1">
                                            <Image src="/complete.png" alt="" width={15} height={15} />
                                            <span className="text-xs font-semibold">Completed</span>
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <span className="text-xs font-medium text-[#2dba28]truncate">Total Paid:</span>
                                            <span className="ml-2 font-medium text-xs text-[#2dba28]">$27,000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className='mt-14 mb-10'>
                        <div className="flex items-center gap-1 mb-2">
                            <Image src="/pin.png" alt="" width={15} height={15} />
                            <span className="text-sm font-bold text-[#e84c3d]">Barcelona | Seville | Madrid</span>
                        </div>
                        <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.88282399875!2d-118.74138523738681!3d34.02003923266775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1723202033415!5m2!1sen!2sin"
                                width="600"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen={true} // This should be a boolean
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className='w-full rounded-lg'
                            />
                        </div>
                    </div>

                    {/* Gallary */}
                    <div className='mb-5'>
                        <span className='font-bold'>Gallery</span>
                        <div className="mt-4 mb-5 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-12 gap-4">
                            <Image src="/hosts-trip/1.png" alt='' width={110} height={110} className="w-full h-auto object-cover" />
                            <Image src="/hosts-trip/2.png" alt='' width={110} height={110} className="w-full h-auto object-cover" />
                            <Image src="/hosts-trip/3.png" alt='' width={110} height={110} className="w-full h-auto object-cover" />
                            <Image src="/hosts-trip/4.png" alt='' width={110} height={110} className="w-full h-auto object-cover" />
                            <Image src="/hosts-trip/5.png" alt='' width={110} height={110} className="w-full h-auto object-cover" />
                            <Image src="/hosts-trip/6.png" alt='' width={110} height={110} className="w-full h-auto object-cover" />
                            <Image src="/hosts-trip/7.png" alt='' width={110} height={110} className="w-full h-auto object-cover" />
                            <Image src="/hosts-trip/8.png" alt='' width={110} height={110} className="w-full h-auto object-cover" />
                            <Image src="/hosts-trip/9.png" alt='' width={110} height={110} className="w-full h-auto object-cover" />
                        </div>
                    </div>

                    {/* Ideal For */}
                    <div className='mb-5'>
                        <span className='text-xs font-bold block md:inline'>Ideal For</span>
                        <div className='mt-3 flex flex-wrap'>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Age 18 to 40 years</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Beaches</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Water Sports</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Rivercrossing</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Hike</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Adventurous</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Camp</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Solo Trip</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Age 18 to 40 years</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Beaches</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Water Sports</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Rivercrossing</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Hike</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Adventurous</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Camp</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Solo Trip</span>
                        </div>
                    </div>

                    {/* About */}
                    <div className='mb-10'>
                        <span className='text-xs font-bold'>About The Trips:</span>
                        <div className='mt-4 px-4'>
                            <p className="text-gray-500">
                                {isReadMore ? (
                                    <>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus eveniet non dolorem iste doloribus distinctio beatae, dicta maiores provident, tempore voluptatum expedita porro illum incidunt! Aliquam libero reiciendis ut
                                        <span className="text-[#e84c3d] cursor-pointer font-bold" onClick={toggleReadMore}> Read More..</span>
                                    </>
                                ) : (
                                    <>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus eveniet non dolorem iste doloribus distinctio beatae, dicta maiores provident, tempore voluptatum expedita porro illum incidunt! Aliquam libero reiciendis ut repellendus!
                                        <span className="text-[#e84c3d] cursor-pointer font-bold" onClick={toggleReadMore}> Show Less</span>
                                    </>
                                )}
                            </p>
                        </div>
                    </div>

                    {/* Itinerary */}
                    <div className='mb-5'>
                        <span className='text-xs font-bold'>Itinerary:</span>
                        <div className='mt-4'>
                            <Accordion items={itineraryData} />
                        </div>
                    </div>

                    {/* Description For Details */}
                    <div className="container-fluid mx-auto py-6">
                        <div className="flex flex-col md:flex-row justify-between">
                            <div className="px-4 pl-0 mb-6 md:mb-0">
                                <h3 className="text-sm font-semibold mb-7 text-black">
                                    Inclusions
                                    <span className='text-xs font-medium text-[#e84c3d]'> *Check Description For Details</span>
                                </h3>
                                <div className='flex flex-wrap items-center gap-8'>
                                    <div className='flex flex-col items-center gap-4 mb-5'>
                                        <Image src='/hosts-trip/Accommodation.png' alt='' width={50} height={50} />
                                        <span className='text-sm font-medium text-black'>Accommodation</span>
                                    </div>
                                    <div className='flex flex-col items-center gap-4 mb-5'>
                                        <Image src='/hosts-trip/food.png' alt='' width={50} height={50} />
                                        <span className='text-sm font-medium text-black'>Meal</span>
                                    </div>
                                    <div className='flex flex-col items-center gap-4 mb-5'>
                                        <Image src='/hosts-trip/experince.png' alt='' width={40} height={40} />
                                        <span className='text-sm font-medium text-black'>Experience</span>
                                    </div>
                                    <div className='flex flex-col items-center gap-4 mb-5'>
                                        <Image src='/hosts-trip/car.png' alt='' width={40} height={40} />
                                        <span className='text-sm font-medium text-black'>Transport</span>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 pl-0 mb-6 md:mb-0">
                                <h3 className="text-sm font-semibold mb-7 text-black">
                                    Exclusions
                                    <span className='text-xs font-medium text-[#e84c3d]'> *Check Description For Details</span>
                                </h3>
                                <div className='flex flex-wrap items-center gap-8'>
                                    <div className='flex flex-col items-center gap-4 mb-5'>
                                        <Image src='/hosts-trip/airplane.png' alt='' width={40} height={40} />
                                        <span className='text-sm font-medium text-black'>Flight</span>
                                    </div>
                                    <div className='flex flex-col items-center gap-4 mb-5'>
                                        <Image src='/hosts-trip/lunch.png' alt='' width={40} height={40} />
                                        <span className='text-sm font-medium text-black'>Dinner</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 pl-0">
                            <h3 className="text-sm font-semibold mb-7 text-black">Experience</h3>
                            <div className='flex flex-wrap items-center gap-8'>
                                <div className='flex flex-col items-center gap-4 mb-5'>
                                    <Image src='/hosts-trip/dj.png' alt='' width={42} height={42} />
                                    <span className='text-sm font-medium text-black'>Night Life</span>
                                </div>
                                <div className='flex flex-col items-center gap-4 mb-5'>
                                    <Image src='/hosts-trip/skydiving.png' alt='' width={50} height={50} />
                                    <span className='text-sm font-medium text-black'>Skydiving</span>
                                </div>
                                <div className='flex flex-col items-center gap-4 mb-5'>
                                    <Image src='/hosts-trip/Snorkelling.png' alt='' width={40} height={40} />
                                    <span className='text-sm font-medium text-black'>Snorkelling</span>
                                </div>
                                <div className='flex flex-col items-center gap-4 mb-5'>
                                    <Image src='/hosts-trip/boat.png' alt='' width={40} height={40} />
                                    <span className='text-sm font-medium text-black'>Boating</span>
                                </div>
                                <div className='flex flex-col items-center gap-4 mb-5'>
                                    <Image src='/hosts-trip/temple.png' alt='' width={42} height={42} />
                                    <span className='text-sm font-medium text-black'>Temple</span>
                                </div>
                                <div className='flex flex-col items-center gap-4 mb-5'>
                                    <Image src='/hosts-trip/fire.png' alt='' width={50} height={50} />
                                    <span className='text-sm font-medium text-black'>Bonfire</span>
                                </div>
                                <div className='flex flex-col items-center gap-4 mb-5'>
                                    <Image src='/hosts-trip/dancing.png' alt='' width={40} height={40} />
                                    <span className='text-sm font-medium text-black'>Dance</span>
                                </div>
                                <div className='flex flex-col items-center gap-4 mb-5'>
                                    <Image src='/hosts-trip/kayak.png' alt='' width={40} height={40} />
                                    <span className='text-sm font-medium text-black'>Kayaking</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Other Notes */}
                    <div className='mb-5'>
                        <span className='font-bold'>Other Notes</span>
                        <div className='px-5 pt-5'>
                            <ul className="list-disc pl-5 text-gray-500 text-xs ">
                                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                                <li>Atque fuga eos quo animi id delectus vitae veniam.</li>
                                <li>Perspiciatis temporibus nam ad similique</li>
                                <li>Dignissimos provident, ipsa, magni numquam assumenda cum eum?</li>
                            </ul>
                        </div>
                    </div>

                    {/* Terms and Condition */}
                    <div className='mb-14'>
                        <span className='font-bold'>Terms and Conditions</span>
                        <div className='mt-4 px-4'>
                            <p className="text-gray-500 text-sm">
                                {isReadMore ? (
                                    <>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus eveniet non dolorem iste doloribus distinctio beatae, dicta maiores provident, tempore voluptatum expedita porro illum incidunt! Aliquam libero reiciendis ut dicta maiores provident, tempore voluptatum expedita porro illum incidunt! Aliquam libero reiciendis ut dicta maiores provident, tempore voluptatum expedita porro illum incidunt! Aliquam libero reiciendis ut
                                        <span className="text-[#e84c3d] cursor-pointer font-semibold" onClick={toggleReadMore}> Read More..</span>
                                    </>
                                ) : (
                                    <>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus eveniet non dolorem iste doloribus distinctio beatae, dicta maiores provident, tempore voluptatum expedita porro illum incidunt! Aliquam libero reiciendis ut repellendus!dicta maiores provident, tempore voluptatum expedita porro illum incidunt! Aliquam libero reiciendis ut dicta maiores provident, tempore voluptatum expedita porro illum incidunt! Aliquam libero reiciendis ut
                                        <span className="text-[#e84c3d] cursor-pointer font-semibold" onClick={toggleReadMore}> Show Less</span>
                                    </>
                                )}
                            </p>
                        </div>
                    </div>

                    {/* FAQ's */}
                    <div className='mb-5'>
                        <div className='flex justify-between items-end'>
                            <span className='font-bold'>FAQ's</span>
                            <Link href="" className='text-xs font-semibold text-[#e84c3d]'>See all</Link>
                        </div>
                        <div className="flex items-center bg-white border-gray-300 rounded-md overflow-hidden my-5">
                            <button className="p-2 text-blue hover:bg-gray-200">
                                <Search className="h-5 w-5 text-primary" />
                            </button>
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full p-2 outline-none text-sm placeholder:text-xs placeholder:font-semibold"
                            />
                        </div>
                        <div>
                            <Accordion items={faqsData} />
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
                                        <span className="text-gray-500 text-xs font-medium truncate">Experience:</span>
                                        <span className="ml-2 text-gray-500 text-xs font-medium">+15 years</span>
                                    </div>
                                    <div className="flex items-start mb-2">
                                        <AiOutlineMail className="w-4 h-4 mr-3 text-gray-700" />
                                        <span className="text-gray-500 text-xs font-medium truncate">Total Number of hosted Trip:</span>
                                        <span className="ml-2 text-gray-500 text-xs font-medium  truncate">15</span>
                                    </div>
                                    <div className="flex items-start">
                                        <AiOutlineUser className="w-4 h-4 mr-3 text-gray-700" />
                                        <span className="text-gray-500 text-xs font-medium">Language:</span>
                                        <span className="ml-2 text-gray-500 text-xs font-medium">Speaks English and Hindi</span>
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
                <div className="my-7 py-5 px-5 rounded-md flex flex-col lg:flex-row items-start lg:items-center gap-5 bg-[#fffff9]">
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

            </div>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2 className="text-xl font-bold mb-4">Modal Title</h2>
                <p className="mb-4">This is the content of the modal.</p>
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                >
                    Close Modal
                </button>
            </Modal>
        </>
    );
}

