import React from "react";
import { FaRegClock } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { HiOutlineClipboardList } from "react-icons/hi";
import {
  BiCartAlt,
  AiOutlineShoppingCart,
  AiFillShopping,
} from "react-icons/ai";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { SalesData, contextMenuItems, SalesGrid } from "../data/dummy";
import Area from "./Area";
import Header from "./Header";
import { WiMoonNew } from "react-icons/wi";
const ShopeSale = () => {
  return (
    <>
      <div className="m-2 md:m-5 mt-24 p-2 md:p-5 bg-white ">
        <Header
          category="Get summary of your weekly transection"
          title="Shope Sales Summary"
        />
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
        <div class="flex justify-between pt-10  ...">
          <div className="">
            {" "}
            <p className="text-3xl font-extrabold tracking-tight text-slate-900">
              Sales Summary
            </p>
          </div>

          <div class="flex justify-end mr-10">
            <div className="pt-1 ">
              <WiMoonNew className="bg-blue-400 rounded-lg mr-2" />
            </div>
            <div className="">Sales</div>
          </div>
        </div>
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
          <div className="w-full">
            <Area />
          </div>
        </div>
        <div className="m-2 md:m-5 mt-24 p-2 md:p-5 bg-white rounded-3xl">
          <Header title="Transections" />
          <GridComponent
            id="gridcomp"
            dataSource={SalesData}
            allowPaging
            allowSorting
          >
            <ColumnsDirective>
              {SalesGrid.map((item, index) => (
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
              ]}
            />
          </GridComponent>
        </div>
      </div>
    </>
  );
};

export default ShopeSale;
