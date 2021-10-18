import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="d-flex justify-content-center p-5 m-5">
      <div>
        <img
          height="300"
          width="300"
          src={logo}
          className="App-logo"
          alt="logo"
        />
      </div>
      
    </div>
  );
}

export default App;
