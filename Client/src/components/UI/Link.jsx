import { PropTypes } from "prop-types";

function Link({ children, ...props }) {
  return <a {...props}>{children}</a>;
}

Link.propTypes = {
  children: PropTypes.node,
};

export default Link;
