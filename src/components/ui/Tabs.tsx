import Image from 'next/image';
import React, { useState } from 'react';

type TabItem = {
  name: string;
  title: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: TabItem[];
};

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex sm:justify-center flex-wrap">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 sm:px-6 sm:py-3 md:px-10 md:py-2 focus:outline-none text-sm sm:text-base font-medium ${
              activeTab === index
                ? 'text-[#e84c3d] bg-[#fffaf6] font-semibold'
                : 'text-gray-500 hover:text-[#e84c3d] bg-[#fffaf6]'
            } ${
              index === 0 ? 'rounded-tl-lg rounded-bl-lg' : ''
            } ${
              index === tabs.length - 1 ? 'rounded-tr-lg rounded-br-lg' : ''
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="py-6 px-4 sm:px-6 md:px-10 text-center">
        <div className='flex justify-center'>
        <Image 
            src="/logo.png" 
            alt="Logo" 
            width={200} 
            height={200} 
            className="h-full sm:w-42 md:w-56" // Adjust image size responsively
          />
        </div>
        <h1 className="text-[1.2rem] sm:text-[1.8rem] md:text-2xl font-bold mb-6 md:mb-10">
          {tabs[activeTab].title}
        </h1>
        <div className='text-sm text-gray-500 font-medium text-left'>
          {tabs[activeTab].content}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
