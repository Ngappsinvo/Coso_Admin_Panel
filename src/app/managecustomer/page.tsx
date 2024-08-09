"use client"
import { DataTable } from "@/components/ui/DataTable";
import PageTitle from "@/components/ui/PageTitle";
import SearchBar from "@/components/ui/Searchbar";
import { ColumnDef } from "@tanstack/react-table";
// import { EyeIcon, ViewIcon } from "lucide-react";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Image from "next/image";
import Link from "next/link";

export default function ManageCustomer() {
  return (
    <>
      <PageTitle
        title="Manage Customer"
        breadcrumbs={[{ href: "/", label: "Manage Customer", isCurrent: true }]}
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
  gander: string
  birth: string
  email: string
  action: JSX.Element;
}

export const columns: ColumnDef<Table>[] = [
  {
    accessorKey: "id",
    header: "Coustomer ID",
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
    accessorKey: "gander",
    header: "Gender",
  },
  {
    accessorKey: "birth",
    header: "Date Of Birth",
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
    gander: 'female',
    birth: '16 july 1998',
    email: 'riyagupta2321@getMaxListeners.com',
    action: <Link href={`/customerdetails`} passHref>
      <AiOutlineEye className='text-gray-400 cursor-pointer text-[1rem]' />
    </Link>
  },
  {
    id: "728ed52f",
    name: "Riya Gupta",
    number: "8882203932",
    gander: 'female',
    birth: '16 july 1998',
    email: 'riyagupta2321@getMaxListeners.com',
    action: <Link href={`/customerdetails`} passHref>
      <AiOutlineEye className='text-gray-400 cursor-pointer text-[1rem]' />
    </Link>
  },
  // ...
]
