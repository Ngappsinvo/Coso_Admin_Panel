"use client"
import React, { useState, useEffect } from 'react'
import { Nav } from './ui/nav'
import {
  User,
  Home,
  Calendar,
  FileText,
  BarChart,
  Edit,
  Settings,
  LogOutIcon,
} from "lucide-react"
import Image from 'next/image'
import {
  useWindowWidth,
} from '@react-hook/window-size'

type Props = {}

export const SideNavbar = (props: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className='relative bg-[#fffaf6] px-5 pb-5 pt-10'>
      {!mobileWidth && (
        <div className="border-b border-[#000] flex justify-center">
          <Image src="/logo.png" alt="" height={160} width={160} />
        </div>
      )}

      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Manage Customer",
            href: '/',
            icon: User,
            variant: "default",
          },
          {
            title: "Manage Hosts",
            href: '/managehosts',
            icon: Home,
            variant: "ghost",
          },
          {
            title: "Manage Tips & Booking",
            href: '/managetips',
            icon: Calendar,
            variant: "ghost",
          },
          {
            title: "Manage Complaints",
            href: '/managecomplaints',
            icon: FileText,
            variant: "ghost",
          },
          {
            title: "Manage Accounts & Reporting",
            href: '/manageaccounts',
            icon: BarChart,
            variant: "ghost",
          },
          {
            title: "Manage CMS",
            href: '/managecms',
            icon: Edit,
            variant: "ghost",
          },
          {
            title: "Manage Setting",
            href: '/managesetting',
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
      {mobileWidth ? (
        <div className='flex justify-center pt-52'>
          <button className='bg-[#e84c3d] py-2 px-3 text-sm text-white rounded-md flex items-center gap-2'>
            <LogOutIcon className='w-4 h-4' />
          </button>
        </div>
      ) : (
        <div className='flex justify-center'>
          <button className='bg-[#e84c3d] py-2 px-7 text-sm text-white rounded-md flex items-center gap-2'>
            <LogOutIcon className='w-4 h-4' />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  )
}
