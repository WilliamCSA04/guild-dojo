import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DefaultInput = styled.input`
  border-radius: 0.2rem;
  border: none;
  padding: 0 0.5rem;
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
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
    <DefaultInput
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
