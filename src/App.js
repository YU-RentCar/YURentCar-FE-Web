import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Nav } from "./components/Nav";
import { MyPage } from "./pages/myPage/MyPage";
import { Home } from "./pages/home/Home";
import { HomeInquireCar } from "./pages/home/homeInquireCar/HomeInquireCar";
import { Auth } from "./pages/auth/Auth";
import axios from "axios";
import { useEffect } from "react";

function App() {
  let nav = useNavigate();
  let location = useLocation();

  useEffect(() => {
    axios
      .post(
        "http://localhost:8080/api/v1/auth/user-info",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          if (location.pathname.split("/")[1] === "") nav("/home");
          else nav("/" + location.pathname.split("/")[1]);
        }
      })
      .catch(function (error) {
        console.log(error.response);
        if (error.response.status === 401) {
          nav("/auth");
        }
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
