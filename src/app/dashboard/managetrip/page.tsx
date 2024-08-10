"use client"
import { DataTable } from "@/components/ui/DataTable";
import PageTitle from "@/components/ui/PageTitle";
import SearchBar from "@/components/ui/Searchbar";
import { ColumnDef } from "@tanstack/react-table";
import { AiOutlineEye } from 'react-icons/ai';
import Link from "next/link";

export default function ManageTrip() {
    return (
        <>
            <PageTitle
                title="Manage Trip & Details"
                breadcrumbs={[{ href: "/", label: "Manage Trip & Details", isCurrent: true }]}
            />
            <div className="flex flex-col gap-5 w-full px-5 py-7">
                <SearchBar />
                <DataTable columns={columns} data={data} />
            </div>
        </>
    );
}

type Table = {
    id: string
    name: string
    number: string
    email: string
    amount: string
    host: string
    trip: string
    action: JSX.Element;
}

export const columns: ColumnDef<Table>[] = [
    {
        accessorKey: "id",
        header: "Trip ID",
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
        accessorKey: "amount",
        header: "Amount",
    },
    {
        accessorKey: "host",
        header: "Host",
    },
    {
        accessorKey: "trip",
        header: "Trip",
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
        amount: '27,000',
        host: 'Coso Trip',
        trip: 'Kerala',
        action: <Link href={`/dashboard/managetrip/managetripdetails`} passHref>
            <AiOutlineEye className='text-gray-400 cursor-pointer text-[1rem] ml-4' />
        </Link>
    },
    {
        id: "728ed52f",
        name: "Riya Gupta",
        number: "8882203932",
        email: 'riyagupta2321@getMaxListeners.com',
        amount: '27,000',
        host: 'Coso Trip',
        trip: 'Kerala',
        action: <Link href={`/dashboard/managetrip/managetripdetails`} passHref>
            <AiOutlineEye className='text-gray-400 cursor-pointer text-[1rem] ml-4' />
        </Link>
    },
    {
        id: "728ed52f",
        name: "Riya Gupta",
        number: "8882203932",
        email: 'riyagupta2321@getMaxListeners.com',
        amount: '27,000',
        host: 'Coso Trip',
        trip: 'Kerala',
        action: <Link href={`/dashboard/managetrip/managetripdetails`} passHref>
            <AiOutlineEye className='text-gray-400 cursor-pointer text-[1rem] ml-4' />
        </Link>
    }, 
    {
        id: "728ed52f",
        name: "Riya Gupta",
        number: "8882203932",
        email: 'riyagupta2321@getMaxListeners.com',
        amount: '27,000',
        host: 'Coso Trip',
        trip: 'Kerala',
        action: <Link href={`/dashboard/managetrip/managetripdetails`} passHref>
            <AiOutlineEye className='text-gray-400 cursor-pointer text-[1rem] ml-4' />
        </Link>
    }, 
    {
        id: "728ed52f",
        name: "Riya Gupta",
        number: "8882203932",
        email: 'riyagupta2321@getMaxListeners.com',
        amount: '27,000',
        host: 'Coso Trip',
        trip: 'Kerala',
        action: <Link href={`/dashboard/managetrip/managetripdetails`} passHref>
            <AiOutlineEye className='text-gray-400 cursor-pointer text-[1rem] ml-4' />
        </Link>
    },
    {
        id: "728ed52f",
        name: "Riya Gupta",
        number: "8882203932",
        email: 'riyagupta2321@getMaxListeners.com',
        amount: '27,000',
        host: 'Coso Trip',
        trip: 'Kerala',
        action: <Link href={`/dashboard/managetrip/managetripdetails`} passHref>
          <AiOutlineEye className='text-gray-400 cursor-pointer text-[1rem] ml-4' />
        </Link>
      },
      {
        id: "728ed52f",
        name: "Riya Gupta",
        number: "8882203932",
        email: 'riyagupta2321@getMaxListeners.com',
        amount: '27,000',
        host: 'Coso Trip',
        trip: 'Kerala',
        action: <Link href={`/dashboard/managetrip/managetripdetails`} passHref>
          <AiOutlineEye className='text-gray-400 cursor-pointer text-[1rem] ml-4' />
        </Link>
      },
      {
        id: "728ed52f",
        name: "Riya Gupta",
        number: "8882203932",
        email: 'riyagupta2321@getMaxListeners.com',
        amount: '27,000',
        host: 'Coso Trip',
        trip: 'Kerala',
        action: <Link href={`/dashboard/managetrip/managetripdetails`} passHref>
          <AiOutlineEye className='text-gray-400 cursor-pointer text-[1rem] ml-4' />
        </Link>
      },
      {
        id: "728ed52f",
        name: "Riya Gupta",
        number: "8882203932",
        email: 'riyagupta2321@getMaxListeners.com',
        amount: '27,000',
        host: 'Coso Trip',
        trip: 'Kerala',
        action: <Link href={`/dashboard/managetrip/managetripdetails`} passHref>
          <AiOutlineEye className='text-gray-400 cursor-pointer text-[1rem] ml-4' />
        </Link>
      },
      {
        id: "728ed52f",
        name: "Riya Gupta",
        number: "8882203932",
        email: 'riyagupta2321@getMaxListeners.com',
        amount: '27,000',
        host: 'Coso Trip',
        trip: 'Kerala',
        action: <Link href={`/dashboard/managetrip/managetripdetails`} passHref>
          <AiOutlineEye className='text-gray-400 cursor-pointer text-[1rem] ml-4' />
        </Link>
      },
]
