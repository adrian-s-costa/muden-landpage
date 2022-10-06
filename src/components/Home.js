import styled from "styled-components";
import Button from "./Button";

export default function Home(){
    return(
        <MainDiv>
            <ArticleDiv>
                <SectionDiv className="sectionDiv">
                    <h1>A empresa de mudanças que <span>cuida de tudo</span></h1>
                    <h2>Feita para pessoas que entendem que o tempo é precioso! Que precisamos investi-lo com o que importa. <br/> Com quem realmente importa!</h2>
                    <Button>Cadastre-se</Button>
                </SectionDiv>
                <AsideDiv className="asideDiv">
                    <Img src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1665085934/muden/folhas-diversas-1642109435159_v2_1920x1080_gxbuvq.jpg" className="imgAside"></Img>
                </AsideDiv>
            </ArticleDiv>
        </MainDiv>
    )
}

const MainDiv = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
`

const ArticleDiv = styled.article`
    display: flex;
    width: 100%;
    max-width: 975px;
    margin: 20px 0px 0px 0px;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width: 975px) {
        
        flex-direction: column;
        
        .sectionDiv{
            width: 90%;
            margin-bottom: 15px;
        }

        .asideDiv{
            width: 90%;
        }
        
        h1{
            width: 100%;
        }

        .imgAside{
            width: 100%;
        }

        h2{
            width: 100% !important;
        }
    }

`
const SectionDiv = styled.section`
    display: flex;
    flex-direction: column;
    width: 340px;
    font-weight: 400;
    line-height: 42px;
    font-size: 32px;
    h1{
        span{
            font-weight: bold;
        }
    }

    h2{
        margin: 30px 0px 25px 0px;
        font-size: 16px;
        line-height: 26px;
        width: 451px;
    }
`
const AsideDiv = styled.aside`
    display: flex;
`
const Img = styled.img`
    width: 418px;
    height: 350px;
    border-radius: 20px;
`
