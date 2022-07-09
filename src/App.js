import "./App.css";
import Header from "./Components/Header";
import Crypto from "./Components/Crypto/Crypto";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Crypto />
    </div>
  );
}

export default App;
