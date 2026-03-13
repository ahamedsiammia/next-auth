"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href,children}) => {
    const pathname =usePathname()
    return <Link className={`${pathname.startsWith(href) && "border-b-4 text-red-500"}`} href={href}>{children}</Link>
};

export default NavLink;