import MenuItems from './MenuItems';

interface Any {
    submenus: any;
    dropdown: any;
    depthLevel: any;
}
const Dropdown = ({ submenus, dropdown, depthLevel }: Any) => {
    depthLevel = depthLevel + 1;

    const dropdownClass = depthLevel > 1 ? 'left-full top-0 min-[769px]:absolute' : '';
    const dropdownLength2 = submenus.length === 2 ? 'h-[100px]' : '';
    const dropdownLength3 = submenus.length === 3 ? 'h-[140px]' : '';
    const dropdownLength4 = submenus.length === 4 ? 'h-[180px]' : '';
    const dropdownLength5 = submenus.length === 5 ? 'h-[220px]' : '';

    return (
        <ul
            className={`transition-all duration-300 z-50 min-[769px]:bg-[--navbar-color] flex flex-col gap-1 min-w-fit right-0 left-0 text-xl pl-5  pr-0  min-[769px]:rounded min-[769px]:absolute md:px-5 ${dropdownClass} ${
                dropdown ? `${dropdownLength2} ${dropdownLength3} ${dropdownLength4} ${dropdownLength5} py-5 opacity-100` : `opacity-0 h-0 overflow-hidden`
            }`}
        >
            {submenus.map((submenu: any, index: number) => (
                <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
            ))}{' '}
        </ul>
    );
};

export default Dropdown;
