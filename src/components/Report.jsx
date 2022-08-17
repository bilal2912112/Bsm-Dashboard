import { Header } from "../components";
import { BsCheckCircle } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";
import React from "react";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  Search,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { ReportData, contextMenuItems, ReportGrid } from "../data/dummy";
import { FaRegClock } from "react-icons/fa";
const report = () => {
  return (
    <>
      <div className="m-2 md:m-5 mt-24 p-2 md:p-5 bg-white rounded-3xl drop-shadow-xl">
        <Header
          category="Keep tack of all transection"
          title="Reports And Financial Ledger"
        />
        <div className="flex flex-wrap lg:flex-nowrap justify-between ">
          <div className=" dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-64 p-8 pt-9 m-3 bg-[#E7ECFF] bg-no-repeat bg-cover bg-center">
            <div className="flex justify-between">
              <section className="p-8 bg-blue-500 rounded-xl ">
                <BsCheckCircle
                  size={40}
                  className="bg-blue-300  rounded-3xl "
                />
              </section>
              <section className="text-center mt-5 mr-5 font-bold">
                <h1>Paid</h1>
                <p className="text-4xl pt-2 ">34</p>
              </section>
            </div>
          </div>
          <div className=" dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-64 p-8 pt-9 m-3 bg-[#FFF0DB] bg-no-repeat bg-cover bg-center">
            <div className="flex justify-between">
              <section className="p-8 bg-yellow-300 rounded-xl ">
                <HiOutlineClipboardList size={40} className=" rounded-3xl " />
              </section>
              <section className="text-center font-bold mt-5 mr-5">
                <h1>UnPaid</h1>
                <p className="text-4xl pt-2 ">10</p>
              </section>
            </div>
          </div>
          <div className=" dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-64 p-8 pt-9 m-3 bg-[#FFCACA] bg-no-repeat bg-cover bg-center">
            <div className="flex justify-between">
              <section className="p-8 bg-red-400 rounded-xl ">
                <FaRegClock size={40} className="  rounded-3xl " />
              </section>
              <section className="text-center font-bold mt-5 mr-5">
                <h1>Paid</h1>
                <p className="text-4xl pt-2 font-bold">34</p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="m-2 md:m-5 mt-24 p-2 md:p-5 bg-white rounded-3xl drop-shadow-lg">
        <GridComponent
          id="gridcomp"
          dataSource={ReportData}
          allowPaging
          allowSorting
          toolbar={["Search"]}
          widt="auto"
        >
          <ColumnsDirective>
            {ReportGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>

          <Inject
            services={[
              Resize,
              Sort,
              ContextMenu,
              Filter,
              Page,
              ExcelExport,
              Edit,
              PdfExport,
              Search,
              Toolbar,
            ]}
          />
        </GridComponent>
      </div>
    </>
  );
};

export default report;
