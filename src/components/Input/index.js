import React from "react";
import PropTypes from "prop-types";

export default function Input({
  className,
  type,
  ariaLabel,
  ariaLabelledby,
  defaultValue,
  placeholder
}) {
  return (
    <input
      className={className}
      type={type}
      ariaLabel={ariaLabel}
      ariaLabelledby={ariaLabelledby}
      defaultValue={defaultValue}
      placeholder={placeholder}
    />
  );
}

Input.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  ariaLabelledby: PropTypes.string,
  type: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string
};

Input.defaultProps = {
  ariaLabelledby: "",
  type: "text",
  defaultValue: "",
  placeholder: ""
};
