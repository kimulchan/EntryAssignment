import { useContext } from 'react';
import { BrowserRouter, Route, Switch }from 'react-router-dom';
import * as C from "../components";
import { ModalContext } from '../context/modalContext';
function Routes() {
    const MContext:any = useContext(ModalContext);
    return (
        <BrowserRouter>
            {(MContext.state.isLogin||MContext.state.isSignUp) && <C.Auth></C.Auth>}
            <C.Header></C.Header>
            <Switch>
                <Route component={C.BoardList} path="/" exact></Route>
                <Route component={C.BoardList} path="/mypage" ></Route>
                <Route component={C.WritePost} path="/writepost"></Route>
                <Route component={C.UpdatePost} path="/updatepost/:id"></Route>
                <Route component={C.PostShow} path="/postshow/:id"></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;