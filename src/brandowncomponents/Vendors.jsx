import React from "react";
import { VendorData, contextMenuItems, VendorGrid } from "../data/dummy";
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
const Vendors = () => {
  return (
    <>
      <GridComponent
        id="gridcomp"
        dataSource={VendorData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {VendorGrid.map((item, index) => (
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
    </>
  );
};

export default Vendors;
