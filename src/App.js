import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { MyPage } from "./pages/myPage/MyPage";

function App() {
  return (
    <>
      <div className="w-full h-full bg-slate-200">
        <Nav />
        <Routes>
          <Route path="/mypage" element={<MyPage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
