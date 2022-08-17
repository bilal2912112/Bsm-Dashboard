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
import { paymentData, contextMenuItems, paymentGrid } from "../data/dummy";
import { Header } from "../brandowncomponents";
const registerbrands = () => {
  return (
    <>
      <div className="m-2 md:m-5 mt-24 p-2 md:p-5 bg-white rounded-3xl">
        <Header category="Keep tack of all transection" title="Payments" />
        <GridComponent
          id="gridcomp"
          dataSource={paymentData}
          allowPaging
          allowSorting
        >
          <ColumnsDirective>
            {paymentGrid.map((item, index) => (
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
    </>
  );
};

export default registerbrands;
