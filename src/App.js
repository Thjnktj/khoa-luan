import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Login from "./layouts/auth/Login";
import Headers from "./layouts/screen/Header";
import { getAllProducts, getAllTab, isUserLogin } from "./redux/actions";
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
    dispatch(getAllTab());
  }, [auth, dispatch]);
  return (
    <>
      <Headers>
        <Switch>
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
          <Route to="/" component={Login} />
        </Switch>
      </Headers>
    </>
  );
}

export default App;
