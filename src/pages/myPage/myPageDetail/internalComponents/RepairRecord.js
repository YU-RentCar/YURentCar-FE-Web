import { useState, useEffect } from "react";
import { getDetailRepair } from "../../../../api/DetailAxios";

/**
 * 차량 수리 내역
 * @returns
 */
function RepairRecord() {
  /* 렌트 차량 수리 내역 */
  let [repairRecord, setRepairRecord] = useState([]);

  /* 차량 수리 내역 요청 */
  useEffect(() => {
    (async () => {
      await getDetailRepair()
        .then((response) => {
          let newRepair = [...response.data];
          setRepairRecord(newRepair);
        })
        .catch((error) => {
          console.log(error.response);
        });
    })();
  }, []);

  return (
    <>
      <div className="w-[840px] h-[400px] mx-auto mt-20">
        {/* 수리 내역 타이틀 */}
        <div className="flex items-center justify-center w-full h-[60px] rounded-xl bg-blue-300 font-bold text-xl">
          수리 내역
        </div>

        {/* 수리 내역 */}
        <div className="w-full h-[340px] rounded-xl border-2 border-blue-500 overflow-y-scroll">
          {/* 개별 항목들 */}
          {repairRecord.map((item, index) => {
            return (
              <div
                className="flex justify-center items-center w-[90%] h-[60px] rounded-xl border-slate-400 border-2 bg-slate-100 font-bold text-xl mx-auto mt-5"
                key={index}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export { RepairRecord };
