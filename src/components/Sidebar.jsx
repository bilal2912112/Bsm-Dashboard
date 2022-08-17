import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./Assets/Logo.png";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../context/ContextProvider";
const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  return (
    <div className="bg-blue-300 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="">
            <div className="flex justify-between  items-center">
              <Link
                to="/SalesAnalytics"
                onClick={handleCloseSideBar}
                className="items-center gap-3 ml-3 mt-8 flex text-xl font-bold tracking-tight dark:text-white text-white"
              >
                <img className=" h-10 w-10" src={logo} alt="" />
                <span>
                  BUSINESS <br /> AND SALE <br /> MANAGEMENT
                </span>
              </Link>

              <TooltipComponent content="Menu" position="BottomCenter">
                <button
                  type="button"
                  onClick={() => setActiveMenu(!activeMenu)}
                  className="text-xl rounded-full p-3 md:invisible hover:bg-light-gray mt-4 block"
                >
                  <MdOutlineCancel />
                </button>
              </TooltipComponent>
            </div>
            <div className="mt-10">
              {links.map((items) => (
                <div key={items.title}>
                  <NavLink
                    to={`/${items.name}`}
                    key={items.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {items.icon}
                    <span className="capitalize">{items.name}</span>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
