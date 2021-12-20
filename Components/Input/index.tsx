import React, { FC } from "react";
import styled from "styled-components/native";
import USER from "../../statics/user.png";

interface IInputView {

}
interface IInputField {

}
interface IProps {

}

const HaiderInput:FC = () => {
    return <InputTouchable>
        <InputView>
        <InputImage source={USER} />
            <InputField selectionColor={'red'} ></InputField>
        </InputView>
    </InputTouchable>
}

export default HaiderInput;

const InputTouchable = styled.TouchableHighlight``;
const InputView = styled.View<{}>`
    display: flex;
    flex-direction: row;
    border: 1px solid black;
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