import TitleBar from "./Components/TitleBar"
import { Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage";
import Menus from "./Pages/Menus";

function App() {
  return (
    <div className="App">
      <TitleBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menus" element={<Menus />} />
      </Routes>
    </div>
  );
}

export default App;
