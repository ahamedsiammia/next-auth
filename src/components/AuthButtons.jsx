"use client"
import Link from 'next/link';
import React from 'react';
import LoginButton from "@/components/LoginButton";
import { signOut, useSession } from 'next-auth/react';


const AuthButtons = () => {
    const sesstion = useSession();
    return (
        <div className="flex gap-5">
            {
                sesstion.status == "authenticated" ? <button onClick={()=> signOut()} className='btn'>LogOut</button> : 
        (<> <LoginButton></LoginButton>
        <Link href={"/register"} className="btn">
          Register
        </Link> </>)
        } 
            
        </div>
    );
};

export default AuthButtons;