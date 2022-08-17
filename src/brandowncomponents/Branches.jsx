import React, { useState } from "react";
import Vendors from "./Vendors";
import Units from "./Units";
import Products from "./Products";
import NewBranch from "./NewBranch";

import Header from "./Header";

const Branches = () => {
  const [active, setActive] = useState(<mainCard />);

  let flag = true;
  function display() {
    flag = false;
    console.log("works");
  }
  return (
    <>
      <div className="m-2 md:m-5 mt-24 p-2 md:p-5 bg-white rounded-3xl">
        <Header
          title="Brancehs"
          category="Get summary of your weekly transection"
        />
        <div className="flex justify-between py-5">
          <div>
            {" "}
            <p className="text-xl font-extrabold tracking-tight text-slate-900">
              Registrered Branches
            </p>
          </div>

          <div class="flex justify-between gap-10 font-extrabold  text-sky-500">
            <div
              className="active:text-gray-500"
              onClick={() => setActive("FirstCard", display())}
            >
              Vendors
            </div>
            <div
              className="active:text-gray-500"
              onClick={() => setActive("SecondCard", display())}
            >
              Units
            </div>
            <div
              className="active:text-gray-500"
              onClick={() => setActive("ThirdCard")}
            >
              Products
            </div>
            <div
              className="active:text-gray-500"
              onClick={() => setActive("Forth")}
            >
              {" "}
              Add New Branches
            </div>
          </div>
        </div>

        <div>
          {active === "FirstCard" && <Vendors />}
          {active === "SecondCard" && <Units />}
          {active === "ThirdCard" && <Products />}
          {active === "Forth" && <NewBranch />}
        </div>
      </div>
    </>
  );
};

export default Branches;
