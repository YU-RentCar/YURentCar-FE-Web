import { React, useState } from "react";
import { PreferOptions } from "./internalComponents/PreferOptions";
import { Alert } from "../popUp/Alert";

/**
 *
 * @param {object} props.preferInfo 부모에게서 받아와 자식에게 전해줄 선호 차량 옵션 정보 객체
 * @returns
 */
function MyPagePreferCar(props) {
  let [alertStyle, setAlertStyle] = useState("hidden");
  let [alertMsg, setAlertMsg] = useState("");
  let changeState = (msg, style) => {
    setAlertMsg(msg);
    setAlertStyle(style);
  };
  return (
    <>
      <div className="w-full h-[45vh] min-h-[450px] mt-20">
        {/* 선호 차량 타이틀 */}
        <div className="flex items-center justify-center w-[15%] h-12 text-xl font-bold border-2 border-dashed rounded-md border-slate-400">
          선호 차량
        </div>
        {/* 선호 차량 옵션들 */}
        <div className="flex flex-col justify-between items-center w-full h-[80%] bg-white border-4 rounded-md border-slate-400 mt-5 px-28 py-10">
          {/* 각 옵션 제목 & 목록 */}
          <PreferOptions preferInfo={props.preferInfo} />
          {/* 변경 저장 버튼 */}
          <div
            className="flex items-center justify-center w-full bg-blue-300 rounded-lg h-[18%] font-bold text-lg"
            onClick={() => {
              /* alert 2초 동안 호출 */
              changeState(
                "선호 옵션이 변경되었습니다.",
                "flex items-center justify-center w-1/3 h-10 font-bold text-white rounded-full bg-slate-600"
              );
              setTimeout(() => changeState("", "hidden"), 2000);
            }}
          >
            변경 저장
          </div>
        </div>
      </div>
      <Alert msg={alertMsg} style={alertStyle} />
    </>
  );
}

export { MyPagePreferCar };
