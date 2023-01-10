import styled from "styled-components";

export default function Card(props){
    if (props.type == "left"){
        return(
            <CardDiv color1={props.color1} color2={props.color2} img={props.img} bgcolor={props.bgcolor} fontColor={props.fontColor} titleMarginRight={props.titleMarginRight} fontSize={props.fontSize} translate={props.translate}>
                <div className="cardTextDiv">
                    <h5 className="cardTitle">{props.cardTitle}</h5>
                </div>
                <img className="cardImgDiv1" src={props.img}/>
                <h6 className="cardDesc" style={{color: "#04b891", right: "20px"}}>{props.cardDesc}</h6>
            </CardDiv>
        )
    }else{
        return(
            <CardDiv color1={props.color1} color2={props.color2} img={props.img} bgcolor={props.bgcolor} fontColor={props.fontColor} titleMarginRight={props.titleMarginRight} fontSize={props.fontSize} translate={props.translate}>
                <img className="cardImgDiv" src={props.img}/>
                <div className="cardTextDiv">
                    <h5 className="cardTitle">{props.cardTitle}</h5>
                </div>
                <h6 className="cardDesc" style={{color: "white", left: "20px"}}>{props.cardDesc}</h6>
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
    position: relative;

    :hover{
        
        .cardImgDiv, .cardImgDiv1{
            transition: transform 1.5s ease-in-out;
            transform: translateX(${(props) => props.translate});
        }
        

        @media (max-width: 975px){
            .cardImgDiv{
                transition: transform 1.5s ease-in-out !important;
                transform: translateX(200px) !important;
            }
            .cardImgDiv1{
                transition: transform 1.5s ease-in-out !important;
                transform: translateX(-200px) !important;
            }
        }

        .cardTitle{
            transition: 1.5s;
            opacity: 0;
        }

        .cardDesc{
            transition: 2s;
            opacity: 100;
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
        @media (max-width: 975px) {
            font-size: 20px !important;
        }
    }
    .cardImgDiv, .cardImgDiv1{
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
        font-weight: bold;
        position: absolute;
        width: 200px;
        margin-top: 5px;
        font-size: 12px;
        line-height: 12px;
        color: #f0f0f0;
        text-align: center;
        opacity: 0;

        @media (max-width: 975px) {
            font-size: 10px;
            width: 150px;
        }
    }
`