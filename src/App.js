import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route>

          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
