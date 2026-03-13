"use client"
import React from 'react';
import {signIn} from "next-auth/react"


const loginButton = () => {
    return (
        <div>
            <button className='btn' onClick={()=> signIn()} >Login now</button>
        </div>
    );
};

export default loginButton;