import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Landing from "./screens/Landing/Landing";
import Listing from "./screens/Listing/Listing";
import Detail from "./screens/Detail/Detail";
import { verifyUser } from "./services/users";
import SignUp from "./screens/SignUp/SignUp";
import SignIn from "./screens/SignIn/SignIn";
import SignOut from "./screens/SignOut/SignOut";
import { useEffect, useState } from "react";
import ProductCreate from "./screens/ProductCreate/ProductCreate";
import ProductEdit from "./screens/ProductEdit/ProductEdit";
import About from "./screens/About/About";
import Contact from "./screens/Contact/Contact";
import ShoppingCart from "./screens/ShoppingCart/ShoppingCart";
import Sale from "./screens/Sale/Sale";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  const clearUser = () => setUser(null);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <ScrollToTop>
          <Landing user={user} />
          </ScrollToTop>
        </Route>
        <Route path="/sign-up">
          <ScrollToTop>
          <SignUp user={user} setUser={setUser} />
          </ScrollToTop>
        </Route>
        <Route path="/sign-in">
          <ScrollToTop>
            <SignIn user={user} setUser={setUser} />
          </ScrollToTop>
        </Route>
        <Route path="/sign-out">
          <ScrollToTop>
          <SignOut user={user} setUser={setUser} clearUser={clearUser} />
          </ScrollToTop>
        </Route>
        <Route path="/listing-page/:filter">
          <ScrollToTop>
          <Listing user={user} />
          </ScrollToTop>
        </Route>
        <Route path="/detail/:id">
          <ScrollToTop>
            <Detail user={user} />
          </ScrollToTop>
        </Route>
        <Route path="/about">
          <ScrollToTop>
          <About user={user} />
          </ScrollToTop>
        </Route>
        <Route path="/contact">
        <ScrollToTop>
          <Contact user={user} />
        </ScrollToTop>
        </Route>
        <Route path="/add-product">
          {user ? <ProductCreate user={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route path="/edit-product/:id">
          {user ? <ProductEdit user={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route path="/shopping-cart">
          <ScrollToTop>
            <ShoppingCart user={user} />
          </ScrollToTop>
        </Route>
        <Route path="/sale">
          <ScrollToTop>
          <Sale user={user} />
          </ScrollToTop>
        </Route>
      </Switch>
      <div className="filler"></div>
    </div>
  );
}

export default App;
