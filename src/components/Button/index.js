import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DefaultButton = styled.button.attrs(props => ({
  "data-testid": props.dataTestID
}))`
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
`;
export default function Button({
  className,
  children,
  type,
  ariaLabel,
  ariaLabelledby,
  dataTestID
}) {
  return (
    <DefaultButton
      type={type}
      className={className}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      dataTestID={dataTestID}
    >
      {children}
    </DefaultButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  dataTestID: PropTypes.string.isRequired,
  ariaLabelledby: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string
};

Button.defaultProps = {
  ariaLabelledby: "",
  className: "",
  type: "button"
};
