"use client"
import { DataTable } from "@/components/ui/DataTable";
import PageTitle from "@/components/ui/PageTitle";
import SearchBar from "@/components/ui/Searchbar";
import { ColumnDef } from "@tanstack/react-table";
// import { EyeIcon, ViewIcon } from "lucide-react";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import Image from "next/image";
import Link from "next/link";

export default function ManageHosts() {
  return (
    <>
      <PageTitle
        title="Manage Hosts"
        breadcrumbs={[{ href: "/", label: "Manage Hosts", isCurrent: true }]}
      />
      <div className="flex flex-col gap-5 w-full px-5 py-7">
        <SearchBar />
        <div className="p-3 bg-[#fffdf3] rounded-lg flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-max my-2">
          <div className="flex items-center justify-between sm:gap-10 w-full sm:w-auto">
            <span className="text-sm font-bold text-[#e84c3d]">All Request</span>
            <div className="bg-[#e84c3d] rounded-full px-3 py-1 text-xs font-semibold text-white">
              200
            </div>
          </div>
          <div className="flex items-center justify-between sm:gap-10 w-full sm:w-auto">
            <span className="text-sm font-semibold text-gray-500">Approve</span>
            <div className="bg-[#e84c3d] rounded-full px-3 py-1 text-xs font-semibold text-white">
              500
            </div>
          </div>
          <div className="flex items-center justify-between sm:gap-10 w-full sm:w-auto">
            <span className="text-sm font-semibold text-gray-500">Reject</span>
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
  id: string
  name: string
  number: string
  experience: string
  duration: string
  location: string
  action: JSX.Element;
}

export const columns: ColumnDef<Table>[] = [
  {
    accessorKey: "id",
    header: "Hosts ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "number",
    header: "Total No. Of Hosted Trip",
  },
  {
    accessorKey: "experience",
    header: "Experience",
  },
  {
    accessorKey: "duration",
    header: "Duration",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => row.original.action,
  },
]

export const data: Table[] = [
  {
    id: "12312",
    name: "Coso Trip",
    number: "20",
    experience: '2 years',
    duration: '3D 2N',
    location: 'Kerala',
    action: <>
      <div className="flex items-center gap-2">
        <div className="flex-shrink-0 p-1 bg-[#2dba28] flex items-center justify-center rounded-full">
          <AiOutlineCheck className="text-white text-[0.5rem] font-semibold" />
        </div>
        <div className="flex-shrink-0 p-1 bg-[#e84c3d] flex items-center justify-center rounded-full">
          <AiOutlineClose className="text-white text-[0.5rem] font-semibold" />
        </div>
        <Link href={`/managehosts/hostsdetails`} passHref>
          <AiOutlineEye className='text-gray-400 cursor-pointer text-[1rem]' />
        </Link>
      </div>
    </>
  },
  {
    id: "12312",
    name: "Coso Trip",
    number: "20",
    experience: '2 years',
    duration: '3D 2N',
    location: 'Kerala',
    action: <>
      <div className="flex items-center gap-2">
        <div className="flex-shrink-0 p-1 bg-[#2dba28] flex items-center justify-center rounded-full">
          <AiOutlineCheck className="text-white text-[0.5rem] font-semibold" />
        </div>
        <div className="flex-shrink-0 p-1 bg-[#e84c3d] flex items-center justify-center rounded-full">
          <AiOutlineClose className="text-white text-[0.5rem] font-semibold" />
        </div>
        <Link href={`/managehosts/hostsdetails`} passHref>
          <AiOutlineEye className='text-gray-400 cursor-pointer text-[1rem]' />
        </Link>
      </div>
    </>
  },
  // ...
]
