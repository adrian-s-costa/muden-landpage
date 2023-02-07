import styled from "styled-components";

export default function Input(props){

    if(props.textarea){
        return(
            <InputDiv>
                <Label marginBot={props.marginBot} marginTop={props.marginTop}>{props.label}</Label>
                <TextArea type={props.type} pattern={props.pattern} bgcolor={props.bgcolor} placeholder={props.placeholder} required={true} height={props.height} width={props.width} onChange={props.set} value={props.value}></TextArea>
            </InputDiv>
        )
    }else{
        return(
            <InputDiv>
                <Label marginBot={props.marginBot} marginTop={props.marginTop}>{props.label}</Label>
                <InputForm type={props.type} pattern={props.pattern} bgcolor={props.bgcolor} placeholder={props.placeholder} required={true} height={props.height} width={props.width} onChange={props.set} value={props.value}></InputForm>
            </InputDiv>
        )
    }
}

const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`

const InputForm = styled.input`
    width: ${(props) => props.width};
    border-radius: 20px;
    border: none;
    height: ${(props) => props.height};
    padding: 0px 15px;
    font-size: 15px;
    font-style: italic;
    font-family: 'Poppins';
    background-color: ${(props) => props.bgcolor};

    :hover{
        border-width: 1px;
        border-color: #04b891;
        border-style: solid;
    }

    @media (max-width: 975px) {
        width: 100%;
    }
`

const TextArea = styled.textarea`
    width: ${(props) => props.width};
    border-radius: 20px;
    border: none;
    height: ${(props) => props.height};
    padding: 10px 15px;
    font-size: 15px;
    font-style: italic;
    font-family: 'Poppins';

    @media (max-width: 975px) {
        width: 100%;
    }
`

const Label = styled.span`
    font-size: 19px;
    color: #04b891;
    font-weight: bold;
    margin-top: ${(props) => props.marginTop};
    margin-bottom: ${(props) => props.marginBot};
    @media (max-width: 975px) {
        font-size: 15px;
    }
`