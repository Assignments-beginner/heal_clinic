import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <BrowserRouter>
          <Switch>
            <Route></Route>
          </Switch>
        </BrowserRouter>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
