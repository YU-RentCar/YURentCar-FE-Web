import React from "react";
import Point from "./internalComponents/Point";
import Reservation from "./internalComponents/Reservation";
import Recent from "./internalComponents/Recent";

/**
 *
 * @param {object} props.recordInfo 부모에게 받아와 자식에게 전해줄 각종 내역 정보 객체
 * @returns
 */
function MyPageRecord(props) {
  return (
    <>
      <div className="w-full mt-20 h-fit">
        {/* 내역 조회 타이틀 */}
        <div className="flex items-center justify-center w-[15%] h-12 text-xl font-bold border-2 border-dashed rounded-md border-slate-400">
          내역 조회
        </div>
        {/* 각종 내역들 */}
        <div className="flex flex-col items-center justify-between w-full pt-5 mt-5 bg-white border-4 rounded-md px-28 h-fit border-slate-400">
          <Reservation />
          <Point point={props.recordInfo["point"]} />
          <Recent recent={props.recordInfo["recent"]} />
        </div>
      </div>
    </>
  );
}

export default MyPageRecord;
