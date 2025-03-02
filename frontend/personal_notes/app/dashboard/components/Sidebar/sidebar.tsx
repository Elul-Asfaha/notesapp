import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import React from "react";
import { FaStar, FaArchive } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { Separator } from "@/components/ui/separator";
import { IoSettings } from "react-icons/io5";

const Sidebar = () => {
    const sidebarData = [
        {
            label: "Starred",
            action: () => console.log("Delete Account"),
            link: "",
            icon: <FaStar size={22} color='yellow' />,
        },

        {
            label: "Archive",
            action: () => console.log("Delete Account"),
            link: "",
            icon: <FaArchive size={22} color='green' />,
        },
        {
            label: "Trash",
            action: () => console.log("Delete Account"),
            link: "",
            icon: <IoTrashOutline size={22} color='red' />,
        },
        {
            label: "Settings",
            action: () => console.log("Delete Account"),
            link: "",
            icon: <IoSettings size={22} />,
        },
    ];
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant='outline'>Open</Button>
            </SheetTrigger>
            <SheetContent side='left'>
                <SheetHeader>
                    <div className='space-y-5 py-10'>
                        {sidebarData.map((item) => (
                            <Link
                                href={item.link}
                                key={item.label}
                                className='flex items-center gap-2'
                            >
                                {item.icon} <p>{item.label}</p>
                            </Link>
                        ))}
                    </div>
                    <Separator className='my-4' />
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};

export default Sidebar;
