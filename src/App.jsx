import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="h-screen">
        <Navbar />
        <Main />
    </div>
  )
}

export default App