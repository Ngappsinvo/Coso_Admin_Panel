import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

export type CardProps = {
    img: string,
    title: string,
    lable: string
}

export default function Card(props: CardProps) {
    return (
        <CardContent>
            <div className='flex gap-4 justify-center'>
                <div className='bg-[#fffdf3] h-12 w-12 rounded-full flex justify-center items-center'>
                    <Image src={props.img} alt='' width={25} height={25} />
                </div>
                <div className='flex flex-col'>
                    <h1 className='font-bold text-[#e84c3d] text-xl'>{props.title}</h1>
                    <span className='text-md font-semibold'>{props.lable}</span>
                </div>
            </div>
        </CardContent>
    )
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props} className={cn('flex flex-col w-full gap-3 rounded-xl border p-5 shadow', props.className)}></div>
    )
}