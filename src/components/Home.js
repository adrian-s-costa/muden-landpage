import styled from "styled-components";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";
import { FaFacebookF, FaTiktok, FaLinkedinIn, FaInstagram, FaWhatsapp} from "react-icons/fa";
import axios from "axios";
import { useState } from "react";
import { Element, Link } from 'react-scroll'

export default function Home(){

    let [sent, setSent] = useState(false);

    const [contactData, setContactData] = useState({ 
        name: "",
        tel: "",
        email: "",
        date: "",
        originCity: "",
        originState: "",
        destinationCity: "",
        destinationState: "",
        message: "",
        type: ""
    });

    function whatsappMessage(){
        const cel = "5567992214009"
        let text = `Olá, gostaria de tirar algumas dúvidas`
        text = window.encodeURIComponent(text)
        window.open("https://api.whatsapp.com/send?phone=" + cel + "&text=" + text, "_blank");
    }

    function setData(event){
        event.preventDefault();
        console.log(contactData);
        axios.post("http://localhost:5000/sendemail", contactData)
        .then((response)=>{
            console.log(response.data)
            showPopUp();
        })
        .catch((response)=>{
            console.log(response)
        })
    }

    function showPopUp(){
        setSent(true);
        setTimeout(closePopUp, 5000);
    }

    function closePopUp(){
        setSent(false);
    }    

    return(
        <MainDiv>
            <ArticleDiv>
                <SectionDiv className="sectionDiv">
                    <h1 className="bold">Olá, nós somos a <span className="greenMuden">Muden</span></h1>
                    <h2>Feita para pessoas que entendem que o tempo é precioso! Que precisamos investi-lo com o que importa. <br/> <span className="bold">Com quem realmente importa!</span></h2>
                    <Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500} offset={-50}>
                        <Button width={"250px"} color={"#38bc94"} colorFont={"white"}>Cadastre-se</Button>
                    </Link>
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
            <Element name="test1">
                <ArticleDiv className="article2">
                    <SectionDiv className="section3">
                        <Card color1={"#04b891"} color2={"#079a83"} cardTitle={"Carreto"} cardDesc={"Temos carretos de diversos tamanhos, que irão, além de transportar, também tomar todo o cuidado com os seus pertences."} img={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1665676717/muden/3d-render-fleet-delivery-vehicles_ucpkll.jpg"}></Card>
                        <Card color1={"#3fc966"} color2={"#3fb866"} cardTitle={"Montagem"} cardDesc={"Com os profissionais treinados e capacitados, montamos e desmontamos os seus móveis com o padrão de qualidade Muden, preservando a vida útil dos produtos."} img={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1665676863/muden/foreman-in-yellow-hardhat-holding-hammer-on-shoulder-and-toolbox-in-hand-dreamily-looking-in-camera-in-workshop_1_mrqleu.jpg"}></Card>
                        <Card color1={"#04ca8d"} color2={"#04ca8d"} cardTitle={"Organizer"} cardDesc={"Temos parceria com a melhor equipe de organizer que vão cuidar de cada detalhe da sua casa nova, deixando tudo muito bem arrumado para você e sua família"} img={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1665676868/muden/full-shot-woman-checking-wardrobe_1_l0ko8i.jpg"}></Card>
                        <Card color1={"#1f2928"} color2={"#1f3628"} cardTitle={"Limpeza"} cardDesc={"No final do dia da mudança a casa vira uma baderna. Nós temos uma equipe de limpeza especializada pronta para te atender e limpar cada detalhe de sua nova casa"} img={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1665677273/muden/drilldown_w8guml.jpg"}></Card>
                    </SectionDiv>
                </ArticleDiv>
            </Element>
            <ArticleDiv className="article3">
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
            <ArticleDiv className="article4">
                <Element className="section5" name="test2">
                    <h3>Vamos fazer um <span className="bold">orçamento</span>?</h3>
                    <h6 className="budgetDesc">Preencha o formulário abaixo, nossa equipe já <span className="bold">entrará em contato</span> com você.</h6>
                    <form className="form" onSubmit={setData}>
                        <div className="formDiv">
                            <Input label={"Nome e sobrenome"} placeholder={"Joana Alves"} type={"text"} height={"35px"} width={"400px"} set={(e) => setContactData({ ...contactData, name: e.target.value})} value={contactData.name}></Input>
                            <Input label={"Telefone (WhatsApp)"} placeholder={"(xx) XXXXX-XXXX"} type={"tel"} height={"35px"} width={"400px"} set={(e) => setContactData({ ...contactData, tel: e.target.value})} value={contactData.tel}></Input>
                            <Input label={"Email"} placeholder={"exemplo@empresa.com"} type={"email"} height={"35px"} width={"400px"} set={(e) => setContactData({ ...contactData, email: e.target.value})} value={contactData.email}></Input>
                            <div className="dropdown">
                                <label for="days" className="dropLabel">Pretende se mudar?</label>
                                <select name="days" id="days" required={true} className="dropInput" onChange={(e)=>setContactData({ ...contactData, date: e.target.value})} value={contactData.date}>
                                    <option value="" disabled selected>Escolha uma opção</option>
                                    <option value="dentro de 30 dias">Sim, nos próximos 30 dias</option>
                                    <option value="dentro de 60 dias">Sim, nos próximos 60 dias</option>
                                    <option value="dentro de 90 dias">Sim, nos próximos 90 dias</option>
                                    <option value="Não pretende">Não vou me mudar, por hora</option>
                                </select>
                            </div>
                            <Button width={"100px"} color={"#38bc94"} colorFont={"white"} type={"submit"} marginTop={"20px"} set={() => setContactData({ ...contactData, type: "budget"})}>Enviar</Button>
                        </div>
                    </form>
                </Element>
            </ArticleDiv>
            <ArticleDiv className="article5">
                <Element className="section6" name="test3">
                    <div className="formEmail">
                        <h4 className="talkDirectTitle">Seja nosso parceiro</h4>
                        <h6 className="talkDirectTitle white">Vamos conversar!</h6>
                        <h6 className="talkDirectDesc white">Deixe aqui seu contato e interesse, para que possamos fechar uma parceria</h6>
                    </div>
                    <div className="formEmail flex" onSubmit={setData}>
                        <form>
                            <Input label={"Email"} placeholder={"exemplo@empresa.com"} type={"email"} height={"35px"} width={"400px"} set={(e) => setContactData({ ...contactData, email: e.target.value})} value={contactData.email}></Input>
                            <Input label={"Mensagem"} placeholder={"Escreva aqui a sua mensagem"} type={"text"} height={"250px"} width={"400px"} textarea={true} set={(e) => setContactData({ ...contactData, message: e.target.value})} value={contactData.message}></Input>
                            <Button width={"100px"} color={"#38bc94"} colorFont={"white"} type={"text"} marginTop={"20px"} set={() => setContactData({ ...contactData, type: "contact"})}>Enviar</Button>
                        </form>
                    </div>
                    <img src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1665676723/muden/Ativo_1_dpdkc1.png" className="backMuden"></img>
                </Element>
            </ArticleDiv>
            <Footer className="footer">
                <div className="footerDiv">
                    <ImgLogo src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1665060092/muden/muden-logo-principal-branco_mrbzit.webp" width={170} height={41}></ImgLogo>
                    <div className="footerIconsDiv">
                        <FaFacebookF className="footerIcon"/>
                        <FaTiktok className="footerIcon"/>
                        <FaInstagram className="footerIcon"/>
                        <FaWhatsapp className="footerIcon"/>
                        <FaLinkedinIn className="footerIcon"/>
                    </div> 
                </div>  
                             
            </Footer>

            <PopUp className={`${sent ? "" : "displayNone"}`}> 
                Mensagem enviada com sucesso! ✅
                <button className="popUpBtn" width={"10px"} height={"0px"} onClick={()=>{closePopUp()}}>x</button>
            </PopUp>

        </MainDiv>
    )
}

const PopUp = styled.div`
    width: 280px;
    height: 140px;
    position: fixed;
    background-color: #38bc94;
    left: 10px;
    bottom: 10px;
    color: white;
    padding: 10px;
    border: 3px;
    border-color: white;
    border-radius: 10px;
    border-style: solid;
    z-index: 5;
    .popUpBtn{
        position: absolute;
        right: 10px;
        top: 7px;
        border-radius: 50px;
        border: none;
        background-color: white;
        color: black;
        :hover{
            transition: 1s;
            color:white;
            background-color: black;
        }
    }
`

const MainDiv = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 120px;
    position: relative;
    .displayNone{
        display: none !important;
    }
    .bold{
        font-weight: bold;
        color: #1f2928;
    }
    .white{
        color: white !important;
    }
    .greenMuden{
        color: #38bc94;
        font-weight: bold;
    }
    .article3, .article4, .article5{
        width: 100%;
        max-width: none;
        background-color: #2db88f;
        display: flex;
        justify-content: center;
        background-image: linear-gradient(to right, #04b891 , #079a83);
    }
    .article4{
        margin-top: 0px;
        width: 100%;
        background-image: linear-gradient(to right, #e2e2e2, #e2e2e2) !important;
    }
    .article5{
        margin-top: 0px;
        height: auto;
        background-image: linear-gradient(to right, #1f2928, #1f2928) !important;
        padding-bottom: 60px;
        display: flex;
        justify-content: center !important;
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
                font-size: min(3vw, 20px);
                max-width: 440px;
                line-height: 25px;
                font-style: italic;
            }
            .invComma{
                position: absolute;
                width: 5vw;
                height: 4vw;
                max-height: 46px;
                max-width: 62px;
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
                padding: min(5vw, 45px) 0px min(5vw, 45px) 0px;
                
            }
        }
    }
    .section5{
        height: auto;
        margin: 0px;
        width: 100%;
        max-width: 975px;
        justify-content: flex-start;
        font-weight: 400;
        line-height: 42px;
        font-size: 32px;
        h2{
            margin: 30px 0px 25px 0px;
            font-size: 16px;
            line-height: 26px;
            width: 451px;
        }
        .budgetDesc{
            font-size: 22px;
            max-width: 500px;
            line-height: normal;
            margin-top: 5px;
        }
        h3{
            margin-top: 40px;
            width: 100%;
            font-size: 40px;
            font-weight: 400;
        }
        h2{
            width: 100%;
            margin: 10px 0px 0px 0px;
        }
        .form{
            width: 100%;
            padding-bottom: 50px;
            display: flex;
            justify-content: flex-start;
            .dropdown{
                margin-top: 10px;
                display: flex;
                flex-direction: column;
                .dropLabel{
                    font-size: 19px;
                    color: #38bc94;
                    font-weight: bold;
                    margin-bottom: -5px;
                }
                .dropInput{
                    width: 400px;
                    border-radius: 20px;
                    border: none;
                    height: 35px;
                    padding: 0px 15px;
                    font-size: 15px;
                    font-style: italic;
                    font-family: 'Poppins';
                    background-color: white;
                    @media (max-width: 975px) {
                        width: 100%;
                    }
                }
            }
        }
    }
    .section6{
        width: 100%;
        max-width: 975px;
        padding-top: 50px;
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        font-weight: 400;
        line-height: 42px;
        font-size: 32px;
        justify-content: center;
        .talkDirectTitle{
            color: #38bc94;
            width: auto;
            font-weight: bold;
            font-size: 40px;
        }
        
        .talkDirectDesc{
            margin-top: -10px;
            font-size: 12px;
        }
        
        .backMuden{
            width: 500px;
            height: 500px;
            position: absolute;
            right: 0px;
            z-index: 0;
        }
        .formEmail{
            z-index: 1;
            position: inherit;
        }
        .flex{
            display: flex;
        }
        .whatsappBtn{
            position: absolute;
            right: 110px;
            top: 120px;
        }
    }
    
    @media (max-width: 975px) {
        
        flex-direction: column;
        .down{
            right: 30px !important;
            bottom: 0px;
        }
        .depo{
            height: auto !important;
            box-sizing: content-box !important;
            padding: 10px 25px !important;
        }
        .text{
            width: auto !important;
            line-height: 3vw !important;
        }
        .sectionDiv{
            width: 90%;
            margin-bottom: 25px;
        }
        .section2, .section4, .section5, .asideDiv{
            width: 90%;
        }
        .section3{
            width: 90%;
            align-items: center;
            gap: 20px;
            flex-wrap: wrap;
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
        .form{
            flex-direction: column;
        }
        .article5{
            width: 100% !important;
            align-items: center !important;
        }
        .section6{
            width: 90%;
        }
        .backMuden{
            width: 400px !important;
            height: 400px !important;
            position: absolute;
            right: 0px;
        }
        .arm{
           display: none;
        }
        .flex{
            flex-direction: column;
        }
        .talkDirectDesc{
            margin-top: 10px !important;
            line-height: normal;
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
const ImgArm = styled.img`
    position: absolute;
    width: 500px;
    height: 500px;
    bottom: -60px;
    right: 30px;
`
const Footer = styled.footer`
    width: 100%;
    height: 80px;
    background-color: #38bc94;
    display: flex;
    justify-content: center;
    .footerDiv{
        height: 100%;
        width: 100%;
        max-width: 975px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .footerIconsDiv{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .footerIcon{
        color: white;
        font-size: 40px;
        cursor: pointer;
    }
    @media (max-width: 975px) {
        .footer{
            width: 100% !important;
        }
        .footerDiv{
            width: 90% !important;
        }
        .footerIcon{
            font-size: 5vw;
        }
    }
`
const ImgLogo = styled.img`
    cursor: pointer;
`