import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Landing from "./screens/Landing/Landing";
import Listing from './screens/Listing/Listing';
import Detail from './screens/Detail/Detail';
import { verifyUser } from './services/users';
import SignUp from './screens/SignUp/SignUp';
import SignIn from './screens/SignIn/SignIn';
import SignOut from './screens/SignOut/SignOut';
import { useEffect, useState } from "react";


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])
  
  const clearUser = () => setUser(null)
  
  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path='/sign-up'>
        <SignUp setUser={setUser} />
      </Route>
      <Route path='/sign-in'>
        <SignIn setUser={setUser} />
      </Route>
      <Route path='/sign-out'>
        <SignOut setUser={setUser} clearUser={clearUser}/>
      </Route>
      <Route path='/listing-page'>
        <Listing user={user}/>
      </Route>
      <Route path='/detail-page/:id'>
        <Detail user={user}/>
      </Route>
      <Route path='/add-item'>
        {user ? <AddItem user={user} /> : <Redirect to='sign-up' />}
      </Route>
      <Route path='edit-item/:id/edit'>
      {user ? <EditItem user={user} /> : <Redirect to='sign-up' />}
        </Route>
        </Switch>
      </div>
  );
}

export default App;
