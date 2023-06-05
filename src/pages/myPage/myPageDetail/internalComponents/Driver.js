import { useState } from "react";
import { Open } from "./Open";
import { Close } from "./Close";

function Driver() {
  /* 임시 카드 상태 state */
  let [showCard, setShowCard] = useState([false, false, false]);

  /* 임시 운전자 정보 state */
  let [drivers, setDrivers] = useState(["홍", "길", "동"]);

  return (
    <>
      <div className="w-[840px] h-fit mx-auto mt-20 flex flex-col justify-between items-center">
        <div className="relative flex justify-center items-center w-full h-[70px]">
          <div className="w-1/3 h-[70px] border-dashed border-4 border-slate-200 rounded-lg flex justify-center items-center font-bold">
            운전자 정보
          </div>
        </div>

        <div className="w-full mt-5 h-fit">
          {/* 운전자 카드 보여짐 상태에 따른 처리 */}
          {Array.from({ length: 3 }, (v, i) => i).map((t) => {
            return (
              <>
                {showCard[t] ? (
                  <Open
                    idx={t}
                    name={drivers[t]}
                    showCard={showCard}
                    setShowCard={setShowCard}
                  />
                ) : (
                  <Close
                    idx={t}
                    name={drivers[t]}
                    showCard={showCard}
                    setShowCard={setShowCard}
                  />
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export { Driver };
