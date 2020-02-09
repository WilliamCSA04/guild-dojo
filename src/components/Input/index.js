import React from "react";
import PropTypes from "prop-types";

export default function Input({
  className,
  type,
  ariaLabel,
  ariaLabelledby,
  defaultValue,
  placehoder
}) {
  return (
    <input
      className={className}
      type={type}
      ariaLabel={ariaLabel}
      ariaLabelledby={ariaLabelledby}
      defaultValue={defaultValue}
      placeholder={placehoder}
    />
  );
}

Input.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  ariaLabelledby: PropTypes.string,
  type: PropTypes.string,
  defaultValue: PropTypes.string,
  placehoder: PropTypes.string
};

Input.defaultProps = {
  ariaLabelledby: "",
  type: "text",
  defaultValue: "",
  placehoder: ""
};
