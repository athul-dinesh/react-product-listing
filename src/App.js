import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/products/products";
import { Container } from "react-bootstrap";

function App() {
  let isLoggedIn = true;
  return (
    <div className="App">
      <Container>
        <Products />
      </Container>
    </div>
  );
}

export default App;
