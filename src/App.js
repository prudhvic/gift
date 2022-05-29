import "./App.css";
import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";
import Gifts from "./pages/Gifts";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gifts" element={<Gifts />} />
      </Routes>
    </Layout>
  );
}

export default App;
