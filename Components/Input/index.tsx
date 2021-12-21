import React, { FC } from "react";
import styled from "styled-components/native";
import USER from "../../statics/user.png";

interface IInputView {
    color: string
    isSelected: boolean
}
interface IInputField {

}
interface IProps extends IInputView  {

}

const HaiderInput:FC<IProps> = (props:IProps) => {
    return <InputTouchable>
        <InputView color={props.color} isSelected={props.isSelected} >
        <InputImage source={USER} />
            <InputField selectionColor={props.color} ></InputField>
        </InputView>
    </InputTouchable>
}

export default HaiderInput;

const InputTouchable = styled.TouchableHighlight``;
const InputView = styled.View<IInputView>`
    display: flex;
    flex-direction: row;
    border: 1px solid ${prop => prop.isSelected ? prop.color : '#bdbdbd' } ;
    border-radius: 8px;
    height: 48%;
    padding-left: 2px;
`;
const InputImage = styled.Image`
    max-width: 15px;
    max-height: 15px;
    margin-top: auto;
    margin-bottom: auto;
`;
const InputField = styled.TextInput<{}>`
    padding: 0;
    padding-left: 5px;
    opacity: .7;
`;