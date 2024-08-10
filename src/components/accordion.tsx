import React, { useState } from 'react';

interface AccordionItem {
    title: React.ReactNode;
    content: React.ReactNode;
}

interface AccordionProps {
    items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full mx-auto">
            {items.map((item, index) => (
                <div key={index} className=" border-gray-200">
                    <button
                        className="w-full flex justify-between items-center py-3 px-0 md:px-4 text-left text-gray-700 font-semibold focus:outline-none"
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
                        className={`px-0 sm:px-4 text-gray-600 transition-max-height duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'h-auto' : 'max-h-0'}`}
                    >
                        <div className='py-2'>{item.content}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Accordion;
