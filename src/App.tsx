import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="min-h-screen  p-4">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
