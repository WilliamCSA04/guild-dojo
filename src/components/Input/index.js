import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const DefaultInput = styled.input.attrs(props => ({
  "data-testid": props.dataTestID
}))`
  border-radius: 0.2rem;
  border: 1px transparent solid;
  &:focus {
    border: 1px ${props => props.theme.colors.secondary} solid;
    box-shadow: none;
  }
  padding: 0.1rem 0.5rem;
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
export default function Input({
  id,
  required,
  className,
  onChange,
  autoFocus,
  type,
  ariaLabel,
  ariaLabelledby,
  defaultValue,
  placeholder,
  dataTestID
}) {
  return (
    <DefaultInput
      id={id}
      required={required}
      onChange={e => onChange(e.currentTarget.value)}
      className={className}
      autoFocus={autoFocus}
      type={type}
      dataTestID={dataTestID}
      ariaLabel={ariaLabel}
      ariaLabelledby={ariaLabelledby}
      defaultValue={defaultValue}
      placeholder={placeholder}
    />
  );
}

Input.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTestID: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  id: PropTypes.string,
  ariaLabelledby: PropTypes.string,
  type: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string
};

Input.defaultProps = {
  required: false,
  ariaLabelledby: "",
  autoFocus: false,
  type: "text",
  defaultValue: "",
  placeholder: ""
};
