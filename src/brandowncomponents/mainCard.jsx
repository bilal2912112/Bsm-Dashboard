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
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { SalesData, contextMenuItems, SalesGrid } from "../data/dummy";
const mainCard = () => {
  return (
    <>
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
    </>
  );
};

export default mainCard;
