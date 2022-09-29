import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import CryptoDetailPage from "./pages/CryptoDetailPage";
import CryptoContext from "./Context/CryptoContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CryptoContext>
          <Layout>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='crypto/:id' element={<CryptoDetailPage />} />
            </Routes>
          </Layout>
        </CryptoContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
