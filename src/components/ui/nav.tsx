"use client"

import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Image from "next/image";
import { usePathname } from "next/navigation";
import { TooltipProvider } from "@radix-ui/react-tooltip"

interface NavProps {
    isCollapsed: boolean;
    links: {
        title: string;
        label?: string;
        icon: LucideIcon;
        variant: "default" | "ghost";
        imageSrc?: string;
        href: string
    }[];
}

export function Nav({ links, isCollapsed }: NavProps) {
    const pathname = usePathname();
    return (
        <>
            <TooltipProvider>
                <div
                    data-collapsed={isCollapsed}
                    className="group flex flex-col gap-4 py-5 pb-40 data-[collapsed=true]:py-2">
                    <nav className="grid gap-3 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
                        {links.map((link, index) =>

                            isCollapsed ? (
                                <Tooltip key={index} delayDuration={0}>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                buttonVariants({ variant: link.href === pathname ? "default" : "ghost", size: "icon" }),
                                                "h-9 w-9",
                                                link.href === pathname
                                                    ? "bg-[#e84c3d] text-white"
                                                    : "bg-transparent text-gray-700 hover:bg-[#e84c3d] hover:text-white",
                                            )}
                                        >
                                            <link.icon className="h-4 w-4" />
                                            <span className="sr-only">{link.title}</span>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent side="right" className="flex items-center gap-4">
                                        {link.title}
                                        {link.label && (
                                            <span className="ml-auto text-muted-foreground">
                                                {link.label}
                                            </span>
                                        )}
                                    </TooltipContent>
                                </Tooltip>
                            ) : (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className={cn(
                                        buttonVariants({
                                            variant: link.href === pathname ? "default" : "ghost",
                                            size: "sm"
                                        }),
                                        link.href === pathname ? "bg-[#e84c3d] text-white" : "bg-transparent text-gray-500",
                                        "flex items-center justify-start rounded-md p-2 hover:bg-[#e84c3d] hover:text-white"
                                    )}
                                >
                                    {link.imageSrc ? (
                                        <Image
                                            src={link.imageSrc}
                                            alt={link.title}
                                            width={24}
                                            height={24}
                                            className="mr-2"
                                        />
                                    ) : (
                                        link.icon && (
                                            <link.icon
                                                className={cn(
                                                    "mr-2 h-4 w-4 hover:text-white",
                                                    link.href === pathname ? "text-white" : "text-gray-700"
                                                )}
                                            />
                                        )
                                    )}
                                    {link.title}
                                    {link.label && (
                                        <span
                                            className={cn(
                                                "ml-auto",
                                                link.variant === "default" &&
                                                "text-background dark:text-white"
                                            )}
                                        >
                                            {link.label}
                                        </span>
                                    )}
                                </Link>
                            )
                        )}
                    </nav>
                </div>
            </TooltipProvider>
        </>
    )
}
