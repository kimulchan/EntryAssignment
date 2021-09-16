import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import post from "../../utils/api/post";
import { DetaliType } from "../../utils/types";
import * as s from "./style";
// interface MatchParams{
//     :React.FunctionComponent<RouteComponentProps<>>
// }

function UpdatePost({match}:any){
    const history= useHistory();
    const {id}=match.params
    const [defaultInfo,setDefaultInfo]=useState({
        title:"",
        content:""
    })
    useEffect(()=>{
        post.getDetail(id).then((res:AxiosResponse<DetaliType>)=>{
            setDefaultInfo({
                title:res.data.title,
                content:res.data.content
            })
        }).catch((e:AxiosError<any>)=>{
            alert(e);
            history.push("/");
        })
    },[])
    const changeInfo =(e:any)=>{
        const {name,value}=e.target;
        setDefaultInfo({
            ...defaultInfo,
            [name]:value
        })
    }
    const submitInfo = ()=>{
        const {content,title}=defaultInfo;
        post.updatePost(id,content,title).then(()=>{
            alert("업데이트 되었습니다");
            history.push("/");
        }).catch((e:AxiosError<any>)=>{
            alert(e);
        })
    }
    return (
        <s.WriteBox>
            <s.TitleWrapper defaultValue={defaultInfo.title} name="title" onChange={changeInfo}></s.TitleWrapper>
            <s.ContentArea defaultValue={defaultInfo.content} name="content" onChange={changeInfo}></s.ContentArea>
            <s.SubmitBox>
                <s.SubmitBtn onClick={submitInfo} color="#FFFFFF" BColor="#386BEE">수정하기</s.SubmitBtn>
            </s.SubmitBox>
        </s.WriteBox>

    )
}

export default UpdatePost;