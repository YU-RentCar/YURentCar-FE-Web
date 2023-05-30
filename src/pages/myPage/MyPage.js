import { React } from "react";
import { MyPageResvCardView } from "./myPageResvCardView/MyPageResvCardView";
import { MyPageUserInfo } from "./myPageUserInfo/MyPageUserInfo";
import { MyPagePreferCar } from "./myPagePreferCar/MyPagePreferCar";
import { MyPageRecord } from "./myPageRecord/MyPageRecord";
import { MyPageLicense } from "./myPageLicense/MyPageLicense";
import { MyPageAccount } from "./myPageAccount/myPageAccount";

function MyPage() {
  return (
    <>
      <div className="w-[1200px] h-fit mx-auto pt-36">
        {/* 현재 예약 정보 카드뷰 */}
        <MyPageResvCardView />

        {/* 사용자 기본 정보 */}
        <MyPageUserInfo />

        {/* 사용자 선호 차량 조건 */}
        <MyPagePreferCar />

        {/* 사용자 이용 내역 */}
        <MyPageRecord />

        {/* 사용자 면허 정보 */}
        <MyPageLicense />

        {/* 사용자 계정 관리 */}
        <MyPageAccount />
      </div>
    </>
  );
}

export { MyPage };
