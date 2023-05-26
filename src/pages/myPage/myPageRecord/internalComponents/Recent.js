import React from "react";
import CarCard from "./CarCard";

/**
 *
 * @param {array} props.recent 부모에게서 받아온 사용자가 최근 본 차량 리스트
 * @returns
 */
function Recent(props) {
  return (
    <>
      <div className="w-full h-[70%] mt-3">
        <div className="flex flex-col justify-around w-full h-full">
          {/* 내역 타이틀 */}
          <div className="flex items-center text-2xl font-bold text-slate-400">
            최근 본 차량 조회
          </div>
          {/* 최근 본 차량 리스트 */}
          <div className="border-4 rounded-md border-blue-300 h-[90%] w-full flex flex-wrap overflow-y-scroll">
            {props.recent.map((carInfo) => {
              return <CarCard carInfo={carInfo} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Recent;
