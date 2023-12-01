'use client';
import MenuItems from './MenuItems';
import { menuItems } from '../../data/menuItems';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={`bg-[#2b855e] w-full z-50 py-5 sticky top-[80px]`}>
            <div className='w-full max-[768px]:relative'>
                <div className='w-[90%] mx-auto'>
                    <div className='flex justify-between'>
                        <span className='min-[769px]:hidden font-medium text-[#9d3383] hover:text-[#bf3b44]'>menu</span>
                        <div className='min-[769px]:hidden'>{menuOpen ? <X onClick={() => setMenuOpen((prev) => !prev)} /> : <Menu onClick={() => setMenuOpen((prev) => !prev)} />}</div>
                    </div>
                    <ul
                        className={`bg-[#8289de] flex gap-2 px-3 pt-2 pb-5 h-[80vh] w-full transition-all duration-300 ease-in-out max-[768px]:overflow-y-auto min-[769px]:h-auto min-[769px]:bg-[#2b855e] min-[769px]:py-2 max-[768px]:absolute max-[768px]:top-[40px] lg:gap-3 min-[769px]:items-center min-[769px]:flex-wrap max-[768px]:flex-col ${
                            menuOpen ? 'left-0' : 'left-[-100%]'
                        }`}
                    >
                        {menuItems.map((menu, index) => {
                            const depthLevel1 = 0;
                            return <MenuItems items={menu} key={index} depthLevel={depthLevel1} />;
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
