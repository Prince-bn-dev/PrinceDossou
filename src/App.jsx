import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={
            <h1
              style={{
                color: "#f0f0f0",
                padding: "60px",
                fontFamily: "sans-serif",
                textAlign: "center",
              }}
            >
              404 Not Found
            </h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
