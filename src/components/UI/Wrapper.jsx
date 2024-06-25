import { PropTypes } from "prop-types";

function Wrapper({ className, children, ...props }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

Wrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Wrapper;
