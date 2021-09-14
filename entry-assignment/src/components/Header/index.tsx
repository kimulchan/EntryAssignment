import * as H from './style';

function index (){
    return(
        <>
        
        <H.HeaderWrapper>
            <H.MenuWrapper>
                <H.TextMenu>게시물 보기</H.TextMenu>
                <H.TextMenu>게시물 등록</H.TextMenu>
                <H.BtnMenu >로그인</H.BtnMenu>
            </H.MenuWrapper>
        </H.HeaderWrapper>
        <H.HeaderDiv></H.HeaderDiv>
        </>
    );
}
export default index;