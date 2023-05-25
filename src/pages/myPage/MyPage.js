import React from "react";
import { useState } from "react";
import MyPageResvCardView from "./myPageResvCardView/MyPageResvCardView";
import MyPageUserInfo from "./myPageUserInfo/MyPageUserInfo";
import MyPagePreferCar from "./myPagePreferCar/MyPagePreferCar";
import MyPageRecord from "./myPageRecord/MyPageRecord";
import MyPageLicense from "./myPageLicense/MyPageLicense";

function MyPage() {
  // 사용자의 예약 정보 객체
  let [resvInfo, setResvInfo] = useState({
    name: "홍길동",
    period: "2023-05-01 / 08:00 ~ 2023-05-31 / 22:00",
    location: "수성구지점",
    car: "그랜저 HG",
    number: "58부 7792",
    drivers: ["홍", "길", "동"],
  });
  // 사용자 기본 정보 객체
  let [userInfo, setUserInfo] = useState({
    이름: "홍길동",
    닉네임: "손씻은지도벌써백년",
    전화번호: "010-0000-0000",
    이메일: "gildong@gmail.com",
  });
  // 사용자 선호 차량 객체
  let [preferInfo, setPreferInfo] = useState({
    차량크기: ["준중형", "중형", "대형"],
    유종: ["전기", "휘발유", "경유"],
    구동기: ["자동", "수동"],
    최소인원: ["5인승", "7인승", "11인승"],
  });
  // 사용자 내역 정보
  let [recordInfo, setRecordInfo] = useState({
    point: 1000,
    recent: [
      ["차1", "11일 1111", "11111", "11111"],
      ["차2", "22이 2222", "22222", "22222"],
      ["차3", "33삼 3333", "33333", "33333"],
      ["차5", "55오 5555", "55555", "55555"],
    ],
  });
  // 사용자 면허 정보
  let [licenseInfo, setLicenseInfo] = useState({
    종류: "1종 보통",
    번호: "00-00-000000-00",
    발급일자: "2023-01-01",
    만료일자: "2023-12-31",
  });
  return (
    <>
      <div className="w-[1200px] h-fit mx-auto pt-36">
        {/* 현재 예약 정보 카드뷰 */}
        <MyPageResvCardView resvInfo={resvInfo} />
        {/* 사용자 기본 정보 */}
        <MyPageUserInfo userInfo={userInfo} />
        {/* 사용자 선호 차량 조건 */}
        <MyPagePreferCar preferInfo={preferInfo} />
        {/* 사용자 이용 내역 */}
        <MyPageRecord recordInfo={recordInfo} />
        {/* 사용자 면허 정보 */}
        <MyPageLicense licenseInfo={licenseInfo} />
      </div>
    </>
  );
}

export default MyPage;
