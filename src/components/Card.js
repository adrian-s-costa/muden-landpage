import styled from "styled-components";

export default function Card(props){
    return(
        <CardDiv color1={props.color1} color2={props.color2} img={props.img}>
            <div className="cardImgDiv"/>
            <div className="cardTextDiv">
                <h5 className="cardTitle">{props.cardTitle}</h5>
                <h6 className="cardDesc">{props.cardDesc}</h6>
            </div>
        </CardDiv>
    )
}

const CardDiv = styled.div`
    padding: 6px 6px;
    border-radius: 30px;
    width: 216px;
    height: 320px;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to right, ${(props) => props.color1}, ${(props) => props.color2});
    box-sizing: content-box;

    .cardTitle{
        font-size: 18px;
        line-height: 24px;
        margin-top: 10px;
        color: white;
        font-weight: bold;
        display: flex;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .cardImgDiv{
        height: 450px;
        background-image: url(${(props) => props.img});
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        background-color: #f0f0f0;
        border-radius: 25px 25px 0px 0px;
    }

    .cardTextDiv{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
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