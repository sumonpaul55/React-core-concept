import logo from "./logo.svg";
import "./App.css";

function App() {
  var person = {
    fname: "sumon ",
    lname: "paul",
    fullname: function () {
      return this.fname + this.lname;
    },
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>My first react paragraph</p>
        <h1>Object call: {person.fullname()}</h1>
      </header>
    </div>
  );
}

export default App;
