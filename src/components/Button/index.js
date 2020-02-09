import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DefaultButton = styled.button`
  border: none;
  border-radius: 0.2rem;
`;
export default function Button({
  className,
  children,
  type,
  ariaLabel,
  ariaLabelledby
}) {
  return (
    <DefaultButton
      type={type}
      className={className}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
    >
      {children}
    </DefaultButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  ariaLabelledby: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string
};

Button.defaultProps = {
  ariaLabelledby: "",
  className: "",
  type: "button"
};
