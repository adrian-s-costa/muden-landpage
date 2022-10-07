import styled from "styled-components";

export default function Card(props){
    return(
        <CardDiv>
            <div className="cardImgDiv">
                <img src={props.img} className="imgCard"/>
            </div>
            <div className="cardTextDiv">
                <h5 className="cardTitle">{props.cardTitle}</h5>
                <h6 className="cardDesc">{props.cardDesc}</h6>
            </div>
        </CardDiv>
    )
}

const CardDiv = styled.div`
    
    padding: 18px 20px;
    border-radius: 15px;
    box-shadow: 0 -1px 9px 0 #f0f0f0;
    width: 380px;
    height: 132px;
    display: flex;
    box-sizing: content-box;
    

    .imgCard{
        width: 120px;
        height: 70px;
        margin-right: 15px;
    }

    .cardTitle{
        font-size: 20px;
        line-height: 24px;
        margin-top: 10px;
        color: #38bc94;
        font-weight: bold;
        display: flex;
    }

    .cardImgDiv{
        height: 100%;
        display: flex;
        align-items: center;
    }

    .cardTextDiv{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .cardDesc{
        margin-top: 12px;
        font-size: 16px;
        line-height: 24px;
    }
    
    @media (max-width: 975px) {
        
        flex-direction: column;
        align-items: center;
        width: 80%;
        height: auto;
        
    }
`