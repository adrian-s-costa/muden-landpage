import styled from "styled-components";

export default function Header(){
    return(
        <Head>
            <ImgLogo src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1665060568/muden/muden-logo-principal-branco_tfl6st.png" width={170} height={41}></ImgLogo>
            <LinkHead className="header">
                <div className="link">Central</div>
                <div className="link">Aplicativo</div>
                <div className="link">Contatos</div>
                <div className="link">Carreiras</div>
                <div className="link">Blog</div>
                <div><Btn>Eu quero</Btn></div>
            </LinkHead>
            <div className="icon"><ion-icon name="menu-outline"></ion-icon></div>
        </Head>
    ) 
    
}

const LinkHead = styled.div`
    display: flex;
    font-weight: 300;
    font-size: 15px;
    gap: 40px;

`
const Btn = styled.button`
    border-radius: 40px;
    width: 100px;
    height: 38px;
    background-color: #38bc94;
    border-width: 0px;
    color: white;

    :hover{
        cursor: pointer;
        transition: 0.5s;
        color: #38bc94;
        background-color: white;
        border-width: 1px;
        border-color: #38bc94;
    }
`

const Head = styled.div`
    width: 100%;
    height: 80px;
    box-shadow: 0 0 3px 0 silver;
    display: flex;
    align-items: center;
    padding: 0px 14vw;
    justify-content: space-between;
    position: relative;

    .icon{
        display: none;
    }

    .link{
        display: flex;
        align-items: center;
        cursor: pointer;
        
        :hover{
            cursor: pointer;
            transition: 0.5s;
            color: #38bc94;
        }
    }

    @media (max-width: 1021px) {
        padding: 0px 10vw;
        
        .header{
            display: none;
        }
        
        .icon{
            display: flex;
            
            font-size: 25px;
            color: #38bc94;
        }
    }

`
const ImgLogo = styled.img`
    margin-right: 110px;
`
