import MenuItems from './MenuItems';

interface Any {
    submenus: any;
    dropdown: any;
    depthLevel: any;
}
const Dropdown = ({ submenus, dropdown, depthLevel }: Any) => {
    depthLevel = depthLevel + 1;

    const dropdownClass = depthLevel > 1 ? 'left-full top-0 min-[769px]:absolute' : '';

    return (
        <ul
            className={`bg-[#8289de] z-50 min-[769px]:bg-[#2b855e] flex flex-col gap-1 min-w-fit right-0 left-0 text-xl pl-5  pr-0 py-5 min-[769px]:rounded min-[769px]:absolute md:px-5 ${dropdownClass} ${
                dropdown ? 'block' : 'hidden'
            }`}
        >
            {submenus.map((submenu: any, index: number) => (
                <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
            ))}{' '}
        </ul>
    );
};

export default Dropdown;
