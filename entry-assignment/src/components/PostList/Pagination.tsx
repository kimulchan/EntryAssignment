import { Dispatch, SetStateAction } from "react";
import * as s from "./style";
interface PaginationProps{
    postPerPage:number,
    totalPosts:number,
    paginate:Dispatch<SetStateAction<number>>,
    currentPage:number
}

function Pagination({postPerPage,totalPosts,paginate,currentPage}:PaginationProps){
    
    
    const pageNumbers:number[] =[];
    
    for(let i=1; i<=Math.ceil(totalPosts/postPerPage); i++){
        pageNumbers.push(i);
    }
    
    const PageNumMap = (props:number)=>{
        return(
            <s.PageNum key={props} currentPage={currentPage} onClick={()=>{  
                paginate(props);

            }}>{props}</s.PageNum>
        );
    }
    return (
        <s.PageNumBox>
            <s.LSign onClick={()=>{
                if(currentPage===pageNumbers[0]){
                    alert("더 이상 넘어갈 수 없습니다")
                    return;
                }
                paginate(currentPage-1)
            }} ></s.LSign>
            {pageNumbers.map(PageNumMap)}
            <s.RSign onClick={()=>{
                if(currentPage===pageNumbers[pageNumbers.length-1]){
                    alert("더 이상 넘어갈 수 없습니다")
                    return;
                }
                paginate(currentPage+1)

            }} ></s.RSign>
        </s.PageNumBox>
    )
}

export default Pagination;