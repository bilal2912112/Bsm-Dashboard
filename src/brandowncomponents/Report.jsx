import { Header } from "../brandowncomponents";
import { BsCheckCircle } from "react-icons/bs";
import {
  BiCartAlt,
  AiOutlineShoppingCart,
  AiFillShopping,
} from "react-icons/ai";
import { HiOutlineClipboardList } from "react-icons/hi";
import React from "react";

import { BiDollar } from "react-icons/bi";
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
        {/* <div class="grid grid-cols-4 gap-3 ">
          <div class="shadow-md py-4 rounded-md">
            <div className="flex justify-between">
              <section className="text-center mt-5 mr-2 pl-1 font-bold">
                <p className="text-gray-400">Total Revenue</p>
                <p className=" py-2 ">$10000</p>
              </section>
              <section className="p-5  rounded-xl ">
                <BiDollar size={50} className="bg-blue-300  rounded-3xl " />
              </section>
            </div>
          </div>
          <div class="shadow-md py-4 rounded-md">
            <div className="flex justify-between">
              <section className="text-center mt-5 mr-2 pl-1 font-bold">
                <p className="text-gray-400">Sales</p>
                <p className=" py-2 ">$10000</p>
              </section>
              <section className="p-5  rounded-xl ">
                <BsCheckCircle
                  size={50}
                  className="bg-blue-300  rounded-3xl "
                />
              </section>
            </div>
          </div>
          <div class="shadow-md py-4 rounded-md">
            <div className="flex justify-between">
              <section className="text-center mt-5 mr-2 pl-1 font-bold">
                <p className="text-gray-400">Sales in 2021</p>
                <p className=" py-2 ">$10000</p>
              </section>
              <section className="p-5  rounded-xl ">
                <BsCheckCircle
                  size={50}
                  className="bg-blue-300  rounded-3xl "
                />
              </section>
            </div>
          </div>
          <div class="shadow-md py-4 rounded-md">
            <div className="flex justify-between">
              <section className="text-center mt-5 mr-2 pl-1 font-bold">
                <p className="text-gray-400">Sales in Aug</p>
                <p className=" py-2 ">$10000</p>
              </section>
              <section className="p-5  rounded-xl ">
                <BsCheckCircle
                  size={50}
                  className="bg-blue-300  rounded-3xl "
                />
              </section>
            </div>
          </div>
        </div> */}
        <div className="flex flex-wrap lg:flex-nowrap justify-between ">
          <div className=" dark:text-gray-200 ">
            <div class="shadow-md py-4 rounded-md">
              <div className="flex justify-between">
                <section className="text-center mt-5 mr-2 pl-1 font-bold">
                  <p className="text-gray-400">Total Revenue</p>
                  <p className=" py-2 ">$10000</p>
                </section>
                <section className="p-5  rounded-xl ">
                  <BiDollar
                    size={50}
                    className="bg-blue-300 text-white  rounded-3xl "
                  />
                </section>
              </div>
            </div>
          </div>
          <div className=" dark:text-gray-200 ">
            <div class="shadow-md py-4 rounded-md">
              <div className="flex justify-between">
                <section className="text-center mt-5 mr-2 pl-1 font-bold">
                  <p className="text-gray-400">Total Revenue</p>
                  <p className=" py-2 ">$10000</p>
                </section>
                <section className="p-5  rounded-xl ">
                  <BsCheckCircle
                    size={50}
                    className="bg-blue-300 text-white  rounded-3xl "
                  />
                </section>
              </div>
            </div>
          </div>
          <div className=" dark:text-gray-200 ">
            <div class="shadow-md py-4 rounded-md">
              <div className="flex justify-between">
                <section className="text-center mt-5 mr-2 pl-1 font-bold">
                  <p className="text-gray-400">Total Revenue</p>
                  <p className=" py-2 ">$10000</p>
                </section>
                <section className="p-5  rounded-xl ">
                  <AiOutlineShoppingCart
                    size={50}
                    className="bg-blue-300 text-white   rounded-3xl "
                  />
                </section>
              </div>
            </div>
          </div>
          <div className=" dark:text-gray-200 ">
            <div class="shadow-md py-4 rounded-md">
              <div className="flex justify-between">
                <section className="text-center mt-5 mr-2 pl-1 font-bold">
                  <p className="text-gray-400">Total Revenue</p>
                  <p className=" py-2 ">$10000</p>
                </section>
                <section className="p-5  rounded-xl ">
                  <AiFillShopping
                    size={50}
                    className="bg-blue-300 text-white  rounded-3xl "
                  />
                </section>
              </div>
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
