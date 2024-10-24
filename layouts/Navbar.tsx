import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { GRAPH_CATE_API } from "@/lib/query/category";
// import { AcmeLogo } from "./AcmeLogo.jsx";

export default function ReponsiveNavbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [menuItems, setMenuItems] = useState([])


    const handleGetDataMenu = async () => {
        const stand = new GRAPH_CATE_API()
        const response = await stand.getAllCategory()
        setMenuItems(response)
    }

    useEffect(() => {
        handleGetDataMenu()
    }, [])
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
                    <Link color="foreground" href={'/'}>
                        HOME
                    </Link>
                </NavbarItem>
                {menuItems.map((item, index) => {
                    if (!item?.description) {
                        return
                    }
                    return <NavbarItem>
                        <Link color="foreground" href={item?.slug}>
                            {item?.name}
                        </Link>
                    </NavbarItem>
                })}

            </NavbarContent>

            {/* <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="warning" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent> */}

            <NavbarMenu>
                {menuItems.map((item, index) => {
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
