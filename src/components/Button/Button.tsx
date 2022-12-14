import { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  /** Essa prop é das opções de cor  */
  variant?: "primary" | "accent";
  /** Essa prop é das opções de tamanho */
  children: ReactNode;
  /** lorasdka osdkoa skdoaksdoaks */
  disabled: boolean;
  onClick?: () => MouseEventHandler<HTMLButtonElement>;
}


const StyleButton = styled.button<ButtonProps>`
  cursor: pointer;
  border: 0;
  padding: 8px 14px;
  transation: 0.3;
  ${({ theme, variant }) => {
    return {
      backgroundColor: theme.colors[variant].main,
      colors: theme.colors[variant].text,
      ":hover": {	
        backgroundColor: theme.colors[variant].ligth,
      },
      ':focus': {
        backgroundColor: theme.colors[variant].dark,
      }
    };
  }}
`;

export default function Button({ children, ...props }: ButtonProps) {
  return <StyleButton {...props}>{children}</StyleButton>;
}

Button.defaultProps = {
  disabled: false,
  variant: "primary",
};
