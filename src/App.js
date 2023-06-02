import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { MyPage } from "./pages/myPage/MyPage";
import { Home } from "./pages/home/Home";
import { HomeInquireCar } from "./pages/home/homeInquireCar/HomeInquireCar";

function App() {
  return (
    <>
      <div className="w-full h-[100vh]">
        <div className="fixed top-0 left-0 w-full h-full bg-slate-200 -z-50"></div>
        <Nav />
        <Routes>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/home" element={<Home />}>
            <Route
              path="inquirecar"
              element={<HomeInquireCar></HomeInquireCar>}
            ></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
