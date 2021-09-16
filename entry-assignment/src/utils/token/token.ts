import jwtDecode from "jwt-decode";

interface Token {
    exp: number
    iat: number
    sub: string
}

export const getTokenData= ()=>{
    if(!localStorage.accessToken){
        return "none";
    }
    const data:Token= jwtDecode(localStorage.accessToken);
    return data;
}

export const getUserName = ()=>{
    if(getTokenData()==="none"){
        return "none";
    }
    const UserName:any = getTokenData().sub;
    return UserName;
}