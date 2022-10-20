import React, { ReactNode } from "react";
import styled from "styled-components/native";

type StyledHeader2Props = {
  color: string;
  opacity: number;
  padding: string;
};
const StyledHeader2 = styled.Text<StyledHeader2Props>`
  font-size: 40px;
  letter-spacing: 4px;
  color: ${(props) => props.color || "black"};
  opacity: ${(props) => props.opacity || 1};
`;

interface Header2Props {
  children: ReactNode;
  style?: React.CSSProperties;
  color?: string;
  bold?: boolean;
  opacity?: number;
  padding?: string;
}
export default function Header2({
  children,
  style,
  color,
  bold = false,
  opacity,
  padding,
}: Header2Props): JSX.Element {
  return (
    <StyledHeader2
      color={color}
      opacity={opacity}
      style={[
        bold ? { fontFamily: "Eskapade_Bold" } : { fontFamily: "Eskapade" },
        style,
      ]}
    >
      {children}
    </StyledHeader2>
  );
}
