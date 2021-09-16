import { AxiosError, AxiosResponse } from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { ModalActionType } from "../../../context/action/modalAction";
import { ModalContext } from "../../../context/modalContext";
import user, { Auth } from "../../../utils/api/user";
import * as s from "./style";

function Login (){
    const [isShow,setIsShow]=useState(false); 
    const MContext:any = useContext(ModalContext);
    const [loginInfo,setLoginInfo]=useState({
        password:"",
        userId:""
    })

    const changeInfo =(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {value,name} = e.target;
        setLoginInfo({
            ...loginInfo,
            [name]:value
        })
    }
    const onSubmit=()=>{
        const {password,userId}=loginInfo;
        user.postAuth(password,userId).then((res:AxiosResponse<Auth>)=>{
            console.log(res.data.accessToken);
            localStorage.accessToken=res.data.accessToken;
            alert("로그인 완료");
            MContext.dispatch({type:ModalActionType.IS_NOT_MODAL})
        }).catch((e:AxiosError<any>)=>{
            alert(e);
        })
    }

    return(
        <>
            <s.LoginTWrap>로그인</s.LoginTWrap>
            <s.LoginWrapper >
                <s.IdInput placeholder="아이디를 입력하세요" name="userId" onChange={changeInfo}></s.IdInput>
                <s.PasswordInputWrapper>
                    <input placeholder="비밀번호를 입력하세요" name="password" type={isShow?"text":"password"} onChange={changeInfo}></input>
                    <s.AdminEye onClick={()=>{setIsShow(!isShow)}} isShow={isShow} ></s.AdminEye>
                </s.PasswordInputWrapper>
                <s.goLogin onClick={()=>MContext.dispatch({type:ModalActionType.IS_SIGNUP_MODAL})}>회원이 아니신가요?</s.goLogin>
                <s.LoginBtn onClick={onSubmit}>로그인</s.LoginBtn>
            </s.LoginWrapper>

        </>
    );
}

export default Login;