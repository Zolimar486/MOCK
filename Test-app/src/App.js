import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Single from './Pages/Single'
import Write from './Pages/Write'



function App() {

  return(
    <div className="app">
       <Navbar/>

       <Router>
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route path="/post/:postId">
           <Single/>
          </Route>
          <Route path="/Write">
           <Write/>
          </Route>
        </Switch>
       </Router>
    </div>
  );
}


export default App;
