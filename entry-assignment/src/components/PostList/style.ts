import styled from "styled-components";
import leftSign from "../../assets/image/leftSign.png";
import rightSign from "../../assets/image/rightSign.png";
export const Wrapper = styled.div`
    padding:30px 320px 0 320px;
    display:flex;
    flex-direction: column;
    background-color:#fdfdfd;
`
export const ListWrapper = styled.div`
    height:540px;
    margin-bottom: 30px;
    display:flex;
    flex-direction: column;
    
`
export const Head = styled.div`
    height:45px;
    border-top: 2px solid #000000;
    border-bottom: 2px solid #000000;
    display:flex;
    align-items:center;
`
export const HNumberBox =styled.div`
    margin-left :50px ;
    font-size:14px;
` 
export const HTitleBox = styled.div`
    margin-left: 350px;
    font-size: 14px;
`

export const InfoBox = styled.div`
    height:45px;
    border-bottom: 1px solid #cccccc;
    display: flex;
    
`
export const IdBox = styled.div`
    width:120px;
    height:100%;
    display:flex;
    border-right: 1px solid #cccccc;
    font-size: 14px;
    color:#5F5F5F;
    justify-content: center;
    align-items:center;
`
export const TitleBox = styled.div`
    height:100%;
    align-items:center;
    padding-left: 50px;
    font-size: 14px;
    color:#5F5F5F;
    display:flex;
    align-items: center;
`
export const PageNumBox = styled.div`
    align-self: center;
    height:20px;
    display:flex;
    padding-bottom: 65px;
    align-items: center;
    
`
export const PageNum=styled.p<{currentPage:number}>`
    font-size: 14px;
    margin: 0 15px;
    cursor:pointer;
    font-weight: ${props =>{
        if(props.children ===props.currentPage){
            return 700;
        }
        else{
            return 500;
        }
    }};
`
export const LSign = styled.div`
    margin-right: 15px;
    background-image: url(${leftSign});
    width:7px;
    height:12px;
    background-repeat: no-repeat;
    background-size: auto;
    cursor:pointer;
`
export const RSign = styled.div`
    margin-left: 15px;
    background-image: url(${rightSign});
    width:7px;
    height:12px;
    background-repeat: no-repeat;
    background-size: auto;
    cursor:pointer;
`

export const Mypage = styled.div`
    height: 23px;
    font-size: 16px;
    font-weight:700;
    margin-bottom: 20px;
`