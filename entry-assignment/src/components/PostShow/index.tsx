import { useEffect } from "react";
import post from "../../utils/api/post";
import * as s from "./style";
import {useState} from "react";
import { getTokenData, getUserName } from "../../utils/token/token";
import { Link } from "react-router-dom";
function PostShow ({match}:any){
    const [postInfo,setPostInfo]=useState({
        title:"",
        content:"",
        userId:""
    })
    const {id}= match.params;
    
    useEffect(()=>{
        post.getDetail(id).then((res)=>{
            setPostInfo(res.data);
        }).catch((e)=>{
            console.log(e);
        })
    },[])
    const {title,content,userId}=postInfo;
    return(
        <s.BackgroundWrapper>
            <s.ContentBox>
                <s.TitleBox>
                    <s.Title>{title}</s.Title>
                    <s.Name>{userId}</s.Name>
                </s.TitleBox>
                <s.Content>{content}</s.Content>
                <s.ModifyBtnBox>
                   {(getUserName()===userId)&&<Link to={`/updatepost/${id}`}><s.ModifyBtn>수정하기</s.ModifyBtn></Link>} 
                </s.ModifyBtnBox>
            </s.ContentBox>

        </s.BackgroundWrapper>  
    );
}

export default PostShow;