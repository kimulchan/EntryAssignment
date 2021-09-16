import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ModalActionType } from '../../context/action/modalAction';
import { ModalContext } from '../../context/modalContext';
import * as H from './style';

function Header (){
    const ModalC:any = useContext(ModalContext);
    
    return(
        <>
        <H.HeaderWrapper>
            <H.MenuWrapper>
                <Link to="/"><H.TextMenu>게시물 보기</H.TextMenu></Link>
                <Link to="/writepost"><H.TextMenu>게시물 등록</H.TextMenu></Link>
                {localStorage.accessToken?<H.LoginImage><Link to="/mypage"><div></div></Link></H.LoginImage>:<H.BtnMenu onClick={()=>{
                    ModalC.dispatch({type:ModalActionType.IS_LOGIN_MODAL});
            }}>로그인</H.BtnMenu>}
            </H.MenuWrapper>
        </H.HeaderWrapper>
        <H.HeaderDiv></H.HeaderDiv>
        </>
    );
}
export default Header;