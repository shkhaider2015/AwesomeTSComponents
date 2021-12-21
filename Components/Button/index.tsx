import React, { FC } from "react";
import styled from "styled-components/native";

interface IBtnProp {
    variant: "Contained" | "Outlined"
    bgColor: string
}
interface IBtnTextProp extends IBtnProp {
    textMode: "Dark" | "Light"
}
interface IProps extends IBtnTextProp {
    text: string
}

const HaiderButton:FC<IProps> = (props:IProps) => {
    return <ButtonContainer underlayColor={"#9f90e8"} activeOpacity={0.8} onPress={() => ""} >
            <ButtonView variant={props.variant} bgColor={props.bgColor}  >
                <ButtonText  textMode={props.textMode} variant={props.variant} bgColor={props.bgColor} >{props.text}</ButtonText>
            </ButtonView>
    </ButtonContainer>
}

export default HaiderButton;

const ButtonContainer = styled.TouchableHighlight`
    border-radius: 8px;
`;
const ButtonView = styled.View<IBtnProp>`
    background-color: ${props => props.variant === "Contained" ? props.bgColor : "#FFFFFF" };
    border: ${props => props.variant === "Outlined" ? `2px solid ${props.bgColor}` : "none"  };
    border-radius: 8px;
    width: 100%;
    elevation: 4;
`;
const ButtonText = styled.Text<IBtnTextProp>`
    color: ${props => props.variant === "Outlined" ? props.bgColor : props.textMode === "Dark" ? "#000000" : "#FFFFFF" };
    font-weight: bold;
    padding: 5px 15px 5px 15px;
    text-transform: uppercase;
`;