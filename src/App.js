import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}
const Person = () => {
  // const personStyle = {
  //   border: "1px solid red",
  //   margin: "5px 0",
  // };
  return (
    <div style={{ border: "1px solid red", marginTop: "5px" }}>
      <h1>Name : This is custom components</h1>
      <h1>Another tag</h1>
    </div>
  );
};

export default App;
