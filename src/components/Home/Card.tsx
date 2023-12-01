import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({ src, alt, text, href }: any) => {
    return (
        <div className='basis-full md:basis-[48%] xl:basis-[31%] h-auto border-solid border-[3px] border-[#8BC34A] rounded-[10px] relative'>
            <Image src={src} alt={alt} className='w-full h-full rounded-[6px]' />
            <Link href={href}>
                <span className='absolute cursor-pointer bottom-[10%] left-[6%] bg-[#F2F9F1] px-[15px] py-[10px] text-[18px] font-[500] rounded-[10px] border border-solid border-[#8BC34A] hover:shadow-[5px_5px_0px_0px_#8BC34A] hover:translate-y-[8px] transition-transform duration-500 will-change-transform'>
                    {text}
                </span>
            </Link>
        </div>
    );
};

export default Card;
