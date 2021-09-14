import { BrowserRouter, Route, Switch }from 'react-router-dom';
import * as C from "../components";
function route() {
    return (
        <BrowserRouter>
            <C.Auth></C.Auth>
            <C.Header></C.Header>
            <Switch>
                <Route component={C.BoardList} path="/"></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default route;