'use client';
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, RadioGroup, Radio} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo";


export default function App() {
    return (
        <Navbar shouldHideOnScroll className="h-10 mt-4 bg-transparent w-full mx-auto">
            <NavbarBrand>
                <NavbarItem className="hidden lg:flex">
                    <a className="font-normal" href={'/'}>
                        <span>Junxiao </span>
                        <span className="underline underline-offset-4
                        transition duration-300 ease-in-out hover:decoration-amber-500
                        ">Guo</span>
                    </a>
                </NavbarItem>
            </NavbarBrand>
            <NavbarContent justify="end">
                <a>Blog</a>
                <a>Music</a>
                <a>Cycling</a>
            </NavbarContent>
        </Navbar>
    );
}
