import { Routes, Route } from "react-router-dom";
import Index from "./pages";
import Home from "./pages/home";

export const App = () => {


  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
  );
};
