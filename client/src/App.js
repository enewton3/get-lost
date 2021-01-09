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
import Sale from "./screens/Sale/Sale"

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
          <Landing user={user} />
        </Route>
        <Route path="/sign-up">
          <SignUp user={user} setUser={setUser} />
        </Route>
        <Route path="/sign-in">
          <SignIn user={user} setUser={setUser} />
        </Route>
        <Route path="/sign-out">
          <SignOut user={user} setUser={setUser} clearUser={clearUser} />
        </Route>
        <Route path="/listing-page/:filter">
          <Listing user={user} />
        </Route>
        <Route path="/detail/:id">
          <Detail user={user} />
        </Route>
        <Route path="/about">
          <About user={user} />
        </Route>
        <Route path="/contact">
          <Contact user={user} />
        </Route>
        <Route path="/add-product">
          {user ? <ProductCreate user={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route path="/edit-product/:id">
          {user ? <ProductEdit user={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route path="/sale">
          <Sale user={user} />
        </Route>
      </Switch>
      <div className="filler"></div>
    </div>
  );
}

export default App;
