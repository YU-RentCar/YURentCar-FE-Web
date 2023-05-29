import { React, useState } from "react";
import { ResvRecord } from "../../popUp/ResvRecord";
import { Alert } from "../../popUp/Alert";

/**
 * 예약 내역
 * @returns
 */
function Reservation() {
  /* 예약 내역 상세 조회 팝업 제어 state */
  let [resvPopUp, setResvPopUp] = useState(false);

  /* Alert 제어 state */
  let [showAlert, setShowAlert] = useState(false);
  let [alertMsg, setAlertMsg] = useState("");

  return (
    <>
      <div className="flex flex-col justify-around items-center w-full h-[10%]">
        <div className="flex items-center justify-between w-full h-1/2">
          {/* 내역 타이틀 */}
          <div className="flex items-center text-2xl font-bold text-slate-400">
            예약 내역 조회
          </div>

          {/* 내역 조회 버튼 */}
          <button
            className="bg-slate-100 border-4 rounded-md border-blue-300 h-full w-[15%] flex justify-center items-center font-bold text-xl"
            onClick={() => setResvPopUp(true)}
          >
            예약 내역
          </button>
        </div>
        <hr className="w-full border-black"></hr>
      </div>

      {/* 예약 내역 상세 조회 팝업 제어 */}
      {resvPopUp && (
        <ResvRecord
          showPopUp={setResvPopUp}
          alertMsg={setAlertMsg}
          showAlert={setShowAlert}
        />
      )}

      {/* Alert 제어 */}
      {showAlert && <Alert msg={alertMsg} />}
    </>
  );
}

export { Reservation };
