import React from "react";
import ExCar from "../../../assets/ExCar.png";

/**
 *
 * @param {object} props.resvInfo 부모에게서 받아온 사용자의 현재 예약 정보 객체
 * @returns
 */
function MyPageResvCardView(props) {
  // 예약 정보에 포함된 운전자들을 보여주게됨
  let driverList = props.resvInfo["drivers"].map((driver, index) => (
    <span>
      제 {index + 1}운전자 : {driver} &nbsp;
    </span>
  ));
  return (
    <>
      <div className="w-full px-10 py-12 bg-white border-2 h-fit border-rose-500 rounded-3xl">
        {/* 예약 정보 멘트 */}
        <div className="text-4xl font-extrabold">
          <span className="text-amber-700">{props.resvInfo["name"]}</span> 님이
          예약하신 차량이 준비 중이에요
        </div>
        <div className="flex justify-between w-full mt-10 h-fit">
          {/* 사용자가 예약한 차량 사진 */}
          <img
            src={ExCar}
            alt="Exemple Car"
            className="object-contain w-[30%]"
          ></img>
          {/* 예약 정보 */}
          <div className="w-[50%] text-xl font-bold leading-relaxed flex flex-col justify-center">
            예약 기간 : {props.resvInfo["period"]}
            <br />
            예약 지점 : {props.resvInfo["location"]}
            <br />
            차량 : {props.resvInfo["car"]}
            <br />차 번호 : {props.resvInfo["number"]}
            <br />
            <div className="flex items-center">{driverList}</div>
          </div>
          <div className="relative w-[15%]">
            {/* 세부 정보를 보기위한 버튼 */}
            <div className="absolute bottom-0 flex items-center justify-center w-full text-xl font-bold border-4 border-blue-300 h-1/4 bg-slate-100 rounded-xl">
              세부 정보
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyPageResvCardView;
