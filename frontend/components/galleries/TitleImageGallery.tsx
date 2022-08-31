import React, { ReactNode } from "react";
import styled from "styled-components/native";

const StyledContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20px;
  top: -15px;
`;

type ImageBoxProps = {
  opacity: number;
  size: number;
};
const StyledImageBox = styled.Image<ImageBoxProps>`
  height: ${(props) => props.size + "px"};
  width: ${(props) => props.size + "px"};
  border-width: 4px;
  border-color: white;
  margin: 0 8px;
  opacity: ${(props) => props.opacity};
`;

export default function TitleImageGallery(): JSX.Element {
  return (
    <StyledContainer>
      <StyledImageBox
        size={122}
        opacity={0.1}
        source={require("../../../assets/image/witch1.png")}
      />
      <StyledImageBox
        size={142}
        opacity={0.4}
        source={require("../../../assets/image/witch2.png")}
      />
      <StyledImageBox
        size={162}
        opacity={1}
        source={require("../../../assets/image/witch3.png")}
      />
      <StyledImageBox
        size={142}
        opacity={0.4}
        source={require("../../../assets/image/witch4.png")}
      />
      <StyledImageBox
        size={122}
        opacity={0.1}
        source={require("../../../assets/image/witch5.png")}
      />
    </StyledContainer>
  );
}
