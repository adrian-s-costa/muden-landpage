import styled from "styled-components";

export default function Input(props){
    return(
        <InputDiv>
            <Label>{props.label}</Label>
            <InputForm type={props.type} placeholder={props.placeholder} required={true}></InputForm>
        </InputDiv>
    )
}

const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`

const InputForm = styled.input`
    width: 400px;
    border-radius: 20px;
    border: none;
    height: 35px;
    padding: 0px 15px;
    font-size: 15px;
    font-style: italic;

    @media (max-width: 975px) {
        width: 100%;
    }
`

const Label = styled.span`
    font-size: 19px;
    color: #38bc94;
    font-weight: bold;
    margin-bottom: -5px;
`