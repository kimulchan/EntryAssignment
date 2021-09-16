import * as B from "./style";
import {useEffect }from "react";
import post from "../../utils/api/post";
import { useState } from "react";
import { PostsType } from "../../utils/types";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import user from "../../utils/api/user";
function PostList ({match}:any){
    
    const [posts, setPosts]=useState([]);
    const [currentPage,setCurrentPage]=useState(1);
    const [postsPerPage,setPostsPerPage]=useState(10);
    useEffect( ()=>{
        async function asyncAll(){
            await post.getPost().then((res)=>{
                setPosts(res.data.posts);
            }).catch((e)=>{
                console.log(e);
            })
        }
        async function asyncMy(){
            await user.getMypage().then((res)=>{
                setPosts(res.data.posts);
            }).catch((e)=>{
                console.log(e);
            })
        }
        if(match.url =="/"){
            asyncAll();
        }
        else if(match.url =="/mypage"){
            asyncMy();
        }

    },[match])

    const postsMap = (props:PostsType,idx:any)=>{
        return(
            <Link to={`/postshow/${props.id}`} key={idx}>
            <B.InfoBox >
                <B.IdBox>{props.id}</B.IdBox>
                <B.TitleBox>{props.title}</B.TitleBox>
            </B.InfoBox>
            </Link>
        );
    }
    const indexOfLast = currentPage*postsPerPage;
    const indexOfFirst = indexOfLast-postsPerPage;
    function currentPosts(tmp:PostsType[]){
        const currentPost=tmp.slice(indexOfFirst,indexOfLast);
        return currentPost;
    }

    
    return(
        <B.Wrapper>
            <B.ListWrapper>
                <B.Mypage>{(match.url==="/mypage") && "내가 작성한 게시물"}</B.Mypage>
                <B.Head>
                    <B.HNumberBox>NO</B.HNumberBox>
                    <B.HTitleBox>제목</B.HTitleBox>
                </B.Head>
                {currentPosts(posts).map(postsMap)}
            </B.ListWrapper>

            <Pagination postPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage} currentPage={currentPage}></Pagination>
        </B.Wrapper>
    );
}

export default PostList;