import { TouchableHighlight, View, Text } from "react-native";
import styled from "styled-components";

const HaiderButton = () => {
    return <ButtonContainer>
            <ButtonView >
                <ButtonText>Some ButtonText</ButtonText>
            </ButtonView>
    </ButtonContainer>
}

export default HaiderButton;

const ButtonContainer = styled.TouchableHighight``;
const ButtonView = styled.View``;
const ButtonText = styled.TouchableHighight``;