import React from "react";
import ExCar from "../../../assets/ExCar.png";

function ResvCardView(props) {
  let driverList = props.resvInfo["drivers"].map((driver, index) => (
    <span>
      제 {index + 1}운전자 : {driver} &nbsp;
    </span>
  ));
  return (
    <>
      <div className="flex-col w-full py-16 bg-white border-2 px-14 h-fit border-rose-500 rounded-3xl">
        <div className="text-6xl font-extrabold">
          <span className="text-amber-700">{props.resvInfo["name"]}</span> 님이
          예약하신 차량이 준비 중이에요
        </div>
        <div className="flex justify-around w-full mt-10 h-fit">
          <img
            src={ExCar}
            alt="Exemple Car"
            className="object-contain w-1/4"
          ></img>
          <div className="w-[calc(40%)] my-auto text-2xl font-bold leading-relaxed">
            예약 기간 : {props.resvInfo["period"]}
            <br />
            예약 지점 : {props.resvInfo["location"]}
            <br />
            차량 : {props.resvInfo["car"]}
            <br />차 번호 : {props.resvInfo["number"]}
            <br />
            {driverList}
          </div>
          <div className="relative w-1/4">
            <div className="absolute bottom-0 right-0 flex items-center justify-center w-1/2 text-2xl font-bold border-4 border-blue-300 h-1/4 bg-slate-100 rounded-xl">
              세부 정보
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResvCardView;
