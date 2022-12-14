import React, { ReactNode } from "react";
import styled from "styled-components/native";

type StyledBodyProps = {
  color: string;
  opacity: number;
};
const StyledBody1 = styled.Text<StyledBodyProps>`
  font-size: 18px;
  color: ${(props) => props.color || "white"};
  opacity: ${(props) => props.opacity || 1};
`;

interface Body1Props {
  children: ReactNode;
  style?: React.CSSProperties;
  color?: string;
  opacity?: number;
}
export default function Body1({
  children,
  style,
  color,
  opacity,
}: Body1Props): JSX.Element {
  return (
    <StyledBody1
      color={color}
      opacity={opacity}
      style={[{ fontFamily: "Inconsolata_400Regular" }, style]}
    >
      {children}
    </StyledBody1>
  );
}
