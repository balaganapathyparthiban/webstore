import { useLocation } from "react-router";
import colors from "tailwindcss/colors";
import { menus } from "./data";

const BottomNav: React.FC = () => {
  const location = useLocation();

  return (
    <div className="w-full h-full flex flex-row items-center justify-around border-t-2 shadow">
      {menus.map((menu, index) => {
        const isMatch = location.pathname === menu.route;
        const MenuIcon = isMatch ? menu.iconFill : menu.iconOutline;
        const MenuIconClass = isMatch ? menu.color : "text-gray-800";

        return (
          <div
            key={[menu.route, index].join("-")}
            className="flex flex-col justify-center items-center text-sm font-semibold"
          >
            <MenuIcon className={MenuIconClass} fontSize={24} />
            <p className={MenuIconClass}>{menu.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BottomNav;
