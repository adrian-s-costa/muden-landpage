import styled from "styled-components";

export default function Button(props){
    return(
        <Btn width={props.width} height={props.height} color={props.color} colorFont={props.colorFont} type={props.type} marginTop={props.marginTop} onClick={props.set} fontSize={props.fontSize}>{props.children}</Btn>
    )
}

const Btn = styled.button`
    border-radius: 40px;
    width: ${(props) => props.width};
    padding: 0px 10px;
    height: ${(props) => props.height};
    min-height: 38px;
    background-color: ${(props) => props.color};
    border-width: 0px;
    color: ${(props) => props.colorFont};
    font-weight: bold;
    font-size: ${(props) => props.fontSize};;
    margin-top: ${(props) => props.marginTop};
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 975px){
        font-size: 15px;
    }

    :hover{
        cursor: pointer;
        transition: 0.5s;
        color: ${(props) => props.colorFont};
        background-color: #1f2928;
        border-color: #38bc94;
        border-width: 1px;
    }
`