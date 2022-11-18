import styled from "styled-components";

export default function Input(props){

    if(props.textarea){
        return(
            <InputDiv>
                <Label>{props.label}</Label>
                <TextArea type={props.type} placeholder={props.placeholder} required={true} height={props.height} width={props.width} onChange={props.set} value={props.value}></TextArea>
            </InputDiv>
        )
    }else{
        return(
            <InputDiv>
                <Label>{props.label}</Label>
                <InputForm type={props.type} placeholder={props.placeholder} required={true} height={props.height} width={props.width} onChange={props.set} value={props.value}></InputForm>
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
    color: #38bc94;
    font-weight: bold;
`