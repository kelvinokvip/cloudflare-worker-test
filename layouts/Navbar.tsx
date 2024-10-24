//@ts-nocheck
import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { getAllCategory, GRAPH_CATE_API } from "@/lib/query/category";
// import { AcmeLogo } from "./AcmeLogo.jsx";
import { usePathname } from 'next/navigation'

import Link from 'next/link'
import { useRouter } from 'next/router'

export default function ReponsiveNavbar({ menuItems }) {
    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [activeItem, setActiveItem] = useState()
   
    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            {/* <NavbarContent className=" pr-3" justify="center">
                <NavbarBrand>
                    <p className="font-bold text-inherit">Trang chủ</p>
                </NavbarBrand>
            </NavbarContent> */}

            <NavbarContent className="hidden sm:!flex sm:!visible gap-4" justify="center">
                <NavbarItem>
                    <Link href={'/'} className="text-white">
                        HOME
                    </Link>
                </NavbarItem>
                {(menuItems)?.map((item, index) => {
                    
                    if (!item?.description) {
                        return
                    }
                    return <NavbarItem>
                        <div className={router.asPath?.replace("/","") === item.slug ? "text-blue-400 hover:cursor-pointer" : "text-white hover:cursor-pointer"} onClick={() => {
                            router.push(item?.slug)
                        }}>
                            {item?.name}
                        </div>
                    </NavbarItem>
                })}

            </NavbarContent>



            <NavbarMenu>
                {(menuItems)?.map((item, index) => {
                    if (!item?.description) {
                        return
                    }
                    return (
                        <NavbarMenuItem key={`${item?.slug}-${index}`}>
                            <Link
                                className="w-full"
                                color={
                                    index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                href="#"
                                size="lg"
                            >
                                {item?.name}
                            </Link>
                        </NavbarMenuItem>
                    )
                })}
            </NavbarMenu>
        </Navbar>
    );
}
