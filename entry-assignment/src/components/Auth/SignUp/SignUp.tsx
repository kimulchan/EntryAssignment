import { useContext, useState } from "react";
import * as s from "./style";
import user from "../../../utils/api/user";
import { AxiosError } from "axios";
import { ModalContext } from "../../../context/modalContext";
import { ModalActionType } from "../../../context/action/modalAction";

function SignUp (){
    const MContext:any= useContext(ModalContext);
    const [signupInfo,setSignupInfo] = useState({
        id:"",
        password:""
    })
    const changeInfo =(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setSignupInfo({
            ...signupInfo,
            [name]:value
        })
    }

    const submitInfo = ()=>{
        const {id,password}=signupInfo;
        user.sign(id,password).then(()=>{
            alert("회원가입에 성공하셨습니다!");
            MContext.dispatch({type:ModalActionType.IS_LOGIN_MODAL})
        }).catch((e:AxiosError<any>)=>{
            alert(e);
        })
    }
    return (
        <>
            <s.TextWrapper>회원가입</s.TextWrapper>
            <s.SignUpBox>
                <s.SignUpInput placeholder="아이디" name="id" onChange={changeInfo}></s.SignUpInput>
                <s.SignUpInput placeholder="비밀번호" name="password" onChange={changeInfo}></s.SignUpInput>
                <s.SignUpButton onClick={submitInfo}>회원가입</s.SignUpButton>
            </s.SignUpBox>
        </>
    )
}

export default SignUp;