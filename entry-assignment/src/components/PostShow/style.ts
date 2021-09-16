import styled from 'styled-components';

export const BackgroundWrapper = styled.div`
    height:calc(100vh - 55px);
    background-color:  #fdfdfd;
    width:100%;
    display:flex;
    justify-content: center;
    align-items:center;
`
export const ContentBox = styled.div`

    border-top:1px solid #000000;
    width: 800px;
`
export const TitleBox = styled.div`
    height:45px;
    width: 100%;
    padding: 0 20px;
    border-bottom:1px solid #cccccc;
    display:flex;
    justify-content: space-between;
    align-items:center;
    
`
export const Title = styled.div`
    font-size: 15px;
`
export const Name = styled.div`
    font-size:14px;
`

export const Content = styled.div`
    height:450px;
    width:100%;
    padding: 35px 25px;
    font-size:15px;
    border-bottom:1px solid #000000;
`
export const ModifyBtnBox = styled.div`
    height:40px;
    margin-top: 13px;
    display:flex;
    justify-content: flex-end;
`
export const ModifyBtn = styled.button`
    width:100px;
    height:40px;
    border-radius: 20px;
    background-color: #EDEDED;
    color: #5F5F5F;
    font-size: 15px;
    &:hover{
        background-color: #386BEE;
        color: #FFFFFF;
    }
`

