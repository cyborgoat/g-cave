'use client';
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, RadioGroup, Radio} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo";


export default function App() {
    const DropdownContent = () => (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    color="warning"
                    variant="light"
                    className="capitalize font-bold text-zinc-900"
                >
                    My ...
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Dropdown Variants"
                color="warning"
                variant="light"
            >
                <DropdownItem className={"capitalize"} key="resume">resume</DropdownItem>
                <DropdownItem className={"capitalize"} key="blog">
                    <a href={"/blog"}>tech blog</a>
                </DropdownItem>
                <DropdownItem className={"capitalize"} key="music">music production</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
    return (
        <Navbar className="h-10 mt-4 bg-zinc-50 border-b-2 border-zinc-800/60 w-4/5 mx-auto">
            <NavbarBrand>
                <AcmeLogo/>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem className="hidden lg:flex">
                    <a className="font-semibold text-inherit" href={'/'}>Junxiao Guo</a>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <DropdownContent/>
            </NavbarContent>
        </Navbar>
    );
}
