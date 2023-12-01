'use client';
import MenuItems from './MenuItems';
import { menuItems } from '../../data/menuItems';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={`bg-[#2b855e] w-full z-50 py-5`}>
            <div className='w-[90%] mx-auto'>
                <div className='flex justify-end '>
                    <div className='min-[769px]:hidden'>{menuOpen ? <X onClick={() => setMenuOpen((prev) => !prev)} /> : <Menu onClick={() => setMenuOpen((prev) => !prev)} />}</div>
                </div>
                <ul
                    className={`bg-[#2b855e] flex gap-2 px-3 py-2 w-full transition-all duration-300 ease-in-out max-[768px]:absolute lg:gap-3 min-[769px]:items-center md:flex-wrap max-[768px]:flex-col ${
                        menuOpen ? 'left-0' : 'left-[-100%]'
                    }`}
                >
                    {menuItems.map((menu, index) => {
                        const depthLevel1 = 0;
                        return <MenuItems items={menu} key={index} depthLevel={depthLevel1} />;
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
