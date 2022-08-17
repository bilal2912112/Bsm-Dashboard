import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./Assets/Logo.png";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Owner_links } from "../data/dummy";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../context/ContextProvider";
import man from "../data/avatar.jpg";
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
          <div className=" ">
            <section className="m-3 ">
              <p
                style={{ background: "#22215B" }}
                className="text-sm text-right rounded-t-lg pr-2"
              >
                <input
                  class=" px-4 mt-2 text-sm text-indigo-100 transition-colors duration-150 bg-green-400 rounded-xl cursor-pointer focus:shadow-outline hover:bg-green-600"
                  type="submit"
                  value="Registered"
                />
              </p>
              <div
                style={{ background: "#22215B" }}
                className=" rounded-b-lg pb-8 flex justify-between  items-center"
              >
                <img
                  class="w-20 h-20 rounded-full ml-3 mt-3 object-cover"
                  src={man}
                />
                <div class="flex text-sm  flex-col px-3 pt-3">
                  <p class="font-bold  text-white">BRAND NAME</p>
                  <p class="mt-1 flex-1 font-light text-sm text-slate-400">
                    Admin
                  </p>
                  <a
                    href="https://wrapxcode.com/"
                    className="text-decoration-none text-blue-500 mt-2"
                  >
                    View full profile
                  </a>
                </div>

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

              <div className="mt-10 text-xs font-bold">
                {Owner_links.map((items) => (
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
                      <span className="capitalize">{items.name1}</span>
                    </NavLink>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </>
      )}
      <Link
        to="/SalesAnalytics"
        onClick={handleCloseSideBar}
        className="items-center gap-3 ml-2 mt-10 flex   tracking-tight dark:text-white text-white"
      >
        <img className=" h-10 w-10" src={logo} alt="" />
        <span className="font-bold text-sm">BUSINESS AND SALE Managment</span>
      </Link>
    </div>
  );
};

export default Sidebar;
