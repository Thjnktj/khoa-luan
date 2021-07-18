import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./layouts/auth/Login";
import Register from "./layouts/auth/Register";
import Headers from "./layouts/screen/Header";
import { getAllProducts, isUserLogin } from "./redux/actions";
import { routes } from "./routers";
import PrivateRoute from "./routers/private.router";

function App() {
  const dispatch = useDispatch();
  const auth = useDispatch((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLogin());
    }
    dispatch(getAllProducts());
  }, [auth, dispatch]);
  return (
    <>
      <Headers>
        <Router>
        <Switch>
          <Route path="/" exact={true} component={Login} />
          <Route path="/register" component={Register} />
          {routes.map((route, index) => {
            return (
              <PrivateRoute
                key={index}
                path={route.root + route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
        </Switch>
        </Router>
      </Headers>
    </>
  );
}

export default App;
