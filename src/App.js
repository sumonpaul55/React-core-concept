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
  var style = {
    color: "red",
    backgroundColor: "cyan",
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
        <h1>
          Mathmetical term : <code>5+4 = </code>
          {5 + 4}
        </h1>
        <h4 style={style}>style and css apply </h4>
      </header>
    </div>
  );
}

export default App;
