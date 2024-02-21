import React from "react";

function Link({ children, ...props }) {
  return <a {...props}>{children}</a>;
}

export default Link;
