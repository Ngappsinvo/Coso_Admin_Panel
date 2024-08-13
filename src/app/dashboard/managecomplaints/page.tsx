"use client"
import { DataTable } from "@/components/ui/DataTable";
import PageTitle from "@/components/ui/PageTitle";
import SearchBar from "@/components/ui/Searchbar";
import { ColumnDef } from "@tanstack/react-table";
import { AiOutlineEye } from 'react-icons/ai';
import Link from 'next/link';

export default function ManageComplaints() {
    return (
        <>
            <PageTitle
                title="Manage Complaints"
                breadcrumbs={[{ href: "/", label: "Manage Complaints", isCurrent: true }]}
            />
            <div className="flex flex-col gap-5 w-full px-5 py-7">
                <SearchBar />
                <div className="p-3 bg-[#fffdf3] rounded-lg flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-max my-2">
                    <div className="flex items-center justify-between sm:gap-10 w-full sm:w-auto">
                        <span className="text-sm font-bold text-[#e84c3d]">All Complaints</span>
                        <div className="bg-[#e84c3d] rounded-full px-3 py-1 text-xs font-semibold text-white">
                            200
                        </div>
                    </div>
                    <div className="flex items-center justify-between sm:gap-10 w-full sm:w-auto">
                        <span className="text-sm font-semibold text-gray-500">Unresolved</span>
                        <div className="bg-[#e84c3d] rounded-full px-3 py-1 text-xs font-semibold text-white">
                            500
                        </div>
                    </div>
                    <div className="flex items-center justify-between sm:gap-10 w-full sm:w-auto">
                        <span className="text-sm font-semibold text-gray-500">Resolved</span>
                        <div className="bg-[#e84c3d] rounded-full px-3 py-1 text-xs font-semibold text-white">
                            50
                        </div>
                    </div>
                </div>

                <DataTable columns={columns} data={data} />
            </div>
        </>
    );
}

type Table = {
    _id: string;
    name: string;
    host: string;
    title: string;
    status: string;
    action: JSX.Element;
}

export const columns: ColumnDef<Table>[] = [
    {
        accessorKey: "_id",
        header: "Complaint ID",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "host",
        header: "Host/User",
    },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ getValue }) => {
            const status = getValue<string>();
            const statusClasses = status === 'Resolved' ? 'text-green-500' : 'text-red-400 font-semibold';
            return (
                <span className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${statusClasses}`}>
                    {status}
                </span>
            );
        },
    },
    {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }) => row.original.action,
    },
]

export const data: Table[] = [
    {
        _id: "12312",
        name: "Coso Trip",
        host: "Host",
        title: 'Lorem ipsum',
        status: 'Resolved',
        action:
            <Link href={`/dashboard/managecomplaints/complaintsdetails`} passHref>
                <AiOutlineEye className='text-gray-500 cursor-pointer text-[1rem] ml-4' />
            </Link>,
    },
    {
        _id: "12313",
        name: "Another Trip",
        host: "User",
        title: 'Dolor sit amet',
        status: 'Unresolved',
        action:
            <Link href={`/dashboard/managecomplaints/complaintsdetails`} passHref>
                <AiOutlineEye className='text-gray-500 cursor-pointer text-[1rem] ml-4' />
            </Link>,
    },
    {
        _id: "12312",
        name: "Coso Trip",
        host: "Host",
        title: 'Lorem ipsum',
        status: 'Resolved',
        action:
            <Link href={`/dashboard/managecomplaints/complaintsdetails`} passHref>
                <AiOutlineEye className='text-gray-500 cursor-pointer text-[1rem] ml-4' />
            </Link>,
    },
    {
        _id: "12313",
        name: "Another Trip",
        host: "User",
        title: 'Dolor sit amet',
        status: 'Unresolved',
        action:
            <Link href={`/dashboard/managecomplaints/complaintsdetails`} passHref>
                <AiOutlineEye className='text-gray-500 cursor-pointer text-[1rem] ml-4' />
            </Link>,
    },
]
