import jwtDecode from "jwt-decode";

interface Token {
    exp: number
    iat: number
    sub: string
}

export const getTokenData= ()=>{
    if(!localStorage.accessToken){
        return {
            exp:null,
            iat:null,
            sub:null
        };
    }
    const data:Token= jwtDecode(localStorage.accessToken);
    return data;
}

export const getUserName = ()=>{
    if(getTokenData().sub===null){
        return null;
    }
    const UserName:any = getTokenData().sub;
    return UserName;
}