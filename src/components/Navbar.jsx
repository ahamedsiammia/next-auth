import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='border-b-2 py-3 text-center space-x-6'>
            <Link href="/"  >Home</Link>
            <NavLink href={"/public"} >public</NavLink>
            <NavLink href={"/privet"} >privet</NavLink>
            <NavLink href={"/admin"} >Admin</NavLink>
            <NavLink href={"/about"} >About</NavLink>
        </div>
    );
};

export default Navbar;