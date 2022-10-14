import styled from "styled-components";

export default function Button(props){
    return(
        <Btn width={props.width} color={props.color} colorFont={props.colorFont} type={props.type} marginTop={props.marginTop}>{props.children}</Btn>
    )
}

const Btn = styled.button`
    border-radius: 40px;
    width: ${(props) => props.width};
    padding: 0px 10px;
    height: auto;
    min-height: 38px;
    background-color: ${(props) => props.color};
    border-width: 0px;
    color: ${(props) => props.colorFont};
    font-weight: bold;
    font-size: 20px;
    margin-top: ${(props) => props.marginTop};;

    :hover{
        cursor: pointer;
        transition: 0.5s;
        color: ${(props) => props.colorFont};
        background-color: #1f2928;
    }
`