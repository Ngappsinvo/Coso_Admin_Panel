"use client"
import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import PageTitle from "@/components/ui/PageTitle";
import Image from "next/image";
import Link from "next/link";
import { Accessibility } from 'lucide-react';
import Accordion from '@/components/accordion';

export default function HostsTripDeatils() {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
  
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
                <div className='flex justify-between items-center py-5'>
                    <span className="text-sm font-semibold">Trip ID: 98990</span>
                    <button className='border-2 border-[#e84c3d] p-1 rounded-lg text-sm font-medium text-[#e84c3d]'>Dwonload Invoice</button>
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
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className='mt-14 mb-5'>
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
                        <span className='font-bold'>Gallary</span>
                        <div className="mt-4 mb-5 flex space-x-5">
                            <Image src="/hosts-trip/1.png" alt='' width={110} height={110} className="flex-shrink-0" />
                            <Image src="/hosts-trip/2.png" alt='' width={110} height={110} className="flex-shrink-0" />
                            <Image src="/hosts-trip/3.png" alt='' width={110} height={110} className="flex-shrink-0" />
                            <Image src="/hosts-trip/4.png" alt='' width={110} height={110} className="flex-shrink-0" />
                            <Image src="/hosts-trip/5.png" alt='' width={110} height={110} className="flex-shrink-0" />
                            <Image src="/hosts-trip/6.png" alt='' width={110} height={110} className="flex-shrink-0" />
                            <Image src="/hosts-trip/7.png" alt='' width={110} height={110} className="flex-shrink-0" />
                            <Image src="/hosts-trip/8.png" alt='' width={110} height={110} className="flex-shrink-0" />
                            <Image src="/hosts-trip/9.png" alt='' width={110} height={110} className="flex-shrink-0" />
                        </div>
                    </div>

                    {/* Ideal For */}
                    <div className='mb-5'>
                        <span className='text-xs font-bold'>Ideal For</span>
                        <div className='mt-3'>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Age 18 to 40 years</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Beaches</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Water Sports</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Beaches</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Rivercorsing</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Hike</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Advantuours</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Camp</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Solo Trip</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Age 18 to 40 years</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Beaches</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Water Sports</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Beaches</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Rivercorsing</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Hike</span>
                            <span className='font-semibold text-sm text-[#e84c3d]'>#Advantuours</span>
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
                          <Accordion />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

