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
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
import AppointMent from './Pages/Appointment/AppointMent';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Confirm from './Pages/Confirm/Confirm';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          
          <PrivateRoute path="/appoint">
            <AppointMent></AppointMent>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/confirm">
            <Confirm></Confirm>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
