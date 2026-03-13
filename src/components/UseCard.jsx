"use client"
import { useSession } from 'next-auth/react';
import React from 'react';

const UseCard = () => {
    const sesstion = useSession()
    return (
        <div>
            <h2 className='text-xl font-bold'>User-Client</h2>
            <p className='border p-4'>{JSON.stringify(sesstion)}</p>
        </div>
    );
};

export default UseCard;