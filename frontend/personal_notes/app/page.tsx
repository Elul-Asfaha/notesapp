"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";

const Page = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        username: "scorp",
        email: "1231@gmail.com",
        password: "1235",
    });

    // const URL = process.env.NEXT_PUBLIC_API_URL + "/users" || "";
    const URL = "http://localhost:5000" + "/users/register";
    console.log(URL);

    const handleSignUp = async () => {
        const { username, email, password } = data;
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password }),
        });
        console.log(response);
    };
    return (
        <div className='min-h-screen w-full flex justify-center items-center px-5 md:px-10'>
            <div className='w-full max-w-[900px] max-h-fit min-h-[500px] border border-black rounded-lg shadow-lg shadow-slate-300 grid md:grid-cols-2'>
                <div className='border-e-2 md:border-lime-200 px-5 py-10'></div>
                <div className='px-5 py-10 flex flex-col justify-center gap-5'>
                    <p>Sign Up</p>
                    <div>
                        <Label>Username:</Label>
                        <Input />
                    </div>
                    <div>
                        <Label>Email:</Label>
                        <Input />
                    </div>
                    <div>
                        <Label>Password:</Label>
                        <div className='flex gap-2'>
                            <Input type={showPassword ? "text" : "password"} />
                            <Button
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <FaRegEyeSlash />
                                ) : (
                                    <FaRegEye />
                                )}
                            </Button>
                        </div>
                    </div>
                    <Button onClick={() => handleSignUp()}>Sign Up</Button>
                </div>
            </div>
        </div>
    );
};

export default Page;
