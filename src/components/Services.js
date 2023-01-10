import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import { FaFacebookF, FaTiktok, FaLinkedinIn, FaInstagram, FaWhatsapp} from "react-icons/fa";
import axios from "axios";
import { useState } from "react";
import { Element, Link } from 'react-scroll'
import Header from "./Header";

export default function Services(){

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
        servico: "",
        type: ""
    });

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
        <>
            <Header/>
            <MainDiv>    
                <ArticleDiv className="article4">
                    <Element className="section5" name="test2">
                        <h3><span className="bold">Prepare-se para aumentar o seu faturamento com a <span className="muden">Muden</span></span>, seja um parceiro e tenha mais ofertas de serviço.</h3>
                        <h6 className="budgetDesc">Faça seu cadastro: </h6>
                        <form className="form" onSubmit={setData}>
                            <div className="formDiv">
                                <Input marginBot={"5px"} bgcolor={"#ececec"} label={"Nome e sobrenome"} placeholder={"Joana Alves"} type={"text"} height={"35px"} width={"400px"} set={(e) => setContactData({ ...contactData, name: e.target.value})} value={contactData.name}></Input>
                                <Input marginBot={"5px"} bgcolor={"#ececec"} label={"Telefone para contato"} placeholder={"(xx) XXXXX-XXXX"} type={"tel"} height={"35px"} width={"400px"} set={(e) => setContactData({ ...contactData, tel: e.target.value})} value={contactData.tel}></Input>
                                <Input marginBot={"5px"} bgcolor={"#ececec"} label={"Email"} placeholder={"exemplo@empresa.com"} type={"email"} height={"35px"} width={"400px"} set={(e) => setContactData({ ...contactData, email: e.target.value})} value={contactData.email}></Input>
                                <Input marginBot={"5px"} bgcolor={"#ececec"} label={"Serviço prestado"} placeholder={"Montador"} type={"text"} height={"35px"} width={"400px"} set={(e)=>setContactData({ ...contactData, servico: e.target.value})} value={contactData.servico}></Input>
                                <Button width={"100px"} color={"#04b891"} colorFont={"white"} type={"submit"} marginTop={"20px"} set={() => setContactData({ ...contactData, type: "contact"})}>Enviar</Button>
                            </div>
                        </form>
                    </Element>
                    <img className="formTruck displayNone" src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1672948844/muden/colabo_d9xpdv.png"/>
                    <div className="triangulo-para-baixo terceiro"></div>
                </ArticleDiv>
                <ArticleDiv className="article2">
                    <SectionDiv className="section6">
                        <h5>Vantagens de ser um parceiro:</h5>
                        <div className="iconService">
                            <div className="iconDiv">
                                <img className="icon rocket" src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1672958537/muden/template_primary_4_wlp3zk.png"></img>
                                <h4 className="iconDesc">Aumente sua demanda de trabalho</h4>
                            </div>
                            <Bar className="displayNone"/>
                            <div className="iconDiv">
                                <img className="icon" src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1672958539/muden/template_primary_2_eaih8m.png"></img>
                                <h4 className="iconDesc">100% do valor de seu orçamento é seu</h4>
                            </div>
                            <Bar className="displayNone"/>
                            <div className="iconDiv">
                                <img className="icon" src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1672958538/muden/template_primary_3_l6hrjv.png"></img>
                                <h4 className="iconDesc">Recebe propostas direto em seu Whatsapp</h4>
                            </div>
                        </div>
                    </SectionDiv>
                    <div className="triangulo-para-baixo segundo"></div>
                </ArticleDiv>
                <ArticleDiv className="article5" id="section2">
                    <SectionDiv className="section9">
                        <div className="esp">
                            <div className="espDiv">
                                <h4 className="espTitle">Como funciona?</h4>
                                <h2 className="espDesc">Você efetua o cadastro e recebe propostas de serviço de acordo com a sua localidade, você só precisa avaliar e enviar o seu orça- mento caso se interesse.</h2>
                                <img src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1672962336/muden/template_primary_5_san4ue.png" className="iconBot"/>
                            </div>
                            <Bar className="displayNone"/>
                            <div className="espDiv">
                                <h4 className="espTitle">Quanto custa?</h4>
                                <h2 className="espDesc">Zero. Somos eficientes para você não ter que pagar tarifas.</h2>
                                <img src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1672962334/muden/template_primary_6_qbac05.png" className="preco"/>
                            </div>
                        </div>
                    </SectionDiv>
                </ArticleDiv>
                <Footer className="footer">
                    <div className="footerDiv">
                        <ImgLogo src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1665060092/muden/muden-logo-principal-branco_mrbzit.webp" width={170} height={41}></ImgLogo>
                        <div className="footerIconsDiv">
                            <FaTiktok className="footerIcon"/>
                            <FaInstagram className="footerIcon"/>
                            <FaWhatsapp className="footerIcon"/>
                            <FaLinkedinIn className="footerIcon"/>
                        </div> 
                    </div>        
                </Footer>
            </MainDiv>
        </>
    )
}

const Bar = styled.div`
    height: 300px;
    border-left-width: 0.5px;
    border-color: gray;
    border-style: solid;
`


const MainDiv = styled.main`
    
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 120px;
    position: relative;

    @media (max-width: 975px) {
        .displayNone{
            display: none !important;
        }
    }
    

    .bold{
        font-weight: bold;
    }
    .muden{
        color: #04b891;
    }

    .article2{
        background-color: #202c2c;
        width: 100%;
        height: auto;
        min-height: 600px;
        max-width: none;
        position: relative;

        .triangulo-para-baixo {
            width: 0; 
            height: 0; 
            border-left: 25px solid transparent;
            border-right: 25px solid transparent;
            border-top: 25px solid white;
            position: absolute;
            bottom: -25px;
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
        }

        .segundo{
            border-top: 25px solid #202c2c !important;
            position: absolute !important;
        }

        .section6{
            max-width: 975px;

            .rocket{
                margin-top: -18px;
            }

            .iconDiv{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .iconDesc{
                color: white;
                font-size: 20px;
                line-height: 20px;
                text-align: center;
                width: 270px;
                margin-top: 20px;
            }

            .iconService{
                display: flex;
                justify-content: space-evenly; 
                margin-top: 60px;

                @media (max-width: 975px) {
                    flex-direction: column;
                    gap: 40px;
                    margin-bottom: 50px;
                }
            }

            h5{
                color: white;
                text-align: center;
                font-weight: bold;
                margin-top: 30px;

                @media (max-width: 975px) {
                   width: 100%;
                }
            }
        }

        

    }

    .article5{

        .section9{
            
            width: 100%;
            height: auto;
            min-height: 600px;

            @media (max-width: 975px) {
                margin-top: 50px;
                width: 90% !important;
            }

            .esp{
                display: flex;
                justify-content: space-between;

                @media (max-width: 975px) {
                    flex-direction: column;
                    gap: 40px;
                    margin-bottom: 50px;
                    justify-content: none;
                }

                .espDiv{
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    .preco{
                        padding-top: 50px;
                    }

                    .espTitle{
                        text-align: left !important;
                        width: 100%;
                        color: #04b891;
                        font-size: 40px;
                        font-weight: bold;
                    }

                    .espDesc{
                        text-align: justify;
                        margin-top: 15px;
                        line-height: normal;
                        width: 400px;
                        @media (max-width: 975px) {
                            width: 100%
                        }
                    }

                    .iconBot{
                        width: 300px;
                        height: 100px;
                    }
                }
            }
        }
    }

    .article4{
        position: relative;

        .terceiro{
            border-top: 25px solid black !important;
            bottom: 0px !important;
            right: 0px !important;
        }
    }
`

const ArticleDiv = styled.article`
    display: flex;
    width: 100%;
    max-width: 975px;
    margin: 0px 0px 0px 0px;
    align-items: center;
    justify-content: center;

    .section5{
        height: auto;
        margin: 0px;
        width: 100%;
        max-width: 975px;
        justify-content: flex-start;
        font-weight: 400;
        position: relative;

        @media (max-width: 975px) {
            width: 90% !important;
        }

        h2{
            margin: 30px 0px 25px 0px;
            font-size: 16px;
            line-height: 26px;
            width: 451px;
            color: #202c2c;
        }
        .budgetDesc{
            font-size: 34px;
            margin-top: 50px;
            font-weight: bold;
            color: #04b891;
            margin-bottom: 20px;
        }

        h3{
            width: 90%;
            font-size: 34px;
            font-weight: 400;
            color: #202c2c;
            line-height: 40px;

            @media (max-width: 975px) {
                width: 100%;
            }
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

            @media (max-width: 975px) {
                width: 100% !important;
            }

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
                        width: 100% !important;
                    }
                }
            }
        }
    }

    .section8{
        flex-direction: row;
        width: 100%;
        max-width: 975px;
        align-items: center;
        margin-top: 50px;
    }

    .formTruck{
        margin-top: 50px;
        width: 600px;
        height: 550px;
        position: absolute;
        right: -30px;
        bottom: 0px;
    }
`

const SectionDiv = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 975px;
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