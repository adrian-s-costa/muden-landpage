import styled from "styled-components";

export default function Button(props){
    return(
        <Btn>{props.children}</Btn>
    )
}

const Btn = styled.button`
    border-radius: 40px;
    width: 100px;
    height: 38px;
    background-color: #38bc94;
    border-width: 0px;
    color: white;
    font-weight: bold;

    :hover{
        cursor: pointer;
        transition: 0.5s;
        color: #38bc94;
        background-color: white;
        border-width: 1px;
        border-color: #38bc94;
    }
`