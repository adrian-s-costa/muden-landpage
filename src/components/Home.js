import styled from "styled-components";
import Button from "./Button";
import Card from "./Card";

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
                    <Img className="imgAside"></Img>
                </AsideDiv>
            </ArticleDiv>
            <ArticleDiv className="article2">
                <SectionDiv className="section2">
                    <h3>A empresa de mudanças que <span className="bold">cuida de tudo</span></h3>
                    <h2>Viemos para revolucionar o setor de mudanças e serviços com o uso da tecnologia. Oferecemos aos nossos clientes comodidade e otimização de tempo, realizando todo o processo de mudança.  Temos uma equipe especializada e experiente que cuida de todo o planejamento estratégico para que você não precise se preocupar com absolutamente nada. Recomece do seu jeito</h2>
                </SectionDiv>
            </ArticleDiv>
            <ArticleDiv className="article2">
                <SectionDiv className="section3">
                    <Card cardTitle={" Especialistas"} cardDesc={"Nós da Muden queremos o melhor sempre etc etc etc"} img={"https://uploads-ssl.webflow.com/62c2f32bb1aa5ddb4a4f925a/632cac5599ab4a22bdc707f7_IMG_5686.png"}></Card>
                    <Card cardTitle={" Especialistas"} cardDesc={"Nós da Muden queremos o melhor sempre etc etc etc"} img={"https://uploads-ssl.webflow.com/62c2f32bb1aa5ddb4a4f925a/632cac5599ab4a22bdc707f7_IMG_5686.png"}></Card>
                </SectionDiv>
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
    
    .section3{
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
    }
    
    @media (max-width: 975px) {
        
        flex-direction: column;
        
        .sectionDiv{
            width: 90%;
            margin-bottom: 25px;
        }

        .section2{
            width: 60%;
        }

        .section3{
            width: 60%;
            flex-direction: column;
            align-items: center;
            gap: 20px;
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
const Img = styled.div`
    width: 418px;
    height: 350px;
    border-radius: 20px;
    background-size: cover;
    background-position: center;
    background-image: url(https://res.cloudinary.com/dmo7nzytn/image/upload/v1665158471/muden/42de01_9858efe0349f4feea0873ffd2f738c2b_mv2_d0in2u.webp);
`
