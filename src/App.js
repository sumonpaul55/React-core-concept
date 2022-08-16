import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person></Person>
      </header>
    </div>
  );
}
const Person = () => {
  return <h1>Name : This is custom components</h1>;
};

export default App;
