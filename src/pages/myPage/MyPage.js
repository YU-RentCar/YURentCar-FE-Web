import React from "react";
import ResvCardView from "./myPageResvCardView/MyPageResvCardView";
import { useState } from "react";

function MyPage() {
  let [resvInfo, setResvInfo] = useState({
    name: "홍길동",
    period: "2023-05-01 / 08:00 ~ 2023-05-31 / 22:00",
    location: "수성구지점",
    car: "그랜저 HG",
    number: "58부 7792",
    drivers: ["홍", "길", "동"],
  });
  return (
    <>
      <div className="w-[calc(95%)] h-fit flex-col mx-auto pt-36">
        <ResvCardView resvInfo={resvInfo} />
      </div>
    </>
  );
}

export default MyPage;
