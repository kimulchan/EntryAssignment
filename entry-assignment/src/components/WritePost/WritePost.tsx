import * as s from "./style";
import {useState} from "react";
import post from "../../utils/api/post";
import { useHistory } from "react-router-dom";
import { AxiosError } from "axios";
function WritePost (){
    const history = useHistory();
    const [postInfo,setPostInfo]=useState({
        content:"",
        title:""
    })

    const changePost = (e:any)=>{
        const {value,name}=e.target;
        setPostInfo({
            ...postInfo,
            [name]:value
        })
    }
    const isInput= ()=>{
        return postInfo.content&&postInfo.title;
    }
    const onSubmit =()=>{
        const {title,content}=postInfo;
        post.writePost(content,title).then(()=>{
            alert("게시물이 등록되었습니다");
            history.push("/");
        }).catch((e:AxiosError<any>)=>{
            alert(e);
        })
    }
    return (
        <s.WriteBox>
            <s.TitleWrapper placeholder="제목을 입력하세요." name="title" onChange={changePost}></s.TitleWrapper>
            <s.ContentArea placeholder="내용을 입력하세요." name="content" onChange={changePost}></s.ContentArea> 
            <s.SubmitBox>
                {isInput()?<s.SubmitBtn onClick={onSubmit} BColor="#386BEE" color="#FFFFFF">작성하기</s.SubmitBtn>:<s.SubmitBtn  BColor="#EDEDED" color="#5F5F5F">작성하기</s.SubmitBtn>}
            </s.SubmitBox>
        </s.WriteBox>
    )
}

export default WritePost;