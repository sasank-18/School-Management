import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddBook from "../pages/AddBook";
import EditBook from "../pages/EditBook";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddBook />} />
      <Route path="/edit/:id" element={<EditBook />} />
    </Routes>
  );
}
