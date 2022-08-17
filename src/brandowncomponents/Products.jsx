import React from "react";

const Products = () => {
  return (
    <>
      <form className="px-8 my-20 max-w-4xl mx-auto space-y-6">
        <div className="flex">
          <input
            type="text"
            name="productName"
            class="mt-1 px-3 py-2 mr-12  bg-white border shadow-sm border-slate-300 w-1/2 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  sm:text-sm "
            placeholder="Product Name"
          />

          <input
            type="number"
            name="price"
            class="mt-1 px-3 py-2 ml-12 bg-white border shadow-sm border-slate-300 w-1/2 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  sm:text-sm "
            placeholder="Price"
          />
        </div>
        <div className="flex">
          <input
            type="text"
            name="brandName"
            class="mt-1 px-3 py-2  mr-16 bg-white border shadow-sm  w-[23rem] border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm "
            placeholder="Brand Name"
          />

          <div className="flex">
            <select
              name="Quantity"
              class="mt-1 px-3 py-2  ml-8 bg-white border text-center w-[11.5rem] shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500   sm:text-sm "
              placeholder="Qty"
            >
              <option>Qty</option>
              <option>...</option>
              <option>...</option>
              <option>...</option>
            </select>
            <select
              name="Unit"
              class="mt-1 px-3 py-2  bg-white border text-center w-[11.5rem] shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  sm:text-sm "
              placeholder="Unit"
            >
              <option>Units</option>
              <option>...</option>
              <option>...</option>
              <option>...</option>
            </select>
            {/* <input
          type="number"
          name="Unit"
          class="mt-1 px-3 py-2  bg-white border text-center w-3/6 shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm "
          placeholder="Unit"
        /> */}
          </div>
        </div>
        <div className="flex">
          <select
            name="Category"
            class="mt-1 px-3 py-2 mr-12 bg-white border shadow-sm w-1/2 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  sm:text-sm "
            placeholder="Category"
          >
            <option>Category</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </select>

          <select
            name="subCategory"
            class="mt-1 px-3 py-2 ml-12 bg-white border shadow-sm w-1/2 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  sm:text-sm "
            placeholder="SubCategory"
          >
            <option>Sub Category</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </select>
        </div>
        <div className="flex justify-center ">
          <button class=" bg-blue-600 text-white p-2 px-14 my-12">
            Create
          </button>
          <button class=" bg-gray-300 text-black p-2 px-14 my-12">
            Discard
          </button>
        </div>
      </form>
    </>
  );
};

export default Products;
