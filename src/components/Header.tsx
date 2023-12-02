'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

const options = [
    { img: '/assets/Images/english.png', label: 'English' },
    { img: '/assets/Images/myanmar.png', label: 'Myanmar' },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [selectedOption, setSelectedOption] = useState<any>(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value: any) => {
        setSelectedOption(value);
        setIsOpen(false);
    };

    return (
        <header>
            <div className='w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center gap-y-3 py-2'>
                <Image src='/assets/Images/ctulogo.png' alt='logo' width={320} height={320} />
                <div className='relative flex items-center gap-8 md:gap-4 lg:gap-4'>
                    <div className='flex items-center gap-1 lg:gap-2'>
                        <input
                            type='search'
                            name='search'
                            id=''
                            placeholder='Search...'
                            className='bg-white border outline-none rounded-2xl pl-4 py-1 shadow-lg placeholder:text-gray-400 w-[100px] min-[425px]:w-[150px] md:w-[120px] lg:w-auto focus:border-[--navbar-color] min-[320px]:placeholder:text-[14px]'
                        />
                        <div className='bg-white flex justify-center items-center w-[30px] h-[30px] md:w-[35px] md:h-[35px] shadow-lg rounded-full border cursor-pointer'>
                            <Search className='w-[12px] md:w-[15px] text-[#388E3C]' />
                        </div>
                    </div>
                    <div>
                        <div className='w-[120px] lg:min-w-[150px] relative inline-flex rounded-md bg-white shadow-lg'>
                            <div className='flex items-center gap-2 pl-2 lg:pl-4 cursor-pointer' onClick={toggling}>
                                {selectedOption ? (
                                    <div className='flex items-center gap-1 lg:gap-2'>
                                        <Image src={selectedOption.img} alt='img' width={20} height={20} />
                                        <span className='min-[320px]:text-[12px] text-[14px]'>{selectedOption.label}</span>
                                    </div>
                                ) : (
                                    <div className='flex items-center gap-1 lg:gap-2'>
                                        <Image src='/assets/Images/myanmar.png' alt='img' width={20} height={20} />
                                        <span className='min-[320px]:text-[12px] md:text-[14px] '>Myanmar</span>
                                    </div>
                                )}
                            </div>
                            <div className='relative' onClick={toggling}>
                                <button
                                    type='button'
                                    className='border-1 border-gray-50 inline-flex h-full items-center justify-center rounded-r-md px-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                                >
                                    <ChevronDown className='w-[16px] lg:w-[18px]'/>
                                </button>
                            </div>
                            {isOpen && (
                                <div className=' absolute top-0 right-0 z-10 mt-10 min-w-[150px] origin-top right rounded-md border border-gray-100 bg-white shadow-lg'>
                                    {options.map((option) => (
                                        <div key={Math.random()}>
                                            <button type='button' onClick={() => onOptionClicked(option)} className='flex items-center  pl-3'>
                                                <Image src={option.img} alt='english' width={20} height={20} />
                                                <div className='block rounded-lg px-4 py-2 text-sm text-gray-500 no-underline hover:bg-gray-100 text-[14px] min-[320px]:text-[12px]'>{option.label}</div>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
