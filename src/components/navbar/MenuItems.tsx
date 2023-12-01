'use client';
import { useState } from 'react';
import Dropdown from './Dropdown';
import { ChevronDown, ChevronRight, ChevronUp } from 'lucide-react';
import Link from 'next/link';

interface Type {
    items: any;
    depthLevel: any;
}
const MenuItems = ({ items, depthLevel }: Type) => {
    const [dropdown, setDropdown] = useState(false);
    const onMouseEnter = () => {
        window.innerWidth > 768 && setDropdown(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 768 && setDropdown(false);
    };

    return (
        <li className='relative text-base font-medium md:whitespace-nowrap' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {items.submenu ? (
                items.main_title ? (
                    <>
                        <button
                            type='button'
                            className='hover:bg-[#20533d] rounded w-full flex gap-1 items-center justify-between px-2 py-1'
                            // aria-haspopup='menu'
                            aria-expanded={dropdown ? 'true' : 'false'}
                            onClick={() => setDropdown((prev) => !prev)}
                        >
                            {items.main_title} {depthLevel > 0 ? <ChevronRight /> : dropdown ? <ChevronUp /> : <ChevronDown absoluteStrokeWidth />}
                        </button>
                        <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
                    </>
                ) : (
                    <>
                        <button
                            type='button'
                            className='hover:bg-[#20533d] rounded w-full flex items-center justify-between px-2 py-2 min-[769px]:hidden'
                            // aria-haspopup='menu'
                            aria-expanded={dropdown ? 'true' : 'false'}
                            onClick={() => setDropdown((prev) => !prev)}
                        >
                            {items.title} {depthLevel > 1 ? <ChevronRight /> : dropdown ? <ChevronUp /> : <ChevronDown absoluteStrokeWidth />}
                        </button>
                        <button
                            type='button'
                            className='hover:bg-[#20533d] rounded w-full flex items-center justify-between px-2  py-2 max-[768px]:hidden'
                            // aria-haspopup='menu'
                            aria-expanded={dropdown ? 'true' : 'false'}
                            onClick={() => setDropdown((prev) => !prev)}
                        >
                            {items.title} {depthLevel > 0 ? <ChevronRight /> : <ChevronDown absoluteStrokeWidth />}
                        </button>
                        <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
                    </>
                )
            ) : items.main_title ? (
                <Link href={items.path} className='block hover:bg-[#20533d] rounded px-2 py-1'>
                    {items.main_title}{' '}
                </Link>
            ) : (
                <Link href={items.path} className='block hover:bg-[#20533d] rounded px-2 py-2'>
                    {items.title}{' '}
                </Link>
            )}
        </li>
    );
};

export default MenuItems;
