import './App.css';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home.js";
import Services from "./Pages/Services.js";
import Products from "./Pages/Products.js";
import SignUp from "./Pages/SignUp.js";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Services" exact component={Services}/>
          <Route path="/Products" exact component={Products}/>
          <Route path="/Sign-up" exact component={SignUp}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
