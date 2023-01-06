import styled from "styled-components";

export default function Card(props){
    if (props.type == "left"){
        return(
            <CardDiv color1={props.color1} color2={props.color2} img={props.img} bgcolor={props.bgcolor} fontColor={props.fontColor} titleMarginRight={props.titleMarginRight} fontSize={props.fontSize}>
                <div className="cardTextDiv">
                    <h5 className="cardTitle">{props.cardTitle}</h5>
                </div>
                <img className="cardImgDiv" src={props.img}/>
            </CardDiv>
        )
    }else{
        return(
            <CardDiv color1={props.color1} color2={props.color2} img={props.img} bgcolor={props.bgcolor} fontColor={props.fontColor} titleMarginRight={props.titleMarginRight} fontSize={props.fontSize}>
                <img className="cardImgDiv" src={props.img}/>
                <div className="cardTextDiv">
                    <h5 className="cardTitle">{props.cardTitle}</h5>
                </div>
            </CardDiv>
        )
    }
}

const CardDiv = styled.div`
    padding: 6px 0px;
    border-radius: 8px;
    width: 400px;
    height: 90px;
    display: flex;
    background-color: ${(props) => props.bgcolor};
    box-sizing: content-box;
    justify-content: space-between;
    align-items: center;
    
    :hover{
        .cardImgDiv{
            width: 1000px;
        }
    }

    .cardTitle{
        font-size: ${(props) => props.fontSize};
        line-height: 24px;
        color: ${(props) => props.fontColor};
        font-weight: bold;
        display: flex;
        width: 100%;
        margin-left: 40px;
        margin-right: ${(props) => props.titleMarginRight};
    }
    .cardImgDiv{
        height: 102px;
        width: auto;
        border-radius: 8px;
        background-size: cover;
        display: flex;
        align-items: center;
    }
    .cardTextDiv{
        display: flex;
        align-items: center;
    }
    .cardDesc{
        width: 95%;
        margin-top: 5px;
        font-size: 12px;
        line-height: 12px;
        color: #f0f0f0;
        text-align: center;
    }
`