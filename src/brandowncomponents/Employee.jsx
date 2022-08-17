import React, { useState } from "react";

import Branch1 from "./Branch1";
import Branch2 from "./Branch2";
import Branch3 from "./Branch3";
import Header from "./Header";

const Employee = () => {
  const [active, setActive] = useState("FirstCard");

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />

      <button
        class="py-3 bg-white px-2 hover:bg-sky-500 group-hover:text-white ..."
        onClick={() => setActive("FirstCard")}
      >
        Branch1
      </button>
      <button
        class="bg-white py-3  px-2  hover:bg-sky-500 group-hover:text-white ..."
        onClick={() => setActive("SecondCard")}
      >
        Branch2
      </button>
      <button
        class="bg-white py-3 px-2 hover:bg-sky-500 group-hover:text-white ..."
        onClick={() => setActive("ThirdCard")}
      >
        Branch3
      </button>
      <div>
        {active === "FirstCard" && <Branch1 />}
        {active === "SecondCard" && <Branch2 />}
        {active === "ThirdCard" && <Branch3 />}
      </div>
    </div>
  );
};
export default Employee;
