import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./screens/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Landing />
      </Route>
    </div>
  );
}

export default App;
