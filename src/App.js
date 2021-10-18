import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import Treatment from "./Components/Treatment/Treatment";
import About from "./Components/About/About";

function App() {
  return (
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
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/treatment">
              <Treatment></Treatment>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
