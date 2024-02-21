import React from "react";

function Wrapper({ className, children, ...props }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export default Wrapper;
