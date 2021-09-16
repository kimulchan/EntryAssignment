export enum ModalActionType{
    IS_LOGIN_MODAL = "IS_LOGIN_MODAL",
    IS_SIGNUP_MODAL = "IS_SIGNUP_MODAL",
    IS_NOT_MODAL = "IS_NOT_MODAL"
}

export const setIsLogin = ()=>({
    type:ModalActionType.IS_LOGIN_MODAL
})

export const setIsSignUp = ()=>({
    type:ModalActionType.IS_SIGNUP_MODAL
})

export const setIsNotModal =()=>({
    type:ModalActionType.IS_NOT_MODAL
})