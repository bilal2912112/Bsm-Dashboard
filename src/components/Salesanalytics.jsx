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

import {
  AnalyticsData,
  contextMenuItems,
  AnalyticsGrid,
  SparklineAreaData,
} from "../data/dummy";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { earningData, sparklineAreaData, ecomPieChartDat } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";
import paypal from "./Assets/PayPal.jpg";
import { Header } from "../components";
import { sampleData } from "../data/dummy";
import { WiMoonNew } from "react-icons/wi";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  PieSeries,
  AccumulationDataLabel,
  AccumulationLegend,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Example from "./Example";

const percentage = 66;
const salesanalytics = () => {
  return (
    <div className="m-2 md:m-5 mt-24 p-2 md:p-5 ">
      <Header
        category="Get summary of your weekly transiction here"
        title="Weekly SumUp"
      />
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-3 ">
        <div
          class="col-span-2  bg-white dark:text-gray-200 drop-shadow-xl
 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl"
        >
          <p className="text-xl font-extrabold tracking-tight text-slate-900">
            Card Details
          </p>
          <div class="flex pt-10">
            <div class="flex-auto w-80 ...">
              {" "}
              <img
                className="pl-2 py-2 col-span-3"
                src="/static/media/PayPal.bcfde80e6ba98199b6b4.jpg"
                width="300px"
                alt=""
              />
              <div className="pl-3 pt-5">
                {" "}
                <div class="w-3/4 flex  bg-gray-200 rounded-full dark:bg-gray-700">
                  <div
                    class="bg-blue-600 pl-5 text-xs font-medium text-blue-100 text-center leading-none rounded-full"
                    style={{ width: "45%" }}
                  >
                    {" "}
                    45%
                  </div>
                </div>
              </div>
              <div class="flex justify-between pt-5">
                <div class=" pl-3 order-first text-gray-400">
                  Weekly Payment limit
                </div>

                <div className="pr-10">$350.0/$230.0</div>
              </div>
            </div>
            <div class="pl-5 py-5 col-span-3 ...">
              {" "}
              <div class="pt-5">
                {" "}
                <h1 className=" mt-2">
                  <span className="text-blue-600">
                    {" "}
                    <BsCurrencyDollar />
                    <p className="text-2xl ">233233.32</p>
                  </span>
                  <span className="text-xl pl-5 text-green-600">
                    <BsCurrencyDollar />
                    <p className=" text-green-600">233233.32</p>
                  </span>
                  <span className=" pl-5 text-red-600">
                    {" "}
                    <BsCurrencyDollar />
                    <p>233233.32</p>
                  </span>
                </h1>
              </div>
              <WiMoonNew className="bg-gray-300 ml-10 p-1 rounded-lg mt-5 " />
            </div>
          </div>
        </div>

        <div class="...">
          {" "}
          <div
            class="bg-white dark:text-gray-200 drop-shadow-xl
 dark:bg-secondary-dark-bg my-3 py-4 rounded-2xl   md:w-64  "
          >
            {" "}
            <Example>
              {" "}
              <CircularProgressbar value={percentage} text={`${280}$`} />
            </Example>
            <p className="text-gray-400 pl-10">Amount Used</p>
            <p className="py-1 pl-10 font-bold">Account Balance</p>
            <p className="text-sm pl-3">{`you have left ${480}$ of your credit `}</p>
            <div class="grid grid-cols-6 gap-4 pl-3 pt-5">
              <div class="col-start-1 col-end-3 text-gray-400">
                Used Amount:
              </div>
              <div class="col-end-7 col-span-2 text-blue-500">280$</div>
              <div class="col-start-1 col-end-3 text-gray-400">
                Used Amount:
              </div>
              <div class="col-end-7 col-span-2 text-blue-500">280$</div>
              <div class="col-start-1 col-end-3 text-gray-400">
                Used Amount:
              </div>
              <div class="col-end-7 col-span-2 text-blue-500">280$</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex">
        <div
          class="bg-white dark:text-gray-200 drop-shadow-xl
 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-2/3"
        >
          <div className="flex justify-between">
            <p className="text-xl font-extrabold tracking-tight text-slate-900">
              Card Details
            </p>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div class="col-span-2 m-2 md:m-5 mt-24 p-2 md:p-5 ">
              {" "}
              <img
                className="pl-5 py-5 col-span-3"
                src="/static/media/PayPal.bcfde80e6ba98199b6b4.jpg"
                width="500px"
                alt=""
              />
              <section className="m-2 md:m-5 mt-24 p-2 md:p-5 ">
                <div class="w-64  bg-gray-200 rounded-full dark:bg-gray-700">
                  <div
                    class="bg-blue-600 pl-5 text-xs font-medium text-blue-100 text-center leading-none rounded-full"
                    style={{ width: "45%" }}
                  >
                    {" "}
                    45%
                  </div>
                </div>
              </section>
            </div>
            <div class="pt-5">
              {" "}
              <h1 className=" mt-2">
                <span className="text-blue-600">
                  {" "}
                  <BsCurrencyDollar />
                  <p className="text-2xl ">233233.32</p>
                </span>
                <span className="text-xl pl-5 text-green-600">
                  <BsCurrencyDollar />
                  <p className=" text-green-600">233233.32</p>
                </span>
                <span className=" pl-5 text-red-600">
                  {" "}
                  <BsCurrencyDollar />
                  <p>233233.32</p>
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div
          class="bg-white dark:text-gray-200 drop-shadow-xl
 dark:bg-secondary-dark-bg my-3 py-4 rounded-2xl   md:w-64  "
        >
          {" "}
          <Example>
            {" "}
            <CircularProgressbar value={percentage} text={`${280}$`} />
          </Example>
          <p className="text-gray-400 pl-10">Amount Used</p>
          <p className="py-1 pl-10 font-bold">Account Balance</p>
          <p className="text-sm pl-3">{`you have left ${480}$ of your credit `}</p>
          <div class="grid grid-cols-6 gap-4 pl-3 pt-5">
            <div class="col-start-1 col-end-3 text-gray-400">Used Amount:</div>
            <div class="col-end-7 col-span-2 text-blue-500">280$</div>
            <div class="col-start-1 col-end-3 text-gray-400">Used Amount:</div>
            <div class="col-end-7 col-span-2 text-blue-500">280$</div>
            <div class="col-start-1 col-end-3 text-gray-400">Used Amount:</div>
            <div class="col-end-7 col-span-2 text-blue-500">280$</div>
          </div>
        </div>
      </div> */}

      <div class=" grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-3">
        <div
          class="bg-white dark:text-gray-200 drop-shadow-xl
 dark:bg-secondary-dark-bg  p-4 rounded-2xl md:full col-span-2 "
        >
          <div className="flex justify-between">
            <p className="text-xl font-extrabold tracking-tight text-slate-900">
              Transection History
            </p>
            <button>this is button</button>
          </div>
          <div className="m-2 md:m-5 mt-24 p-2 md:p-5  bg-white rounded-3xl drop-shadow-lg">
            <GridComponent
              id="gridcomp"
              dataSource={AnalyticsData}
              allowPaging
              allowSorting
              toolbar={["Search"]}
              widt="auto"
            >
              <ColumnsDirective>
                {AnalyticsGrid.map((item, index) => (
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
        </div>
        <div
          class="bg-white dark:text-gray-200 drop-shadow-xl 
          dark:bg-secondary-dark-bg m-3 p-5 rounded-2xl   "
        >
          <AccumulationChartComponent
            title="OutCome Statistics  "
            tooltip={{ enable: true }}
          >
            <Inject
              services={[
                PieSeries,
                AccumulationDataLabel,
                AccumulationLegend,
                AccumulationTooltip,
              ]}
            ></Inject>
            <AccumulationSeriesCollectionDirective>
              <AccumulationSeriesDirective
                type="Pie"
                dataSource={sampleData}
                xName="name"
                yName="value"
                innerRadius="50%"
                position="inside"
              ></AccumulationSeriesDirective>
            </AccumulationSeriesCollectionDirective>
          </AccumulationChartComponent>
        </div>
      </div>
    </div>
  );
};

export default salesanalytics;
