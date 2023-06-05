import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCount, addDriver, plusInfo } from "../../../store";
import { Open } from "./Open";
import { Close } from "./Close";
import { Alert } from "../../myPage/popUp/Alert";

function Driver() {
  /* 총 운전자 수 */
  let driverCount = useSelector((state) => state.driverCount);
  /* 보여주고자 하는 운전자 정보 카드 */
  let showCard = useSelector((state) => state.showCard);
  let dispatch = useDispatch();

  /* Alert 를 보여줄지 숨길지를 결정하는 state, Alert 를 통해 보여줄 메시지 state */
  let [showAlert, setShowAlert] = useState(false);
  let [alertMsg, setAlertMsg] = useState("");

  return (
    <>
      <div className="w-[840px] h-fit mx-auto mt-20 flex flex-col justify-between items-center">
        <div className="relative flex justify-center items-center w-full h-[70px]">
          <div className="w-1/3 h-[70px] border-dashed border-4 border-slate-200 rounded-lg flex justify-center items-center font-bold">
            운전자 정보
          </div>
          {/* 운전자 추가 버튼 */}
          <button
            className="absolute right-0 flex items-center justify-center mr-5 w-1/6 h-[50px] font-bold text-white bg-rose-500 rounded-lg"
            onClick={() => {
              /* 운전자 수 +1, 기본정보 추가 */
              dispatch(increaseCount());
              dispatch(addDriver());
              dispatch(plusInfo());
            }}
          >
            운전자 추가
          </button>
        </div>

        <div className="w-full mt-5 h-fit">
          {/* 운전자 카드 보여짐 상태에 따른 처리 */}
          {Array.from({ length: driverCount }, (v, i) => i).map((t) => {
            return (
              <>
                {showCard[t] ? (
                  <Open idx={t} />
                ) : (
                  <Close
                    idx={t}
                    setShowAlert={setShowAlert}
                    setAlertMsg={setAlertMsg}
                  />
                )}
              </>
            );
          })}
        </div>
      </div>

      {/* 알림창 제어 */}
      {showAlert && <Alert msg={alertMsg} />}
    </>
  );
}

export { Driver };
