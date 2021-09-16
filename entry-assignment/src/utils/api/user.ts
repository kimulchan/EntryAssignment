import request from "../axios/axios";

export interface Auth{
    accessToken:string
}
export default {
    sign(id:string,password:string){
        return request({
            url:"/account",
            method:"post",
            data:{
                id:id,
                password:password
            }
        })
    },
    postAuth(password:string,userId:string){
        return request({
            url:"/auth",
            method:"post",
            data:{
                password:password,
                userId:userId
            }
        })
    },
    getMypage(){
        return request({
            url:"/mypage",
            method:"get",
            headers:{
                Authorization : `Bearer ${localStorage.accessToken}`
            }
        })
    }
}