import { React, useState } from "react";
import { Point } from "./internalComponents/Point";
import { Reservation } from "./internalComponents/Reservation";
import { Recent } from "./internalComponents/Recent";

/**
 * 사용자 서비스 이용 내역
 * @returns
 */
function MyPageRecord() {
  /* 사용자 내역 정보 */
  let [recordInfo, setRecordInfo] = useState({
    point: 1000,
    recent: [
      ["차1", "11일 1111", "11111", "11111"],
      ["차2", "22이 2222", "22222", "22222"],
      ["차3", "33삼 3333", "33333", "33333"],
      ["차5", "55오 5555", "55555", "55555"],
    ],
  });

  return (
    <div className="w-full mt-20 h-[980px]">
      {/* 내역 조회 타이틀 */}
      <div className="flex items-center justify-center w-[15%] h-12 text-xl font-bold border-2 border-dashed rounded-md border-slate-400">
        내역 조회
      </div>

      {/* 각종 내역들 */}
      <div className="flex flex-col items-center justify-between w-full pt-5 mt-5 bg-white border-4 rounded-md px-28 h-[920px] border-slate-400">
        <Reservation />
        <Point point={recordInfo["point"]} />
        <Recent recent={recordInfo["recent"]} />
      </div>
    </div>
  );
}

export { MyPageRecord };
