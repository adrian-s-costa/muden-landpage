import styled from "styled-components";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";
import { FaFacebookF, FaTiktok, FaLinkedinIn, FaInstagram, FaWhatsapp} from "react-icons/fa";
import axios from "axios";
import { useState } from "react";
import { Element, Link } from 'react-scroll'
import Header from "./Header";
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate();

    function scrollTop(nav, px){
        navigate(nav);
        window.scrollTo({top: px, behavior: 'smooth'});
    }

    function whatsappMessage(){
        const cel = "5511987612652"
        let text = `Olá. Seja bem vindo a Muden. Nossos operadores estão disponíveis para te atender.`
        text = window.encodeURIComponent(text)
        window.open("https://api.whatsapp.com/send?phone=" + cel + "&text=" + text, "_blank");
    }

    function setData(event){
        event.preventDefault();
        console.log(contactData);
        axios.post("https://muden-backend.up.railway.app/sendemail", contactData)
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
                <ArticleDiv>
                    <SectionDiv className="sectionDiv">
                        <h1 className="bold">Olá, nós somos a <span className="greenMuden">Muden</span></h1>
                        <h2>Feita para pessoas que entendem o quanto o tempo é precioso! Invista seu tempo com o que realmente importa, <span className="bold">e com quem importa!!</span></h2>
                        <Link activeClass="active" className="test2" to="contato2" spy={true} smooth={true} duration={500} offset={-50}>
                            <Button width={"250px"} fontSize={"23px"} color={"#38bc94"} colorFont={"white"} marginTop={"15px"}>Quero me mudar!</Button>
                        </Link>
                    </SectionDiv>
                    <AsideDiv className="asideDiv">
                        <Img className="imgAside" src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1672785135/muden/template_primary_1_ctybyu.png"></Img>
                    </AsideDiv>
                </ArticleDiv>
                <ArticleDiv className="article2" id="sobre-nos">
                    <SectionDiv className="section2">
                        <h3 className="bold">A empresa de mudanças que <span className="greenMuden font29px">cuida de tudo</span></h3>
                        <h2>A muden é um serviço de mudanças que tem como objetivo transformar um momento cansativo e frustrante em algo simples e sem stress. Temos equipes especializadas e experientes que cuidam de todo o planejamento da mudança para que você não precise se preocupar com nada. Agora mudar não é mais um problema, <span className="bold greenMuden">recomece do seu jeito!</span></h2>
                        <div className="triangulo-para-baixo"></div>                
                    </SectionDiv>
                </ArticleDiv>
                <ArticleDiv className="article6" id="servicos">
                    <SectionDiv className="section2 servicos">
                        <h6>Serviços oferecidos:</h6>
                    </SectionDiv>
                    <SectionDiv className="section3">
                        <Card translate={"-230px"} cardDesc={"Temos carretos de diversos tamanhos, que irão, além de transportar, também tomar todo o cuidado com os seus pertences."} fontSize={"25px"} type={"left"} bgcolor={"white"} fontColor={"#38bc94"} color1={"#04b891"} color2={"#079a83"} cardTitle={"Carreto"} img={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1672758083/muden/caminhao-removebg-preview_rplocz_puatqz.png"}></Card>                    
                        <Card translate={"230px"}  cardDesc={"Temos parceria com a melhor equipe de organizer que vão cuidar de cada detalhe da sua casa nova, deixando tudo muito bem arrumado para você e sua família."} fontSize={"25px"} color1={"#04b891"} bgcolor={"#38bc94"} titleMarginRight={"30px"} fontColor={"white"} color2={"#079a83"} cardTitle={"Organizer"} img={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1672766565/muden/orga_wqrusq_1_feufsm.png"}></Card>             
                    </SectionDiv>
                    <SectionDiv className="section3">
                        <Card translate={"250px"} cardDesc={"No final do dia da mudança a casa vira uma baderna. Nós temos uma equipe de limpeza especializada pronta para te atender e limpar cada detalhe de sua nova casa."} fontSize={"25px"} color1={"#04b891"} bgcolor={"#38bc94"} fontColor={"white"} titleMarginRight={"30px"} color2={"#079a83"} cardTitle={"Faxina"}  img={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1672764818/muden/faxina-removebg-preview_ga3yoq.png"}></Card>                    
                        <Card translate={"-260px"} cardDesc={""} fontSize={"25px"} type={"left"} color1={"#04b891"} bgcolor={"white"} fontColor={"#38bc94"} color2={"#079a83"} cardTitle={"Instalação"}  img={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1672766184/muden/instalador-removebg-preview_tpnn2z.png"}></Card>             
                    </SectionDiv>
                    <SectionDiv className="section3">
                        <Card translate={"-250px"} cardDesc={"Com os profissionais treinados e capacitados, montamos e desmontamos os seus móveis com o padrão de qualidade Muden, preservando a vida útil dos produtos."} fontSize={"20px"} type={"left"} color1={"#04b891"} bgcolor={"white"} fontColor={"#38bc94"} color2={"#079a83"} cardTitle={"Desmontagem e montagem"} img={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1672766144/muden/ferramenta-removebg-preview_uedzvv.png"}></Card>                    
                        <Card translate={"250px"} cardDesc={""} fontSize={"20px"} color1={"#04b891"} bgcolor={"#38bc94"} fontColor={"white"} titleMarginRight={"30px"} color2={"#079a83"} cardTitle={"Embalagem"}  img={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1672766222/muden/emb-removebg-preview_lp9kcj.png"}></Card>             
                    </SectionDiv>
                </ArticleDiv>
                <ArticleDiv className="article7">
                    <TriangleDiv><div className="triangulo-para-baixo segundo"></div></TriangleDiv>
                    <SectionDiv className="section7">
                        <title className="motivos">Motivos para se mudar com a gente:</title>
                        <div className="iconsMotivos">
                            <div className="upIcons">
                                <div className="iconDiv">
                                    <img className="icon" src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1672771194/muden/2023-01-03_14-21_vstubs.png"/>
                                    <span className="iconDesc">Sua casa pronta em até 24 horas</span>    
                                </div>    
                                <div className="iconDiv">
                                    <img className="icon menor" src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1672771194/muden/2023-01-03_14-21_1_f2ggto.png"/>
                                    <span className="iconDesc">Amiga do Meio Ambiente</span>
                                </div>
                                <div className="iconDiv">
                                    <img className="icon menor" src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1672771193/muden/2023-01-03_14-21_2_xpcvxh.png"/>
                                    <span className="iconDesc">Mudança sem dor de cabeça</span>
                                </div>
                            </div>
                            <div className="downIcons">
                                <div className="iconDiv downLef">
                                    <img className="icon" src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1672771193/muden/2023-01-03_14-22_qb3apn.png"/>
                                    <span className="iconDesc">Cuidamos de todas as etapas de sua mudança</span>
                                </div>
                                <div className="iconDiv downRig">
                                    <img className="icon" src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1672771194/muden/2023-01-03_14-22_1_w9gjoz.png"/>
                                    <span className="iconDesc">Orçamento que cabe no seu bolso</span>
                                </div>
                            </div>
                        </div>
                    </SectionDiv>
                    <div className="triangulo-para-baixo quarto"></div>
                </ArticleDiv>
                    {/* <SectionDiv className="section4">
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
                                    <h6 className="text"> Jamais imaginei que uma mudança podia ser tão tranquila. Eu não precisei fazer abso- lutamente nada, eles cuidaram. Melhor empresa de mudanças que já vi!</h6>
                                    <img className="invComma down" src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1665677749/muden/template_primary_hr8owj.png"/>
                                </div>
                            </div>
                        </div>
                    </SectionDiv> */}
                <ArticleDiv className="article4" id="contato2">
                    <SectionDiv className="section8">
                        <Element className="section5">
                            <h3>Vamos fazer um <span className="bold">orçamento</span>?</h3>
                            <h6 className="budgetDesc">Preencha o formulário abaixo, nossa equipe já <span className="bold">entrará em contato</span> com você.</h6>
                            <form className="form" onSubmit={setData}>
                                <div className="formDiv">
                                    <Input label={"Nome e sobrenome"} placeholder={"Joana Alves"} type={"text"} height={"35px"} width={"400px"} set={(e) => setContactData({ ...contactData, name: e.target.value})} value={contactData.name}></Input>
                                    <Input label={"Telefone (WhatsApp)"} placeholder={"(xx) XXXXX-XXXX"} type={"tel"} height={"35px"} width={"400px"} set={(e) => setContactData({ ...contactData, tel: e.target.value})} value={contactData.tel}></Input>
                                    <Input label={"Email"} placeholder={"exemplo@empresa.com"} type={"email"} height={"35px"} width={"400px"} set={(e) => setContactData({ ...contactData, email: e.target.value})} value={contactData.email}></Input>
                                    <div className="dropdown">
                                        <label for="days" className="dropLabel">Quando pretende se mudar?</label>
                                        <select name="days" id="days" required={true} className="dropInput" onChange={(e)=>setContactData({ ...contactData, date: e.target.value})} value={contactData.date}>
                                            <option value="" disabled selected>Escolha uma opção</option>
                                            <option value="dentro de 30 dias">Sim, nos próximos 30 dias</option>
                                            <option value="dentro de 60 dias">Sim, nos próximos 60 dias</option>
                                            <option value="dentro de 90 dias">Sim, nos próximos 90 dias</option>
                                            <option value="posteriormente">Pretendo me mudar posteriormente</option>
                                        </select>
                                    </div>
                                    <Button fontSize={"18px"} width={"100px"} color={"#38bc94"} colorFont={"white"} type={"submit"} marginTop={"20px"} set={() => setContactData({ ...contactData, type: "budget"})}>Enviar</Button>
                                </div>
                            </form>
                        </Element>
                        <img className="formTruck displayNoneMedia" src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1672774011/muden/2023-01-03_15-23_phicz6.png"/>
                    </SectionDiv>
                    <div className="triangulo-para-baixo terceiro"></div>
                </ArticleDiv>
                <ArticleDiv className="article8"  id="depoimentos">
                    <SectionDiv className="section9">
                        <h3>Veja alguns depoimentos dos <strong className="bold">nossos clientes:</strong></h3>
                        <div className="depoimentoDiv">
                            <div>
                                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <div className="depDiv">
                                                <img className="aspasCima" src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1665677679/muden/2022-10-13_12-14_g9nxzj.png"></img>
                                                <h6 className="depoimento">Jamais imaginei que uma mudança podia ser tão tranquila. Eu não precisei fazer absolutamente nada, eles cuidaram. Melhor empresa de mudanças que já vi!</h6>
                                                <div className="aspaDiv">
                                                    <img className="aspasBaixo" src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1665677749/muden/template_primary_hr8owj.png"></img>                                           
                                                </div>
                                            </div>
                                            <h6 className="cliente">-Martha Oliveira</h6>
                                        </div>
                                        <div class="carousel-item">
                                            <div className="depDiv">
                                                <img className="aspasCima" src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1665677679/muden/2022-10-13_12-14_g9nxzj.png"></img>
                                                <h6 className="depoimento">Jamais imaginei que uma mudança podia ser tão tranquila. Eu não precisei fazer absolutamente nada, eles cuidaram. Melhor empresa de mudanças que já vi!</h6>
                                                <div className="aspaDiv">
                                                    <img className="aspasBaixo" src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1665677749/muden/template_primary_hr8owj.png"></img>                                           
                                                </div>
                                            </div>
                                            <h6 className="cliente">-Martha Oliveira</h6>
                                        </div>
                                        <div class="carousel-item">
                                            <div className="depDiv">
                                                <img className="aspasCima" src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1665677679/muden/2022-10-13_12-14_g9nxzj.png"></img>
                                                <h6 className="depoimento">Jamais imaginei que uma mudança podia ser tão tranquila. Eu não precisei fazer absolutamente nada, eles cuidaram. Melhor empresa de mudanças que já vi!</h6>
                                                <div className="aspaDiv">
                                                    <img className="aspasBaixo" src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1665677749/muden/template_primary_hr8owj.png"></img>                                           
                                                </div>
                                            </div>
                                            <h6 className="cliente">-Martha Oliveira</h6>
                                        </div>
                                    </div>
                                    <div className="carouselIconArrow">
                                        <ion-icon name="chevron-back-outline" href="#carouselExampleControls" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon border border-primary" aria-hidden="true"></span>
                                            <span class="sr-only">Anterior</span>
                                        </ion-icon>
                                    </div>
                                    <div className="carouselIconArrowNext">
                                        <ion-icon name="chevron-forward-outline" href="#carouselExampleControls" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon border border-primary" aria-hidden="true"></span>
                                            <span class="sr-only">Próximo</span>
                                        </ion-icon>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SectionDiv>
                </ArticleDiv>
                <ArticleDiv className="article5" id="faq">
                    <Element className="section6">
                        <h6 className="faq">FAQ</h6>
                        <div className="allFaq">
                            <div className="faqColumn">
                                <div className="faqBlock">
                                    <h6 className="faqTitle">Como realizar um orçamento?</h6> <br/>
                                    <h6 className="faqDesc">Basta clicar no botão “Quero me mudar”, e preencher seus dados, entraremos em contato com você via Whatsapp em até 12 horas, nosso processo de orçamento é bem rápido, só precisaremos de algumas informações que nossos atendentes irão solicitar, como origem e destino da mudança, o tamanho da residência, quantos cômodos, e quais serão os móveis que precisam do serviço de montagem, após isso o resto é conosco.</h6>
                                    <br/>
                                </div>
                                <div className="faqBlock">
                                    <h6 className="faqTitle">Posso contratar apenas um dos serviços?</h6><br/>
                                    <h6 className="faqDesc">Claro que sim, aqui você pode personalizar e deixar a sua mudança composta da forma que preferir, escolhendo qualquer serviço de forma isolada, basta sinalizar no momento da realização do orçamento.</h6>
                                    <br/>                            
                                </div>
                                <div className="faqBlock">
                                    <h6 className="faqTitle">Como efetuar o cancelamento?</h6><br/>
                                    <h6 className="faqDesc">O cancelamento deve ser feito até 12 horas antes do dia e horário agendado para a mudança, cancelando no prazo, nenhuma taxa será cobrada e o valor será reembolsado em até 72 horas.</h6>
                                    <br/>
                                </div>
                            </div>
                            <div className="faqColumn">
                                <div className="faqBlock">
                                    <h6 className="faqTitle">Recebi o orçamento e agendei minha mudança, e agora!?</h6><br/>
                                    <h6 className="faqDesc">Agora chegamos na etapa de realizar o pagamento no método escolhido até 12 horas antes do dia e horário que sua mudança foi agendada, após isso é só esperar o dia chegar e estaremos no local, com toda nossa equipe para entregar uma mudança tranquila e sem estresse.</h6>
                                    <br/>
                                </div>
                                <div className="faqBlock">
                                    <h6 className="faqTitle">Posso parcelar o valor da minha mudança?</h6><br/>
                                    <h6 className="faqDesc">Sim, você pode parcelar a sua mudança no crédito em até 12x sem juros.</h6>
                                    <br/>
                                </div>
                                <div className="faqBlock">
                                    <h6 className="faqTitle">Devo fazer alguma coisa durante o processo de mudança?</h6><br/>
                                    <h6 className="faqDesc">Nossa equipe cuida de tudo, a única coisa que você precisará fazer é relaxar e aproveitar seu dia, é impor- tante que fique atento ao celular caso saia da residência, para que nossa equipe consiga tirar dúvi- das simples como, por exemplo: “Em que parede você prefere que o guarda-roupa seja montado”.</h6>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        {/* <div className="formEmail">
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
                        </div> */}
                        <img src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1672780668/muden/muden_simbolo_branco-03_uukgpk_1_2_qvn3q1.png" className="backMuden"></img>
                    </Element>
                </ArticleDiv>
                <Footer className="footer" id="contato">
                    <div className="footerDiv">
                        <ImgLogo src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1665060092/muden/muden-logo-principal-branco_mrbzit.webp" width={170} height={41} onClick={()=>{scrollTop("/", 0)}}></ImgLogo>
                        <div className="footerIconsDiv">
                            <FaTiktok className="footerIcon"/>
                            <FaInstagram className="footerIcon" onClick={()=>{window.open("https://instagram.com/mudenoficial?igshid=MDM4ZDc5MmU=")}}/>
                            <FaWhatsapp className="footerIcon" onClick={()=>{whatsappMessage()}}/>
                            <FaLinkedinIn className="footerIcon"/>
                        </div> 
                    </div>        
                </Footer>

                <PopUp className={`${sent ? "" : "displayNone"}`}> 
                    Mensagem enviada com sucesso! ✅
                    <button className="popUpBtn" width={"10px"} height={"0px"} onClick={()=>{closePopUp()}}>x</button>
                </PopUp>

            </MainDiv>
        </>
    )
}

const TriangleDiv = styled.div`
    width: 100%;
    height: 20px;
    background-color: #2cb58e;
    position: relative;
    .segundo{
        border-top: 25px solid #2cb58e !important;
    }
`

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

    .font29px{
        @media (max-width: 975px) {
            font-size: 29px !important;   
        }
    }

    .article6{
        width: 100%;
        max-width: none !important;
        background-color: #202c2c;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: auto;
        min-height: 600px;

        @media (max-width: 975px) {
            padding-bottom: 50px;
        }
    }

    .article2{
        position: relative;
    }
    
    .article3, .article4, .article5, .article7{
        width: 100%;
        max-width: none;
        background-color: #2db88f;
        display: flex;
        justify-content: center;
        background-image: linear-gradient(to right, #04b891 , #079a83);
    }

    .article7{
        flex-direction: column;
        background-image: none;
        background-color: white;
        position: relative;

        .quarto{
            z-index: 1;
            border-top: 25px solid white;
        }

        .section7{
            height: auto;
            width: 100%;
            max-width: 975px;
            min-height: 650px;
            background-color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .motivos{
                display: flex;
                justify-content: center;
                text-align: center;
                font-size: 40px;
                color: #38bc94;
                font-weight: bold;
                width: 500px;

                @media (max-width: 975px) {
                    width: 100% !important;
                    margin-top: 50px;
                    font-size: 22px;
                    line-height: 30px;
                }
            }
            .iconsMotivos{
                display: flex;
                flex-direction: column;
                width: 100%;
                margin-top: 30px;
                align-items: center;

                @media (max-width: 975px) {
                    margin-bottom: 50px;
                }

                .upIcons, .downIcons{
                    display: flex;
                    width: 80%;
                    justify-content: space-around;
                    
                    @media (max-width: 975px) {
                        flex-direction: row;
                        flex-wrap: wrap;
                        gap: 20px;
                    }
                
                    .iconDiv{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-top: 20px;

                        /* .downRig{
                            margin-right: 100px !important;
                        }

                        .downLef{
                            margin-left: 30px;
                        } */

                        .menor{
                            margin-top: -20px;
                            margin-left: 20px;
                            height: 120px !important;
                            width: 120px !important;

                            @media (max-width: 975px) {
                                margin-top: 0px;
                                height: 80px !important;
                                width: 80px !important;
                            }
                        }

                        .iconDesc{
                            margin-top: 10px;
                            font-size: 22px;
                            width: 220px;
                            line-height: 20px;
                            text-align: center;
                            @media (max-width: 975px) {
                                font-size: 13px;
                                width: 100px;
                            }
                        }
                        
                        .icon{
                            height: 100px;
                            width: 100px;
                            @media (max-width: 975px) {
                                height: 70px !important;
                                width: 70px !important;
                            }
                        }
                    }

                }
            }

            @media (max-width: 975px) {
                width: 90% !important;
            }
        }
    }

    .article4{
        margin-top: 0px;
        width: 100%;
        height: auto;
        min-height: 600px;
        background-image: linear-gradient(to right, #e2e2e2, #e2e2e2) !important;
        position: relative !important;
        .terceiro{
            z-index: 1;
            border-top: 25px solid #e2e2e2;
        }
        .section8{
            flex-direction: row;
            width: 100%;
            max-width: 975px;
            align-items: center;
            margin-top: 50px;

            @media (max-width: 975px){
                .displayNoneMedia{
                    display: none !important;
                }
            }

            .formTruck{
                margin-top: 50px;
                width: 450px;
                height: 350px;
            }
        }
    }
    .article5{
        margin-top: 0px;
        height: auto;
        min-height: 700px;
        background-image: linear-gradient(to right, #1f2928, #1f2928) !important;
        padding-bottom: 60px;
        display: flex;
        justify-content: center !important;
        z-index: 1;
        margin-bottom: 110px;
        border-bottom-left-radius: 200px;
        border-top-right-radius: 180px;
        position: relative;
    }

    .article8{
        width: 100%;
        max-width: none;
        display: flex;
        flex-direction: column;
        background-image: none;
        background-color: white !important;
        height: auto;
        min-height: 650px;
        position: relative;

        @media (max-width: 975px){
            min-height: 0px !important;
        }

        .section9{
            margin-top: 100px;
            display: flex;
            width: 100%;
            max-width: 975px;
            flex-direction: column;

            @media(max-width: 975px){
                margin-top: 50px;
            }

            .ionIcon{
                margin-top: 30px;
                font-size: 60px;
                color: #1f2928;
            }

            .depoimento{
                line-height: 30px;
                width: 550px;
                font-size: min(3vw, 25px);
                font-style: italic;

                @media (max-width: 975px){
                    width: 50vw;
                    padding-right: 8vw;
                }
            }

            .aspasCima, .aspasBaixo{
                width: 7vw;
                height: 6vw;
                max-height: 64px;
                max-width: 80px
            }

            .aspasCima{
                //margin-top: -4vh;
                margin-right: 2vw;
            }

            .aspasBaixo{
                margin-top: 60px;
                @media (max-width: 975px){
                    position: absolute;
                    right: 0px;
                    bottom: 0px;
                }
            }

            .depoimentoDiv{
                display: flex;
                margin-top: 110px;
                width: 100%;
                justify-content: center;
                
                .depDiv{
                    display: flex;
                    height: auto;
                    position: relative;
                }


                @media (max-width: 975px){
                    margin-top: 40px;
                }
            }
        
            .carouselHeigth{
                height: auto;
            }
            
            .carouselIconArrow, .carouselIconArrowNext{
                position: absolute;
                top: 0;
                bottom: 0;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-align: center;
                align-items: center;
                -ms-flex-pack: center;
                justify-content: center;
                text-align: center;
                cursor: pointer;

                @media (max-width:975px) {
                    top: 1px !important;
                }
            }

            .carouselIconArrow{
                left: -50px;
            }

            .carouselIconArrowNext{
                right: -50px !important;
            }

            h3{
                font-size: 40px;
                width: 600px;

                @media (max-width: 975px){
                    font-size: 20px;
                    line-height: 25px;
                    margin-bottom: 0px;
                }
            }
            
            .cliente{
                font-size: min(3vw, 25px);
                font-style: italic;
                text-align: end;
                margin-top: 9vh;
                margin-right: 7vw;

                @media (max-width: 975px){
                    margin-top: 20px;
                    margin-bottom: 50px;
                }
            }

            @media (max-width: 975px) {
            
                width: 90% !important;

                h3{
                    width: 100% !important;
                }
            
            }
        }
    }
`

const ArticleDiv = styled.article`
    display: flex;
    width: 100%;
    max-width: 975px;
    margin: 0px 0px 0px 0px;
    justify-content: space-between;
    align-items: center;

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

    .sectionDiv{
        font-size: 40px;

        .test2{
            @media (max-width: 975px) {
                display: flex;
                justify-content: center;
            }
        }
    }

    .servicos{
        margin-bottom: 40px !important;
        margin-top: 0px !important;
    }

    .section2{
        width: 100%;
        max-width: 975px;
        display: flex;
        justify-content: center;
        margin-top: 40px;
        margin-bottom: 100px;

        @media(max-width: 975px){
            margin-top: 30px;
            margin-bottom: 30px;
        }

        h3{
            width: 100%;
            max-width: 550px;
            font-size: 40px;
            font-weight: 400;
            @media (max-width: 975px){
                font-size: 30px;
                word-break: break-all;
            }
        }
        h2{
            width: 100%;
            font-size: 18px;
            //max-width: 850px;
            text-align: justify;
            margin: 10px 0px 0px 0px;
            @media (max-width: 975px){
                font-size: 15px;
            }
        }
        h6{
            width: 100%;
            font-size: 33px;
            color: white;
            text-align: center;
            font-weight: bold;

            @media (max-width: 975px) {
                margin-top: 50px;
                font-size: 25px;
            }
        }
        
    }
    .section3{
        margin-top: 10px;
        width: 100%;
        flex-direction: row;
        gap: 10px;

        @media (max-width: 975px) {
            gap: 10px !important;
        }
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
            @media (max-width: 975px) {
                font-size: 18px;
            }
        }
        h3{
            margin-top: 40px;
            width: 100%;
            font-size: 35px;
            font-weight: 400;
            line-height: 29px;
            @media (max-width: 975px) {
                font-size: 25px;
                margin-top: 10px;
                margin-bottom: 15px;
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
                    color: #6e7473;
                    @media (max-width: 975px) {
                        width: 100%;
                    }
                }
            }
        }
    }
    .section6{
        width: 100%;
        height: 100% !important;
        max-width: 975px;
        display: flex;
        flex-direction: column;
        padding-top: 30px;

        .faq{
            color: white;
            font-size: 40px;
            font-weight: bold;
            text-align: center;
            z-index: 10 !important;
            margin-bottom: 50px;

            @media (max-width: 975px) {
                margin-top: 50px;
            }
        }

        .allFaq{
            display: flex;
            z-index: 10;
            color: white;
            justify-content: space-between;
            text-align: justify;

            @media (max-width: 975px) {
                flex-direction: column;
                width: 100% !important;
                margin-bottom: 50px;
            }
        }

        .faqColumn{
            display: flex;
            flex-direction: column;
            width: 450px !important;

            @media (max-width: 975px) {
                width: 100% !important;
            }
        }


        .faqTitle{
            font-size: 24px;
            font-weight: bold;
            @media (max-width: 975px) {
                width: 100% !important;
                margin-bottom: 10px;
                text-align: start;
            }
        }

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
            width: 700px;
            height: 700px;
            position: absolute;
            right: 200px;
            top: 0px;
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
    height: 300px;
    background-color: #38bc94;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0px;
    z-index: 0;


    .footerDiv{
        height: 100%;
        width: 100%;
        max-width: 975px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        padding-bottom: 12px;
        gap: 5px;
        @media (max-width: 975px) {
            margin-top: 0px;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-end;
            padding-bottom: 10px;
            gap: 10px;
        }
    }
    .footerIconsDiv{
        display: flex;
        align-items: center;
        gap: 16px;
        @media (max-width: 975px) {
            width: 130px;
            justify-content: space-between;
        }
    }
    .footerIcon{
        color: white;
        font-size: 30px;
        cursor: pointer;
        margin-bottom: 7px;
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
    @media (max-width: 975px) {
        width: 130px;
        height: 31px;
    }
`