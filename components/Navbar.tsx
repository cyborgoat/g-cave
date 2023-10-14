'use client';
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, RadioGroup, Radio} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo";
import process from "process";


export default function App() {
    const rootPrefix = process.env.NEXT_PUBLIC_ROOT_PREFIX
    const webPrefix = rootPrefix ? "/g-cave/" : "/"
    return (
        <Navbar shouldHideOnScroll={false} className="bg-transparent dark:bg-slate-800 w-full mx-auto">
            <NavbarBrand>
                <NavbarItem className="hidden lg:flex">
                    <a className="group/name font-normal text-xl" href={webPrefix}>
                        <span className="underline underline-offset-4 decoration-slate-800/30
                        dark:decoration-slate-200/30
                        group-hover/name:decoration-amber-500
                        transition duration-700
                        ">Junxiao</span>
                        <span> </span>
                        <span className="px-1 rounded border-2 border-zinc-800/30
                        group-hover/name:border-slate-800
                        dark: border-zinc-100/30
                        dark:group-hover/name:border-slate-50
                        transition duration-700
                        "> Guo</span>
                    </a>
                </NavbarItem>
            </NavbarBrand>
            <NavbarContent justify="end">
                <a href={webPrefix + 'blog'}>Blog</a>
                <a href={webPrefix + 'music'}>Music</a>
                <a href={webPrefix + 'cycling'}>Cycling</a>
            </NavbarContent>
        </Navbar>
    );
}
