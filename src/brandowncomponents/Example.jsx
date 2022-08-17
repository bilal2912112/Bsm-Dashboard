import React from "react";

function Example(props) {
  return (
    <div className="pl-14 " style={{ marginBottom: 10 }}>
      <div style={{ marginTop: 30, display: "flex" }}>
        <div style={{ width: "500px", paddingRight: 30 }}>{props.children}</div>
        <div style={{ width: "70%" }}>
          <h3 className="h5">{props.label}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Example;
