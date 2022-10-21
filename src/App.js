import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import CryptoDetailPage from "./pages/CryptoDetailPage";
import CryptoContext from "./Context/CryptoContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CryptoListPage from "./pages/CryptoListPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <CryptoContext>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='crypto/:usdId/:rlsId' element={<CryptoDetailPage />} /> {/*  Two Daynamic Params */}
              <Route path='crypto-list' element={<CryptoListPage />} />
            </Routes>
          </CryptoContext>
        </Layout>
      </BrowserRouter>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
        style={{
          fontSize: "1.1rem",
        }}
      />
    </div>
  );
}

export default App;
