import styled from "styled-components";
import Button from "./Button";

export default function Home(){
    return(
        <MainDiv>
            <ArticleDiv>
                <SectionDiv className="sectionDiv">
                    <h1 className="bold">Oi, nós somos a muden</h1>
                    <h2>Feita para pessoas que entendem que o tempo é precioso! Que precisamos investi-lo com o que importa. <br/> Com quem realmente importa!</h2>
                    <Button>Cadastre-se</Button>
                </SectionDiv>
                <AsideDiv className="asideDiv">
                    <Img src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1665085934/muden/folhas-diversas-1642109435159_v2_1920x1080_gxbuvq.jpg" className="imgAside"></Img>
                </AsideDiv>
            </ArticleDiv>
            <ArticleDiv className="article2">
                <SectionDiv className="section2">
                    <h3>A empresa de mudanças que <span className="bold">cuida de tudo</span></h3>
                    <h2>Viemos para revolucionar o setor de mudanças e serviços com o uso da tecnologia. Oferecemos aos nossos clientes comodidade e otimização de tempo, realizando todo o processo de mudança.  Temos uma equipe especializada e experiente que cuida de todo o planejamento estratégico para que você não precise se preocupar com absolutamente nada. Recomece do seu jeito</h2>
                </SectionDiv>
            </ArticleDiv>
        </MainDiv>
    )
}

const MainDiv = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;

    .bold{
        font-weight: bold;
    }
`

const ArticleDiv = styled.article`
    display: flex;
    width: 100%;
    max-width: 975px;
    margin: 20px 0px 0px 0px;
    justify-content: space-between;
    align-items: center;

    .section2{
        width: 100%;
        margin: 80px 0px 0px 0px !important;

        h3{
            font-size: 24px;
        }

        h2{
            width: 100%;
            margin: 10px 0px 0px 0px;
        }
    }

    
    
    @media (max-width: 975px) {
        
        flex-direction: column;
        
        .sectionDiv{
            width: 90%;
            margin-bottom: 15px;
        }

        .section2{
            width: 90%;
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
    justify-content: center;

    h2{
        margin: 30px 0px 25px 0px;
        font-size: 16px;
        line-height: 26px;
        width: 451px;
    }
`
const AsideDiv = styled.aside`
    display: flex;
    align-items: center;
`
const Img = styled.img`
    width: 418px;
    height: 350px;
    border-radius: 20px;
`
