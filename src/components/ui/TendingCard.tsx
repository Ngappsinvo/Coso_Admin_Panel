import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

export type TendingCardProps = {
  img: string;
  title: string;
  number: string; // Added number prop
};

export default function TendingCard(props: TendingCardProps) {
  return (
    <div className="relative flex items-start gap-3">
      <div className="relative h-16 w-16 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={props.img}
          alt=""
          width={64}
          height={64} 
          className="object-cover w-full h-full"
        />
        <span className="absolute bottom-0 left-1 text-white text-xl font-bold">
          {props.number}
        </span>
      </div>
      <div>
        <span className="text-md font-semibold text-[#e84c3d] capitalize">{props.title}</span>
      </div>
    </div>
  );
};