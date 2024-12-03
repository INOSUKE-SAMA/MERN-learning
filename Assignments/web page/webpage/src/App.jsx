import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Menu from "./pages/Menu";

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <Menu />
      </div>
    </div>
  );
}
