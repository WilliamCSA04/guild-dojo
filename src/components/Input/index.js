import React from "react";
import PropTypes from "prop-types";

export default function Input({
  id,
  className,
  type,
  ariaLabel,
  ariaLabelledby,
  defaultValue,
  placeholder
}) {
  return (
    <input
      id={id}
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
  id: PropTypes.string,
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
