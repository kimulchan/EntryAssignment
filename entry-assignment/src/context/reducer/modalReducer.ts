import { ModalActionType, setIsLogin, setIsNotModal, setIsSignUp } from "../action/modalAction";

interface StateType{
    isLogin:boolean,
    isSignUp:boolean
}

type TypeAction = ReturnType<typeof setIsLogin> | ReturnType<typeof setIsSignUp> | ReturnType <typeof setIsNotModal>


function modalReducer (state:StateType,action:TypeAction){
    switch (action.type) {
        case ModalActionType.IS_LOGIN_MODAL:
            return {
                isLogin:true,
                isSignUp:false
            }
        case ModalActionType.IS_SIGNUP_MODAL:
            return {
                isLogin:false,
                isSignUp:true
            }

        case ModalActionType.IS_NOT_MODAL:
            return {
                isLogin:false,
                isSignUp:false
            }
        default:
            return state;
    }
}

export default modalReducer;