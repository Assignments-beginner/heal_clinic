import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Treatment from "./Components/Treatment/Treatment";
import About from "./Components/About/About";
import AuthProvider from "./Context/AuthProvider";
import LogIn from "./Components/LogIn/LogIn";
import Registration from "./Components/Registration/Registration";
import Appointment from "./Components/Appointment/Appointment";
import Services from "./Components/Services/Services";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import NotFound from "./Components/NotFound/NotFound";
import Greetings from "./Components/Greetings/Greetings";


function App() {
  return (
    <AuthProvider>
      <div className="page-container">
        <div className="content-wrap">
          <BrowserRouter>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/about">
                <About></About>
              </Route>
              <PrivateRoute path="/services/:dynamicId">
                <Services></Services>
              </PrivateRoute>
              <Route exact path="/treatment">
                <Treatment></Treatment>
              </Route>
              <PrivateRoute path="/appointment">
                <Appointment></Appointment>
              </PrivateRoute>
              <Route path="/signin">
                <LogIn></LogIn>
              </Route>
              <Route path="/registration">
                <Registration></Registration>
              </Route>
              <Route path="/greetings">
                <Greetings></Greetings>
              </Route>

              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
        <Footer></Footer>
      </div>
    </AuthProvider>
  );
}

export default App;
