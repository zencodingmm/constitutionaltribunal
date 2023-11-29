import { ChevronsRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const ReadMore = () => {
    return (
        <Link href={''} className='flex items-center group px-[16px] py-[12px] bg-[#8BC34A] w-fit rounded-[13px]'>
            <span className='text-[18px] font-[500] pr-[12px]'>Read More</span>
            <ChevronsRight size={18} className='group-hover:translate-x-[8px] transition-transform duration-500 will-change-transform inline-block' />
        </Link>
    );
};

export default ReadMore;
