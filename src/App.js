import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-header">

          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
