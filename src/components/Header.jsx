import React from "react";

const Header = ({ category, title }) => {
  return (
    <div className="mb-10">
      <p className="text-3xl font-extrabold tracking-tight text-slate-900">
        {title}
      </p>
      <p className="text-gray-400 text-xs mt-2 ml-6">{category}</p>
    </div>
  );
};

export default Header;
