import { useContext } from "react";
import { ModalActionType } from "../../context/action/modalAction";
import { ModalContext } from "../../context/modalContext";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import * as S from "./style";

function Auth (){
    const MContext:any = useContext(ModalContext);
    return (
        <S.BackgroundModal onClick={()=>MContext.dispatch({type: ModalActionType.IS_NOT_MODAL})}>
            <S.AuthBox onClick={(e)=>e.stopPropagation()}>
                <S.XBox>
                    <S.XSign onClick={()=>MContext.dispatch({type: ModalActionType.IS_NOT_MODAL})}></S.XSign>
                </S.XBox>
                {MContext.state.isLogin&&<Login></Login>}
                {MContext.state.isSignUp&&<SignUp></SignUp>}
            </S.AuthBox>
        </S.BackgroundModal>
    )
}

export default Auth;