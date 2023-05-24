import React from "react";

function Reservation() {
  return (
    <>
      <div className="flex flex-col justify-around items-center w-full h-[10vh]">
        <div className="flex items-center justify-between w-full h-1/2">
          {/* 내역 타이틀 */}
          <div className="flex items-center text-2xl font-bold text-slate-400">
            예약 내역 조회
          </div>
          {/* 내역 조회 버튼 */}
          <div className="bg-slate-100 border-4 rounded-md border-blue-300 h-full w-[15%] flex justify-center items-center font-bold text-xl">
            예약 내역
          </div>
        </div>
        <hr className="w-full border-black"></hr>
      </div>
    </>
  );
}

export default Reservation;
