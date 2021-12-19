import React, { FC } from "react";
import { TouchableHighlight, View, Text } from "react-native";
import styled from "styled-components/native";

const Dark = "#000000";
const Light = "#FFFFFF";
type ITextMode = "#000000" | "#FFFFFF" ;
interface IProps {
    text: string
    variant: "Contained" | "Outlined"
    color: string
    textMode: ITextMode

}

const HaiderButton:FC<IProps> = (props:IProps) => {
    return <ButtonContainer activeOpacity={0.8} onPress={() => ""} >
            <ButtonView variant={props.variant} backgroundColor={props.color}  >
                <ButtonText textMode={props.textMode} variant={props.variant} backgroundColor={props.color} >{props.text}</ButtonText>
            </ButtonView>
    </ButtonContainer>
}

export default HaiderButton;

const ButtonContainer = styled.TouchableHighlight`
    border-radius: 8px;
`;
const ButtonView = styled.View<{variant:"Contained"|"Outlined", backgroundColor: string }>`
    background-color: ${props => props.variant === "Contained" ? props.backgroundColor : "#FFFFFF" };
    border: ${props => props.variant === "Outlined" ? `2px solid ${props.backgroundColor}` : "none"  };
    border-radius: 8px;
    width: 100%;
    elevation: 4;
`;
const ButtonText = styled.Text<{textMode:ITextMode, variant:"Contained"|"Outlined", backgroundColor: string}>`
    color: ${props => props.variant === "Outlined" ? props.backgroundColor : props.textMode };
    font-weight: bold;
    padding: 5px 15px 5px 15px;
    text-transform: uppercase;
`;