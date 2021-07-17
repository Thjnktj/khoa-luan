import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts, getAllTab, isUserLogin } from "./redux/actions";

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
  return <h2>Hello</h2>;
}

export default App;
