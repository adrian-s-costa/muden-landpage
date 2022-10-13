import styled from "styled-components";
import Button from "./Button";
import Card from "./Card";

export default function Home(){
    return(
        <MainDiv>
            <ArticleDiv>
                <SectionDiv className="sectionDiv">
                    <h1 className="bold">Olá, nós somos a <span className="greenMuden">Muden</span></h1>
                    <h2>Feita para pessoas que entendem que o tempo é precioso! Que precisamos investi-lo com o que importa. <br/> <span className="bold">Com quem realmente importa!</span></h2>
                    <Button width={"250px"} color={"#38bc94"} colorFont={"white"}>Solicitar orçamento</Button>
                </SectionDiv>
                <AsideDiv className="asideDiv">
                    <Img className="imgAside" src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1665678577/muden/drilldown_1_cvdv2w.png"></Img>
                </AsideDiv>
            </ArticleDiv>
            <ArticleDiv className="article2">
                <SectionDiv className="section2">
                    <h3 className="bold">A empresa de mudanças que <span className="greenMuden">cuida de tudo</span></h3>
                    <h2>Viemos para <span className="bold">revolucionar</span> o setor de mudanças e serviços com o uso da <span className="bold">tecnologia</span>. Oferecemos aos nossos clientes <span className="bold">comodidade e otimização</span> de tempo, realizando todo o processo de mudança.  Temos uma equipe <span className="bold">especializada e experiente</span> que cuida de todo o <span className="bold">planejamento estratégico</span> para que você não precise se preocupar com absolutamente nada. <span className="bold greenMuden">Recomece do seu jeito</span></h2>
                </SectionDiv>
            </ArticleDiv>
            <ArticleDiv className="article2">
                <SectionDiv className="section3">
                    <Card color1={"#04b891"} color2={"#079a83"} cardTitle={"Carreto"} cardDesc={"Temos carretos de diversos tamanhos, que irão, além de transportar, também tomar todo o cuidado com os seus pertences."} img={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1665676717/muden/3d-render-fleet-delivery-vehicles_ucpkll.jpg"}></Card>
                    <Card color1={"#3fc966"} color2={"#3fb866"} cardTitle={"Montagem"} cardDesc={"Com os profissionais treinados e capacitados, montamos e desmontamos os seus móveis com o padrão de qualidade Muden, preservando a vida útil dos produtos."} img={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1665676863/muden/foreman-in-yellow-hardhat-holding-hammer-on-shoulder-and-toolbox-in-hand-dreamily-looking-in-camera-in-workshop_1_mrqleu.jpg"}></Card>
                    <Card color1={"#04ca8d"} color2={"#04ca8d"} cardTitle={"Organizer"} cardDesc={"Temos parceria com a melhor equipe de organizer que vão cuidar de cada detalhe da sua casa nova, deixando tudo muito bem arrumado para você e sua família"} img={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1665676868/muden/full-shot-woman-checking-wardrobe_1_l0ko8i.jpg"}></Card>
                    <Card color1={"#1f2928"} color2={"#1f3628"} cardTitle={"Limpeza"} cardDesc={"No final do dia da mudança a casa vira uma baderna. Nós temos uma equipe de limpeza especializada pronta para te atender e limpar cada detalhe de sua nova casa"} img={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1665677273/muden/drilldown_w8guml.jpg"}></Card>
                </SectionDiv>
            </ArticleDiv>
            <ArticleDiv className="article3 green">
                <SectionDiv className="section4">
                    <div className="title">
                        <h5>Veja alguns <span className="bold white">depoimentos</span> dos nossos clientes</h5>
                    </div>
                    <div className="depoDiv">
                        <div className="depo">
                            <div className="divBackNPic">
                                <div className="picBack"/>
                                <div className="picDiv"/>
                            </div>    
                            <div className="invCommaDiv">
                                <img className="invComma up" src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1665677679/muden/2022-10-13_12-14_g9nxzj.png"/>
                                <h6 className="text"> Jamais imaginei que uma mudança podia ser tão tranquila. Eu não precisei fazer absolutamente nada, eles cuidaram. Melhor empresa de mudanças que já vi!</h6>
                                <img className="invComma down" src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1665677749/muden/template_primary_hr8owj.png"/>
                            </div>
                        </div>
                    </div>
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
    padding-top: 120px;

    .bold{
        font-weight: bold;
        color: #1f2928;
    }

    .white{
        color: white;
    }

    .greenMuden{
        color: #38bc94;
        font-weight: bold;
    }

    .article3{
        width: 100%;
        max-width: none;
        background-color: #2db88f;
        display: flex;
        justify-content: center;
        background-image: linear-gradient(to right, #04b891 , #079a83);
    }
`

const ArticleDiv = styled.article`
    display: flex;
    width: 100%;
    max-width: 975px;
    margin: 20px 0px 0px 0px;
    justify-content: space-between;
    align-items: center;

    .sectionDiv{
        font-size: 40px;
    }

    .section2{
        width: 100%;
        margin-top: 20px;

        h3{
            width: 100%;
            max-width: 550px;
            font-size: 40px;
            font-weight: 400;
        }

        h2{
            width: 100%;
            margin: 10px 0px 0px 0px;
        }
    }

    .section3{
        margin-top: 20px;
        width: 100%;
        flex-direction: row;
        gap: 20px;
    }

    .section4{
        width: 100%;
        max-width: 975px;
        height: 500px;

        .title{
            color: white;
            width: 100%;
            max-width: 700px;
            font-size: 40px;
        }

        .depoDiv{
            margin-top: 35px;
            display: flex;
            justify-content: center;
            width: 100%;
        }

        .depo{
            border-radius: 60px;
            width: 680px;
            height: 250px;
            background-color: white;
            display: flex;
            align-items: center;
            gap: 30px;
            padding: 0px 30px;
            position: relative;

            .divBackNPic{
                position: relative;
            }

            .picDiv{
                background-size: cover;
                background-position: center;
                background-image: url(https://res.cloudinary.com/dmo7nzytn/image/upload/v1665679203/muden/portrait-of-young-latin-man-taking-a-selfie-while-standing-outdoors-on-the-street_1_rok4wf.jpg);
                width: 15vw;
                height: 15vw;
                max-height: 150px;
                max-width: 150px;
                border-radius: 100px;
                z-index: 4;
                position: inherit;
            }

            .picBack{
                background-color: #6e7473;
                width: 15vw;
                height: 15vw;
                max-height: 150px;
                max-width: 150px;
                border-radius: 100px;
                position: absolute;
                top: 0px;
                z-index: 3;
                top: 3px;
                left: 5px;
            }

            .text{
                font-size: min(2.5vw, 20px);
                max-width: 440px;
                line-height: 25px;
                font-style: italic;
                min-height: 100px;
            }

            .invComma{
                position: absolute;
            }
            
            .up{
                left: 0px;
                top: 0px;
            }

            .down{
                right: 0px;
                bottom: 0px;
            }

            .invCommaDiv{
                position: relative;
                padding: 45px 0px 45px 0px;
            }

        }
    }
    
    @media (max-width: 975px) {
        
        flex-direction: column;

        .down{
            right: 30px !important;
            bottom: 0px;
        }

        .text{
            width: auto !important;
        }

        .sectionDiv{
            width: 90%;
            margin-bottom: 25px;
        }

        .section2{
            width: 90%;
        }

        .section3{
            width: 90%;
            align-items: center;
            gap: 20px;
            flex-wrap: wrap;
        }

        .section4{
            width: 90%;
        }

        .asideDiv{
            width: 90%;
        }
        
        h1{
            width: 100%;
        }

        .imgAside{
            display: none;
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
    width: 450px;
    height: 450px;
`
