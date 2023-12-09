import { ChevronsRight } from 'lucide-react';
import Link from 'next/link';

const ReadMoreTwo = () => {
    return (
        <Link href={''} className=' flex items-center group px-[12px] lg:px-[10px] xl:px-[12px] py-[10px] lg:py-[8px] xl:py-[10px] w-fit border-[2px] border-transparent bg-[#8BC34A] rounded-[12px]'>
            <span className='text-[12px] lg:text-[10px] xl:text-[12px] font-[500] pr-[12px]'>READ MORE</span>
            <ChevronsRight size={18} className='group-hover:translate-x-[8px] transition-transform duration-500 will-change-transform inline-block' />
        </Link>
    );
};

export default ReadMoreTwo;
