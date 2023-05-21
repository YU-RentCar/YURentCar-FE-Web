import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="flex-col items-center justify-between w-screen h-screen bg-slate-200">
        <Nav name="홍길동" />
      </div>
    </>
  );
}

export default App;
