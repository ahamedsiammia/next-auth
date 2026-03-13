import Link from 'next/link';
import React from 'react';
import LoginButton from "@/components/LoginButton";


const AuthButtons = () => {
    return (
        <div className="flex gap-5">
        <LoginButton></LoginButton>
        <Link href={"/register"} className="btn">
          Register
        </Link>
        </div>
    );
};

export default AuthButtons;