import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <div className='flex justify-center fixed top-0 w-full py-2.5 px-5'>
            <div className='grid grid-cols-2 items-center max-w-[1600px] w-full'>
                <div className='w-full'></div>
                <div className='flex gap-2 w-full justify-end'>
                    <Link href='signup'>Sign Up</Link>{" "}
                    <Link href='signin'>Sign In</Link>{" "}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
