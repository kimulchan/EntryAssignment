import styled from "styled-components";
import 패스263 from "../../assets/image/패스 263.png"
export const BackgroundModal = styled.div`
    position: absolute;
    width:100vw;
    height:100vh;
    background-color: rgba(54, 51, 51, 0.6);
    display:flex;
    justify-content: center;
    align-items:center;
`
export const AuthBox = styled.div`
    width: 490px;
    height: 70%;
    background-color: #ffffff;
    border-radius: 5px;

`
export const XBox = styled.div`
    margin-top:21px;
    margin-right:17px;
    height :11px;
    display: flex;
    justify-content: flex-end;
`

export const XSign = styled.div`
    width:10px;
    height:100%;
    border-color: transparent;
    background-image: url(${패스263});
`