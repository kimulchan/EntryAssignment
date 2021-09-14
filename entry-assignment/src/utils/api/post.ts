import request from "../axios/axios";
export default {
    getPost(){
        return request({
            url:"/post",
            method:"get"
        })
    },
    writePost(content:string,title:string){
        return request({
            url:"/post",
            method:"post",
            headers:{
                Authorization : `Bearer ${localStorage.accessToken}`
            },
            data:{
                conetent:content,
                title:title
            }
        })
    },
    getDetail(id:number){
        return request({
            url:`/post/${id}`,
            method:"get",
            
        })
    },
    updatePost(id:number,content:string,title:string){
        return request({
            url:`/post/${id}`,
            method:"patch",
            headers:{
                Authorization : `Bearer ${localStorage.accessToken}`
            },
            data:{
                content:content,
                title:title
            }
        })
    }
}