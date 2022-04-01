import { Switch, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";


const Routes = ({ auth, setAuth }) => {
    return (
        <Switch>
            <Route path="/" exact>
                <Home auth={auth} setAuth={setAuth} />
            </Route>
            <Route path="/cart" component={Cart} />
        </Switch>
    );
};

export default Routes;