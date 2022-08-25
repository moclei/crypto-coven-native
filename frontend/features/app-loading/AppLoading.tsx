import React from 'react';
import { Text} from 'react-native';
import styled from 'styled-components/native';

const StyledApp = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;


export default function AppLoading(): JSX.Element {
    return (
        <StyledApp >
            <Text>Loading...</Text>
        </StyledApp>
    );
}
