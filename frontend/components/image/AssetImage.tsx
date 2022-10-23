import React from "react";
import styled from "styled-components/native";

type StyledImageProps = {
  witchVisible: boolean;
};
const StyledImage = styled.Image<StyledImageProps>`
  width: 100%;
  height: ${(props) => (props.witchVisible ? "160px" : "1px")};
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.witchVisible ? 1 : 0)};
`;

type AssetImageProps = {
  witchVisible: boolean;
  imageUrl: string;
  handleLoad: (setVisible: boolean) => void;
};
export default function AssetImage({
  witchVisible,
  imageUrl,
  handleLoad,
}: AssetImageProps) {
  return (
    <StyledImage
      source={{ uri: imageUrl }}
      witchVisible={witchVisible}
      onLoadEnd={handleLoad}
    />
  );
}
