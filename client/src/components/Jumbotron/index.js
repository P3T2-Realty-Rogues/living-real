import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: 560,
        clear: "both",
        paddingTop: 50,
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
}

export default Jumbotron;
