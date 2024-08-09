import Image from 'next/image';
import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default function Accordion() {
    // Initialize activeIndex to 0 to keep the first accordion open by default
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        // Toggle the accordion item; if the same index is clicked again, it closes
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: (
                <div className='flex items-center gap-4'>
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
                    <ul className="list-decimal pl-5 text-gray-500 text-sm">
                        <li>Reached Airport /Train Station - Pickup Included (Fixed Time)</li>
                        <li>Transferred To Hotel</li>
                        <li>Day Will Be At Rest and Free Time To Explore The City</li>
                        <li>Dinner With Bonfire</li>
                    </ul>
                    <div className='flex items-center gap-4 py-3'>
                        <Image src="/hosts-trip/accommodation.png" alt="" width={20} height={20} />
                        <div>
                            <span className="text-black text-xs font-bold truncate">Stay :</span>
                            <span className="text-black text-xs font-bold"> Star Hotel</span>
                        </div>
                        <div className="flex items-center gap-1 pl-20">
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
                                    <Image src='/hosts-trip/pickup.png' alt='' width={20} height={20}/>
                                    <span className='text-sm font-medium text-black'>Pickup For Ariport</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <Image src='/hosts-trip/meal.png' alt='' width={20} height={20}/>
                                    <span className='text-sm font-medium text-black'>Dinner</span>
                                </div>
                            </div>
                            {/* Column 2 */}
                            <div className="px-4 pl-0">
                                <h3 className="text-sm font-semibold mb-3 text-black">Exclusions</h3>
                                <div className='flex items-center gap-3 mb-5'>
                                    <Image src='/hosts-trip/transport.png' alt='' width={20} height={20}/>
                                    <span className='text-sm font-medium text-black'>Local Transport</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <Image src='/hosts-trip/meal.png' alt='' width={20} height={20}/>
                                    <span className='text-sm font-medium text-black'>Lunch</span>
                                </div>
                            </div>
                            {/* Column 3 */}
                            <div className="px-4 pl-0">
                                <h3 className="text-sm font-semibold mb-3 text-black">Experience</h3>
                                <div className='flex items-center gap-3 mb-5'>
                                    <Image src='/hosts-trip/temple.png' alt='' width={20} height={20}/>
                                    <span className='text-sm font-medium text-black'>Temples</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <Image src='/hosts-trip/fire.png' alt='' width={20} height={20}/>
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
                <div className='flex items-center gap-4'>
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
                    <ul className="list-decimal pl-5 text-gray-500 text-sm">
                        <li>Reached Airport /Train Station - Pickup Included (Fixed Time)</li>
                        <li>Transferred To Hotel</li>
                        <li>Day Will Be At Rest and Free Time To Explore The City</li>
                        <li>Dinner With Bonfire</li>
                    </ul>
                    <div className='flex items-center gap-4 py-3'>
                        <Image src="/hosts-trip/accommodation.png" alt="" width={20} height={20} />
                        <div>
                            <span className="text-black text-xs font-bold truncate">Stay :</span>
                            <span className="text-black text-xs font-bold"> Star Hotel</span>
                        </div>
                        <div className="flex items-center gap-1 pl-20">
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
                                    <Image src='/hosts-trip/pickup.png' alt='' width={20} height={20}/>
                                    <span className='text-sm font-medium text-black'>Pickup For Ariport</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <Image src='/hosts-trip/meal.png' alt='' width={20} height={20}/>
                                    <span className='text-sm font-medium text-black'>Dinner</span>
                                </div>
                            </div>
                            {/* Column 2 */}
                            <div className="px-4 pl-0">
                                <h3 className="text-sm font-semibold mb-3 text-black">Exclusions</h3>
                                <div className='flex items-center gap-3 mb-5'>
                                    <Image src='/hosts-trip/transport.png' alt='' width={20} height={20}/>
                                    <span className='text-sm font-medium text-black'>Local Transport</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <Image src='/hosts-trip/meal.png' alt='' width={20} height={20}/>
                                    <span className='text-sm font-medium text-black'>Lunch</span>
                                </div>
                            </div>
                            {/* Column 3 */}
                            <div className="px-4 pl-0">
                                <h3 className="text-sm font-semibold mb-3 text-black">Experience</h3>
                                <div className='flex items-center gap-3 mb-5'>
                                    <Image src='/hosts-trip/temple.png' alt='' width={20} height={20}/>
                                    <span className='text-sm font-medium text-black'>Temples</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <Image src='/hosts-trip/fire.png' alt='' width={20} height={20}/>
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
                <div className='flex items-center gap-4'>
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
                    <ul className="list-decimal pl-5 text-gray-500 text-sm">
                        <li>Reached Airport /Train Station - Pickup Included (Fixed Time)</li>
                        <li>Transferred To Hotel</li>
                        <li>Day Will Be At Rest and Free Time To Explore The City</li>
                        <li>Dinner With Bonfire</li>
                    </ul>
                    <div className='flex items-center gap-4 py-3'>
                        <Image src="/hosts-trip/accommodation.png" alt="" width={20} height={20} />
                        <div>
                            <span className="text-black text-xs font-bold truncate">Stay :</span>
                            <span className="text-black text-xs font-bold"> Star Hotel</span>
                        </div>
                        <div className="flex items-center gap-1 pl-20">
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
                                    <Image src='/hosts-trip/pickup.png' alt='' width={20} height={20}/>
                                    <span className='text-sm font-medium text-black'>Pickup For Ariport</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <Image src='/hosts-trip/meal.png' alt='' width={20} height={20}/>
                                    <span className='text-sm font-medium text-black'>Dinner</span>
                                </div>
                            </div>
                            {/* Column 2 */}
                            <div className="px-4 pl-0">
                                <h3 className="text-sm font-semibold mb-3 text-black">Exclusions</h3>
                                <div className='flex items-center gap-3 mb-5'>
                                    <Image src='/hosts-trip/transport.png' alt='' width={20} height={20}/>
                                    <span className='text-sm font-medium text-black'>Local Transport</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <Image src='/hosts-trip/meal.png' alt='' width={20} height={20}/>
                                    <span className='text-sm font-medium text-black'>Lunch</span>
                                </div>
                            </div>
                            {/* Column 3 */}
                            <div className="px-4 pl-0">
                                <h3 className="text-sm font-semibold mb-3 text-black">Experience</h3>
                                <div className='flex items-center gap-3 mb-5'>
                                    <Image src='/hosts-trip/temple.png' alt='' width={20} height={20}/>
                                    <span className='text-sm font-medium text-black'>Temples</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <Image src='/hosts-trip/fire.png' alt='' width={20} height={20}/>
                                    <span className='text-sm font-medium text-black'>Bonfire</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="w-full mx-auto">
            {accordionData.map((item, index) => (
                <div key={index} className=" border-gray-200">
                    <button
                        className="w-full flex justify-between items-center py-3 px-4 text-left text-gray-700 font-semibold focus:outline-none"
                        onClick={() => handleToggle(index)}
                    >
                        {item.title}
                        <span className={`bg-[#e84c3d] rounded-full flex items-center justify-center transform ${activeIndex === index ? 'rotate-180' : ''} transition-transform duration-300`}>
                            <svg className="w-5 h-5" fill="white" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </button>
                    <div
                        className={`px-4 text-gray-600 transition-max-height duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-screen' : 'max-h-0'}`}
                    >
                        <div className='py-2'>{item.content}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
