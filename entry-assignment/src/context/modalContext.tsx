import { createContext, useContext, useReducer } from "react"
import modalReducer from "./reducer/modalReducer"

const initState = {
    isLogin:false,
    isSignUp:false
}
export const ModalContext:any= createContext(null);

interface ModalProviderProps {
    children: React.ReactNode
}
export function ModalProvider({children}: ModalProviderProps) {
    const [state,dispatch]:[any,any]=useReducer(modalReducer,initState);    
    return (
        <ModalContext.Provider value={{state:state,dispatch:dispatch}}>
                {children}
        </ModalContext.Provider>
    )
}

