import logo from "./logo.svg";
import "./App.css";

function App() {
  const products = [
    { name: "Photoshop cs", price: "99.44$" },
    { name: "Photoshop cc", price: "93.44$" },
    { name: "Photoshop cx", price: "33.44$" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex" }}>
          <Product product={products[0]}></Product>
          <Product product={products[1]}></Product>
          <Product product={products[2]}></Product>
        </div>
      </header>
    </div>
  );
}
const Product = (props) => {
  const styleProduct = {
    background: "lightblue",
    padding: "15px",
    borderRadius: "10px",
    color: "black",
    margin: "5px",
  };
  const { name, price } = props.product;

  return (
    <div style={styleProduct}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button style={{ padding: "10px", borderRadius: "5px", border: "none" }}>Buy Now</button>
    </div>
  );
};

export default App;
