import styled from "styled-components";
import Button from "./Button";
import Scroll from "react-scroll";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header(){

    const navigate = useNavigate();

    let [visu, setVisu] = useState(1);

    function toggle(){
        setVisu(visu * -1)
    }

    function scrollTop(nav){
        window.scrollTo({top: 0, behavior: 'smooth'});
        navigate(nav);
    }

    return(
        <Head>
            <div className="headerDiv">
                <ImgLogo src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1672785402/muden/muden-logo-principal-branco_mrbzit_oblp0y.png" width={171} height={40} onClick={()=>{scrollTop("/")}}></ImgLogo>
                <LinkHead className="header">
                    <Links>
                        <a href="http://muden-landpage.vercel.app/" style={{textDecoration: "none"}}>
                            <div className="link">Sobre nós</div>
                        </a>
                        <a href="http://muden-landpage.vercel.app/#servicos" style={{textDecoration: "none"}}>
                            <div className="link">Serviços</div>
                        </a>
                        <a href="http://muden-landpage.vercel.app/#contato" style={{textDecoration: "none"}}>
                            <div className="link">Contato</div>
                        </a>
                        <a href="http://muden-landpage.vercel.app/#depoimentos" style={{textDecoration: "none"}}>
                            <div className="link">Depoimentos</div>
                        </a>
                        <a href="http://muden-landpage.vercel.app/#faq" style={{textDecoration: "none"}}>
                            <div className="link">FAQ</div>
                        </a>
                    </Links>
                    <div className="btn"><Button width={"200px"} fontSize={"16px"} color={"#04b891"} colorFont={"white"} set={()=>{scrollTop("/services")}}>Seja um parceiro</Button></div>
                </LinkHead>
                <div className="icon" onClick={()=>{toggle()}}>
                    <ion-icon name="menu-outline"></ion-icon>
                </div>
                <div className={`teste ${visu == 1 ? "displayNone" : "displayShow"}`}>
                    <div className="displayNone linksList">
                        <a className="divLink" style={{textDecoration: "inherit", color: "white"}} onClick={()=>{toggle();scrollTop("/", 0)}}>
                            <ion-icon name="storefront-outline"></ion-icon>
                            <span className="linkSide">Sobre nós</span>
                        </a>
                        <a className="divLink" href="http://muden-landpage.vercel.app/#servicos" style={{textDecoration: "inherit", color: "white"}} onClick={()=>{toggle()}}>
                            <ion-icon name="clipboard-outline"></ion-icon>
                            <span className="linkSide">Serviços</span>
                        </a>
                        <a className="divLink" href="http://muden-landpage.vercel.app/#contato" style={{textDecoration: "inherit", color: "white"}} onClick={()=>{toggle()}}>
                            <ion-icon name="chatbox-outline"></ion-icon>
                            <span className="linkSide">Contato</span>
                        </a>
                        <a className="divLink" href="http://muden-landpage.vercel.app/#depoimentos" style={{textDecoration: "inherit", color: "white"}} onClick={()=>{toggle()}}>
                            <ion-icon name="person-outline"></ion-icon>
                            <span className="linkSide">Depoimentos</span>
                        </a>
                        <a className="divLink" href="http://muden-landpage.vercel.app/#faq" style={{textDecoration: "inherit", color: "white"}} onClick={()=>{toggle()}}>
                            <ion-icon name="alert-outline"></ion-icon>
                            <span className="linkSide">FAQ</span>
                        </a>
                        <Link className="divLink" onClick={()=>{scrollTop("/services");toggle()}}>
                            <ion-icon name="people-outline"></ion-icon>
                            <span className="linkSide">Seja um parceiro</span>
                        </Link>
                    </div>
                </div>
                <div className={`teste2 ${visu == 1 ? "displayNone" : "displayShow"}`} onClick={()=>{toggle()}}></div>
            </div>
        </Head>
    ) 
}

const LinkHead = styled.div`
    display: flex;
    font-weight: 300;
    font-size: 20px;
    position: relative;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    margin-left: 30px;
`
const Links = styled.div`
    display: flex;
    width: auto;
`

const Head = styled.header`
    position: fixed;
    width: 100%;
    height: 80px;
    box-shadow: 0 0 3px 0 black;
    display: flex;
    align-items: center;
    background-color: #202c2c;
    justify-content: center;
    z-index: 10;

    .headerDiv{
        display: flex;
        height: 100%;
        align-items: center;
        width: 100%;
        max-width: 975px;
        justify-content: space-between;
    }

    @media (max-width: 975px) {

        .linksList{
            margin-top: 70px;
            padding: 0px 0px 0px 20px;
            font-size: 30px;
            gap: 20px;
            width: 100%;
            height: 100%;
            color: white;
            display: flex !important;
            flex-direction: column;

            div, .divLink{
                display: flex;
                align-items: center;
                gap: 10px;
                cursor: pointer;

                :hover{
                    transition: 0.5s !important;
                    color: #202c2c !important;
                }
            }
        }
    }

    .icon, .displayNone{
        display: none;
    }

    .btn{
        display: flex;
        align-items: center;
        height: 100%;
        font-size: 20px !important;
        margin-left: 10px;
    }

    .link{
        display: flex;
        align-items: center;
        cursor: pointer;
        height: 100%;
        padding: 0px 15px;
        width: auto;
        font-size: 15px;
        color: white;
        font-weight: bold;
        :hover{
            transition: 0.5s;
            background-image: linear-gradient(#1f2928, #38bc94);
            cursor: pointer;
        }
    }

    @media (max-width: 975px) {
        
        justify-content: space-between;
        padding: 0px 10px;

        .header{
            display: none;
        }
        
        .icon{
            right: 10px;
            top: 25px;
            position: absolute;
            display: flex;
            font-size: 30px;
            color: white;
            cursor: pointer;
            z-index: 2;

            :hover{
                transition: 0.5s;
                color: #38bc94;
            }
        }

        .teste, .teste2{
            width: 70%;
            height: 100%;
            position: fixed;
            right: 0px;
            top: 0px;
            background-color: #38bc94;
            z-index: 1;
        }
    
        .teste2{
            background-color: rgb(31, 41, 40, 0.4);
            width: 100%;
            height: 100%;
            z-index: 0;
        }

        .displayShow{
            display: inherit !important;
        }

        .linkSide{
            font-size: 20px;
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
