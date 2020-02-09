import React from "react";
import PropTypes from "prop-types";

export default function Button({
  className,
  children,
  ariaLabel,
  ariaLabelledby
}) {
  return (
    <button
      className={className}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  ariaLabelledby: PropTypes.string,
  className: PropTypes.string
};

Button.defaultProps = {
  ariaLabelledby: "",
  className: ""
};
