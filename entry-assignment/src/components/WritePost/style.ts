import styled from "styled-components";

export const WriteBox = styled.div`
    height: calc(100vh - 55px);
    background-color: #fdfdfd;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


export const TitleWrapper = styled.input`
    width: 800px;
    height: 50px;
    padding: 14px 25px;
    font-size: 15px;
    border:1px solid #cccccc;
    margin-bottom: 12px;
`
export const ContentArea = styled.textarea`
    width:800px;
    height:430px;
    padding:20px 25px;
    font-size: 15px;
    border:1px solid #cccccc;
    outline:none;
    margin-bottom: 10px;
`
export const SubmitBox = styled.div`
    height: 40px;
    width:800px;
    display: flex;
    justify-content: flex-end;

`
export const SubmitBtn = styled.button<{color:string,BColor:string}>`
    width:100px;
    height:40px;
    font-size: 15px;
    border-radius: 20px;
    color : ${(props:any)=>(props.color)};
    background-color: ${(props)=>(props.BColor)};
`