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
import { brandData, contextMenuItems, RegisteredBrands } from "../data/dummy";
import { Header } from "../components";
import { search } from "@syncfusion/ej2/filemanager";
const registerbrands = () => {
  return (
    <>
      <div className="m-2 md:m-5 mt-24 p-2 md:p-5 bg-white rounded-3xl">
        <Header
          category="Get Information of registered brands"
          title="Registered Brands"
        />
        <GridComponent
          id="gridcomp"
          dataSource={brandData}
          allowPaging
          allowSorting
          toolbar={["Search"]}
          widt="auto"
        >
          <ColumnsDirective>
            {RegisteredBrands.map((item, index) => (
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

export default registerbrands;
