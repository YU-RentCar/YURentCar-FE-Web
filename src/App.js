import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="flex-col items-center justify-between w-full h-full bg-slate-200">
        <Nav name="홍길동" />
      </div>
    </>
  );
}

export default App;
