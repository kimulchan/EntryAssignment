import styled from "styled-components";
import adminDown from "../../../assets/image/어드민 로그인 눈 감은거.png"
import adminUp from "../../../assets/image/어드민 로그인 눈 뜬거.png";
export const LoginTWrap= styled.div`
    height:130px;
    width:100%;
    display:flex;
    justify-content: center;
    align-items:center;
    font-size: 24px;
`

export const LoginWrapper = styled.div`
    margin: 0 45px;
    width:auto;
    border-top: 1px solid #9a9191;
    padding:45px 60px;
    display: flex;
    flex-direction: column;
`
export const IdInput = styled.input`
    height: 45px;
    font-size: 12px;
    border: 1px solid black;
    padding: 15px;
    margin:15px 0;
`
export const PasswordInputWrapper = styled.div`
    height: 45px;
    font-size: 12px;
    border: 1px solid black;
    
    margin:15px 0;
    display: flex;
    justify-content: space-between;
    & input{
        padding: 15px;
        width: 100%;
        
    }
    & div{   
    }
`
export const AdminEye = styled.div<{isShow:boolean}>`
    width :20px;
    height :16px;
    background-size: contain;
    background-image: url(${(prop)=>prop.isShow?adminUp:adminDown});
    background-repeat: no-repeat;
    display: flex;
    align-self: center;
    justify-content: flex-end;
    margin-right: 15px; 
`
export const goLogin = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
    color: #5F5F5F;
    margin-bottom: 30px;
    

`
export const LoginBtn = styled.button`
    width: 200px;
    height:36px;
    background-color: black;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    margin: auto;
    color:white
`