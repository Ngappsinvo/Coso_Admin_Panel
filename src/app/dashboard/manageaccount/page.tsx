"use client"
import BarChart from "@/components/ui/BarChart";
import Card, { CardContent, CardProps } from "@/components/ui/Card";
import { DataTable } from "@/components/ui/DataTable";
import Dropdown from "@/components/ui/Dropdown";
import PageTitle from "@/components/ui/PageTitle";
import TendingCard, { TendingCardProps } from "@/components/ui/TendingCard";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineEye } from 'react-icons/ai';

const cardData: CardProps[] = [
    {
        img: "/account-img/noofbooking.png",
        title: "3,45,345",
        lable: "No. of Booking",
    },
    {
        img: "/account-img/host.png",
        title: "3,455",
        lable: "No. of Hosts",
    },
    {
        img: "/account-img/customer.png",
        title: "2,32,345",
        lable: "No. of Customer",
    },
    {
        img: "/account-img/nooftrips.png",
        title: "32,456",
        lable: "No. of Trips",
    },
];

const tendingData: TendingCardProps[] = [
    {
        img: "/account-img/1.png",
        title: "Experience the magic of bhutan",
        number: "01",
    },
    {
        img: "/account-img/2.png",
        title: "experience the magic of nepal",
        number: "02",
    },
    {
        img: "/account-img/3.png",
        title: "tropical escapade: experience the magic of kerala",
        number: "03",
    },
    {
        img: "/account-img/4.png",
        title: "tropical escapade: experience the magic of munnar",
        number: "04",
    },
    {
        img: "/account-img/1.png",
        title: "tropical escapade: experience the magic of munnar",
        number: "05",
    },
];

type Table = {
    id: string
    name: string
    number: string
    email: string
    action: JSX.Element;
}

const columns: ColumnDef<Table>[] = [
    {
        accessorKey: "id",
        header: "Customer ID",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "number",
        header: "Mobile Number",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }) => row.original.action,
    },
]

export const data: Table[] = [
    {
        id: "728ed52f",
        name: "Riya Gupta",
        number: "8882203932",
        email: 'riyagupta2321@getMaxListeners.com',
        action: <Link href={`/dashboard/managecustomer/customerdetails`} passHref>
            <AiOutlineEye className='text-gray-400 cursor-pointer text-[1rem] ml-4' />
        </Link>
    },
    {
        id: "728ed52f",
        name: "Riya Gupta",
        number: "8882203932",
        email: 'riyagupta2321@getMaxListeners.com',
        action: <Link href={`/dashboard/managecustomer/customerdetails`} passHref>
            <AiOutlineEye className='text-gray-400 cursor-pointer text-[1rem] ml-4' />
        </Link>
    },
    {
        id: "728ed52f",
        name: "Riya Gupta",
        number: "8882203932",
        email: 'riyagupta2321@getMaxListeners.com',
        action: <Link href={`/dashboard/managecustomer/customerdetails`} passHref>
            <AiOutlineEye className='text-gray-400 cursor-pointer text-[1rem] ml-4' />
        </Link>
    },
    {
        id: "728ed52f",
        name: "Riya Gupta",
        number: "8882203932",
        email: 'riyagupta2321@getMaxListeners.com',
        action: <Link href={`/dashboard/managecustomer/customerdetails`} passHref>
            <AiOutlineEye className='text-gray-400 cursor-pointer text-[1rem] ml-4' />
        </Link>
    },
    {
        id: "728ed52f",
        name: "Riya Gupta",
        number: "8882203932",
        email: 'riyagupta2321@getMaxListeners.com',
        action: <Link href={`/dashboard/managecustomer/customerdetails`} passHref>
            <AiOutlineEye className='text-gray-400 cursor-pointer text-[1rem] ml-4' />
        </Link>
    },
    {
        id: "728ed52f",
        name: "Riya Gupta",
        number: "8882203932",
        email: 'riyagupta2321@getMaxListeners.com',
        action: <Link href={`/dashboard/managecustomer/customerdetails`} passHref>
            <AiOutlineEye className='text-gray-400 cursor-pointer text-[1rem] ml-4' />
        </Link>
    },
]

export default function ManageAccount() {
    return (
        <>
            <PageTitle
                title="Manage Account & Reporting"
                breadcrumbs={[{ href: "/", label: "Manage Account & Reporting", isCurrent: true }]}
            />
            <div className="flex flex-col gap-5 w-full px-5 py-7">
                <section className="w-full grid grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
                    {cardData.map((d, i) => (
                        <Card key={i}
                            img={d.img}
                            title={d.title}
                            lable={d.lable}
                        />
                    ))}
                </section>
                <section className="grid grid-cols-1 gap-4 gap-x-8 transition-all lg:grid-cols-4">
                    <CardContent className="lg:col-span-3">
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                            <span className="text-md font-semibold">Revenue</span>
                            <Dropdown />
                        </div>
                        <BarChart />
                        <div className="flex justify-between items-start">
                            <span className="text-md font-semibold">Total Revenue</span>
                            <span className="text-md font-semibold text-[#e84c3d]">3,23,444</span>
                        </div>
                    </CardContent>
                    <CardContent className="lg:col-span-1">
                        <span className="text-md font-semibold">Trending Booking</span>
                        <section className="flex flex-col gap-3">
                            {tendingData.map((d, i) => (
                                <TendingCard
                                    key={i}
                                    img={d.img}
                                    title={d.title}
                                    number={d.number}
                                />
                            ))}
                        </section>
                    </CardContent>
                </section>
                <div className="text-sm font-semibold">New Booking</div>
                <section className="grid grid-cols-1 gap-4 gap-x-8 transition-all lg:grid-cols-4">
                    <div className="lg:col-span-3 shadow rounded-md overflow-hidden h-fit">
                        <DataTable columns={columns} data={data} />
                    </div>
                    <div className="lg:col-span-1 grid gap-4">
                        <CardContent>
                            <div className="flex items-end justify-between gap-2">
                                <div className="flex flex-col text-center">
                                    <h1 className="text-[1.8rem] font-bold">Visitors</h1>
                                    <p className="text-md text-gray-400 font-medium">avg</p>
                                    <span className="text-[2.5rem] font-bold text-[#e84c3d]">820</span>
                                </div>
                                <div className="h-20 w-20">
                                    <Image src="/account-img/visitors.png" alt="" width={80} height={80} className="w-full h-full" />
                                </div>
                            </div>
                        </CardContent>
                        <CardContent>
                            <div className="flex items-end justify-between gap-2">
                                <div className="flex flex-col text-center">
                                    <h1 className="text-[1.8rem] font-bold">Host</h1>
                                    <p className="text-md text-gray-400 font-medium">avg</p>
                                    <span className="text-[2.5rem] font-bold text-[#e84c3d]">820</span>
                                </div>
                                <div className="h-24 w-24">
                                    <Image src="/account-img/hosts.png" alt="" width={100} height={100} className="w-full h-full" />
                                </div>
                            </div>
                        </CardContent>
                    </div>
                </section>
            </div>
        </>
    );
}