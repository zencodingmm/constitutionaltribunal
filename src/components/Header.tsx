import Image from 'next/image';
import React from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <div className='w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center gap-y-3 py-2'>
                <Image src='/assets/Images/ctulogo.png' alt='logo' width={320} height={320} />
                <div className='flex items-center gap-4 min-[375px]:gap-12  md:gap-4 lg:gap-4'>
                    <div className='flex gap-1 lg:gap-2'>
                        <input
                            type='text'
                            name='search'
                            id=''
                            placeholder='Search...'
                            className='bg-white border outline-none rounded-2xl pl-4 py-1 shadow-lg placeholder:text-gray-400 w-[100px] min-[425px]:w-[150px] md:w-[120px] lg:w-auto focus:border-[--navbar-color]'
                        />
                        <div className='bg-white flex justify-center items-center w-[35px] h-[35px] shadow-lg rounded-full border cursor-pointer'>
                            <Search className='w-[15px] text-[#388E3C]'/>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 '>
                        <Link href='/'>
                            <span className='text-[#388E3C] text-[16px] min-[425px]:text-[14px] md:text-[16px] lg:text-[18px]'>Myanmar</span>
                        </Link>
                        <Link href='/'>
                            <span className='text-[#388E3C] text-[16px] min-[425px]:text-[14px] md:text-[16px] lg:text-[18px]'>English</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
