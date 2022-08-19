import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const nayoks = ["Anowar", "Jashim", "Manna", "Rubel", "bappi"];
  const products = [
    { name: "Photoshop cs", price: "99.44$" },
    { name: "Photoshop cx", price: "33.44$" },
    { name: "Photoshop cy", price: "30.44$" },
  ];
  let friends = [
    { name: "Shuva roy", age: "23" },
    { name: "Sujan rabidas", age: "24" },
    { name: "Shawn das", age: "25" },
    { name: "Arnob chandra paul", age: "26" },
    { name: "Anto paul", age: "23" },
    { name: "Someone else", age: "26" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Todos></Todos>
        <Users></Users>
        {products.map((pd) => (
          <Product product={pd}></Product>
        ))}
        {/* <Person name={nayoks[0]} age={35}></Person> */}
        <ul>
          {nayoks.map((nayok) => (
            <li>{nayok}</li>
          ))}
        </ul>
        {/* {friends.map((dost) => (
          <Friends fname={dost}></Friends>
        ))} */}
        <Counter></Counter>
      </header>
    </div>
  );
}
function Todos() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        data = data.slice(0, 20);
        setTodo(data);
      });
  }, []);
  return (
    <div>
      <h4>what to do: </h4>
      {todo.map((todos) => (
        <h5>{todos.title}</h5>
      ))}
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Dynamic users:{users.length} </h1>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(10);
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button style={{ padding: "10px" }} onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button style={{ padding: "10px" }} onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}
const Product = (props) => {
  const styleproduct = {
    background: "lightblue",
    padding: "15px",
    borderRadius: "10px",
    color: "black",
    margin: "5px",
  };
  const { name, price } = props.product;

  return (
    <div style={styleproduct}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button style={{ padding: "10px", borderRadius: "5px", border: "none" }}>Buy Now</button>
    </div>
  );
};

function Friends(props) {
  const friendStyle = {
    color: "red",
    background: "blue",
    padding: "20px",
    margin: "10px",
  };
  const { name, age } = props.fname;
  return (
    <div style={friendStyle}>
      <h2>{name}</h2>
      <h3>Age {age}</h3>
    </div>
  );
}
export default App;
