import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import { auth } from "./firebase";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";
import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user just logged in or / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
