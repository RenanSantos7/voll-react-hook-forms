import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--azul-escuro);
  border-radius: 8px;
  padding: 12px 16px;
  color: var(--branco);
  border: none;
  margin-top: 1em;
  font-weight: 700;
  line-height: 19px;
  width: 50%;
  cursor: pointer;
`;

interface ButtonProps {
  children: React.ReactNode
  type?: 'submit' | 'button'
  onClick?: ([arg]:any) => void
}

export default function Button({ type = 'button', children, onClick }: ButtonProps) {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
    >{children}</StyledButton>
  )
}
