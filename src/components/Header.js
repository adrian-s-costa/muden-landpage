import styled from "styled-components";
import Button from "./Button";
import Scroll from "react-scroll";

export default function Header(){
    
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
            <ImgLogo src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1665060092/muden/muden-logo-principal-branco_mrbzit.webp" width={170} height={41}></ImgLogo>
            <LinkHead className="header">
                <div className="link">Nossos serviços</div>
                <div className="link">Fale conosco</div>
                <div className="btn"><Button width={"auto"} color={"white"} colorFont={"#38bc94"}>Agende sua mudança</Button></div>
            </LinkHead>
            <div className="icon"><ion-icon name="menu-outline"></ion-icon></div>
        </Head>
    ) 
}

const LinkHead = styled.div`
    display: flex;
    font-weight: 300;
    font-size: 15px;
    position: relative;
    height: 100%;
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

    .icon{
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
            z-index: 1;
            right: 10px;
            top: 25px;
            position: absolute;
            display: flex;
            font-size: 30px;
            color: white;
        }
    }

`
const ImgLogo = styled.img`
    margin-right: 345px;
    cursor: pointer;
`
