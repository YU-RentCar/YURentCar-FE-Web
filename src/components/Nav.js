import React from "react";
import logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";

function Nav(props) {
  let nav = useNavigate();
  return (
    <>
      <div className="fixed top-0 left-0 right-0 flex justify-between w-screen border-b-[1px] h-20 bg-sky-100 border-slate-600">
        <div className="flex items-center justify-between w-1/4 h-full ml-3">
          <img
            src={logo}
            alt="Logo"
            className="object-contain h-full px-2 py-3"
          ></img>
          <div className="text-base text-center text-slate-500">
            여행하는 즐거움의 발견 유렌카!!
          </div>
        </div>
        <div className="flex items-center w-1/4 h-full mr-5">
          <ul className="flex justify-between w-full text-lg font-semibold list-none">
            <li>고객센터</li>
            <li onClick={() => nav("/mypage")}>마이페이지</li>
            <li>
              <span className="text-amber-700">{props.name}</span> 고객님
              안녕하세요!
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export { Nav };
