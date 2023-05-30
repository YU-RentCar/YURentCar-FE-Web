import { React, useState } from "react";
import { PointRecord } from "../../popUp/PointRecord";

/**
 * 포인트 내역
 * @param {number} props.point 부모에게서 받아온 사용자가 현재 보유 중인 포인트
 * @returns
 */
function Point(props) {
  /* 적립/사용 내역 상세 조회 팝업 제어 state */
  let [pointPopUp, setPointPopUp] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-around items-center w-full h-[15%] mt-3">
        <div className="flex items-center justify-between w-full h-[60%]">
          <div className="flex flex-col justify-around h-full text-2xl font-bold">
            {/* 내역 타이틀 */}
            <div className="flex items-center text-slate-400">
              포인트 적립/사용 내역
            </div>

            {/* 현재 사용자 보유 중인 포인트 */}
            <div className="flex items-center text-black">
              현재 포인트 : {props.point}
            </div>
          </div>

          {/* 내역 조회 버튼 */}
          <button
            className="bg-slate-100 border-4 rounded-md border-blue-300 h-[55%] w-[15%] flex justify-center items-center font-bold text-xl"
            onClick={() => setPointPopUp(true)}
          >
            포인트 내역
          </button>
        </div>
        <hr className="w-full border-black"></hr>
      </div>

      {/* 적립/사용 내역 상세 조회 팝업 제어 */}
      {pointPopUp && <PointRecord showPopUp={setPointPopUp} />}
    </>
  );
}

export { Point };
