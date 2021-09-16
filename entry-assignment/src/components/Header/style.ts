import styled from "styled-components";
import Vector from "../../assets/image/Vector.png"
export const HeaderDiv =styled.div`
    height: 55px;
    
`
export const HeaderWrapper = styled.header`
    z-index: 6;
    background-color: white;
    position: absolute;
    height:55px;
    width:100vw;
    padding: 0 320px;
    display:flex;
    justify-content: flex-end;
`

export const MenuWrapper = styled.div`
    margin:20px 0 10px 0;
    display:flex;
    align-items: center;
`
export const TextMenu = styled.div`
    font-size:13px;
    margin-left: 22px;
`

export const BtnMenu = styled.button`
    background-color: #386BEE;
    width:70px;
    height :25px;
    border-radius:20px;
    color:white;
    font-size: 11px;
    margin-left: 35px;

`
export const LoginImage = styled.div`
    width:70px;
    height :25px;
    display:flex;
    justify-content: center;
    align-items: center;
    & div{
        height: 17px;
        width:17px;
        background-image: url(${Vector});
    }
`