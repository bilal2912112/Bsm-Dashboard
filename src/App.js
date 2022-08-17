import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./App.css";
// import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
// import Plan from "./components/Plan";
// import Registerbrands from "./components/Registerbrands";
// import Report from "./components/Report";
// import SalesAnalytics from "./components/Salesanalytics";
// import Settings from "./components/Settings";
// import Payment from "./components/Payment";
// import Registernewbrands from "./components/registernewbrand";
// import { useStateContext } from "./context/ContextProvider";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./brandowncomponents";
import Employee from "./brandowncomponents/Employee";
import Plan from "./brandowncomponents/Plan";
import ShopeSale from "./brandowncomponents/ShopeSale";
import Report from "./brandowncomponents/Report";
import SalesAnalytics from "./brandowncomponents/Salesanalytics";
import Settings from "./brandowncomponents/Settings";
import Payment from "./brandowncomponents/Payment";
import Branches from "./brandowncomponents/Branches";
import Registernewbrands from "./brandowncomponents/registernewbrand";
import { useStateContext } from "./context/ContextProvider";
const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();
  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);
  return (
    <>
      <div className={currentMode === "Dark" ? "dark" : ""}>
        <BrowserRouter>
          <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
              <TooltipComponent content="Settings" position="Top">
                <button
                  type="button"
                  onClick={() => setThemeSettings(true)}
                  style={{ background: currentColor, borderRadius: "50%" }}
                  className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                >
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>
            {activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}
            <div
              className={
                activeMenu
                  ? "dark:bg-main-dark-bg  bg-slate-100 min-h-screen md:ml-72 w-full  "
                  : "bg-slate-100 dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
              }
            >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                <Navbar />
              </div>
              <div>
                {themeSettings && <ThemeSettings />}
                <Routes>
                  {/* dashboard main */}
                  <Route path="/SalesAnalytics" element={<SalesAnalytics />} />
                  <Route path="/Shope_Sale_Summary" element={<ShopeSale />} />
                  <Route path="/Employee" element={<Employee />} />
                  <Route path="/Branches" element={<Branches />} />
                  <Route path="/plans" element={<Plan />} />
                  <Route path="/payments" element={<Payment />} />
                  <Route path="/report" element={<Report />} />
                  <Route path="/setting" element={<Settings />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
