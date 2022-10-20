import styled from "styled-components";
import Button from "./Button";
import Scroll from "react-scroll";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { useState } from "react";

export default function Header(){

    let [visu, setVisu] = useState(1);

    function toggle(){
        setVisu(visu * -1)
    }

    var scroll = Scroll.animateScroll;
    
    // var scroller = Scroll.scroller;

    // const a = ()=>{
    //     scroller.scrollTo('myScrollToElement', {
    //         duration: 1500,
    //         delay: 100,
    //         smooth: true,
    //         containerId: 'teste',
    //         offset: 50
    //     })
    // }

    return(
        <Head>
            <div className="headerDiv">
                <ImgLogo src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1665060092/muden/muden-logo-principal-branco_mrbzit.webp" width={170} height={41} onClick={()=>{scroll.scrollToTop()}}></ImgLogo>
                <LinkHead className="header">
                    <Link activeClass="active" to="test1" spy={true} smooth={true} duration={500} offset={-280}>
                        <div className="link">Nossos serviços</div>
                    </Link>
                    <Link activeClass="active" to="test3" spy={true} smooth={true} duration={500} offset={-70}>
                        <div className="link">Fale conosco</div>
                    </Link>
                    <div className="btn"><Button width={"auto"} color={"white"} colorFont={"#38bc94"}>Agende sua mudança</Button></div>
                </LinkHead>
                <div className="icon" onClick={()=>{toggle()}}>
                    <ion-icon name="menu-outline"></ion-icon>
                </div>
                <div className={`teste ${visu == 1 ? "displayNone" : "displayShow"}`}>
                    <div className="displayNone linksList">
                        <Link className="divLink" activeClass="active" to="test1" spy={true} smooth={true} duration={500} offset={-360} onClick={()=>{toggle()}}>
                            <ion-icon name="storefront-outline"></ion-icon>
                            <span className="linkSide">Nossos serviços</span>
                        </Link>
                        <Link className="divLink" activeClass="active" to="test3" spy={true} smooth={true} duration={500} offset={-70} onClick={()=>{toggle()}}>
                            <ion-icon name="people-outline"></ion-icon>
                            <span className="linkSide">Fale conosco</span>
                        </Link>
                        <div>
                            <ion-icon name="calendar-number-outline"></ion-icon>
                            <span className="linkSide">Agende sua mudança</span>
                        </div>
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
    font-size: 15px;
    position: relative;
    height: 100%;
    width: auto;
`

const Head = styled.header`
    position: fixed;
    width: 100%;
    height: 80px;
    box-shadow: 0 0 3px 0 silver;
    display: flex;
    align-items: center;
    background-color: #38bc94;
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
                    transition: 0.5s;
                    color: black;
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
        font-size: 20px;
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
                color: black;
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
`
