import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Nav } from "./components/Nav";
import { MyPage } from "./pages/myPage/MyPage";
import { Home } from "./pages/home/Home";
import { HomeInquireCar } from "./pages/home/homeInquireCar/HomeInquireCar";
import { Auth } from "./pages/auth/Auth";
import axios from "axios";
import { useEffect } from "react";

function App() {
  let nav = useNavigate();

  useEffect(() => {
    axios
      .get("/users/profiles?username=", {
        withCredentials: true,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        nav("/auth");
      });
  }, []);

  return (
    <>
      <div className="w-full h-[100vh]">
        <div className="fixed top-0 left-0 w-full h-full bg-slate-200 -z-50"></div>
        <Nav />
        <Routes>
          <Route path="/auth" element={<Auth />}></Route>
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
