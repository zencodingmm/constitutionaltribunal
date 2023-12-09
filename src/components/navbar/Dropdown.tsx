import MenuItems from './MenuItems';

interface Any {
    submenus: any;
    dropdown: any;
    depthLevel: any;
}
const Dropdown = ({ submenus, dropdown, depthLevel }: Any) => {
    depthLevel = depthLevel + 1;

    const dropdownClass = depthLevel > 1 ? 'left-full top-0 min-[769px]:absolute' : '';
    const dropdownLength2 = submenus.length === 2 ? 'min-[769px]:h-[100px]' : '';
    const dropdownLength3 = submenus.length === 3 ? 'min-[769px]:h-[140px]' : '';
    const dropdownLength4 = submenus.length === 4 ? 'min-[769px]:h-[180px]' : '';
    const dropdownLength5 = submenus.length === 5 ? 'min-[769px]:h-[220px]' : '';

    return (
        <ul
            className={`flex flex-col gap-1 min-w-fit text-xl right-0 left-0 pl-5 pr-0 transition-all duration-300 z-50 min-[769px]:bg-[--navbar-color] min-[769px]:rounded min-[769px]:absolute min-[769px]:px-5 ${dropdownClass} ${
                dropdown ? `${dropdownLength2} ${dropdownLength3} ${dropdownLength4} ${dropdownLength5} py-5 min-[768px]:opacity-100` : `opacity-0 h-0 overflow-hidden`
            }`}
        >
            {submenus.map((submenu: any, index: number) => (
                <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
            ))}{' '}
        </ul>
    );
};

export default Dropdown;
