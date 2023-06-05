import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getRepairRecord } from "../../../api/ReservationAxios";

/**
 * 차량 수리 내역
 * @returns
 */
function RepairRecord() {
  /* request 를 위한 차량 정보 */
  // let carInfo = useSelector((state) => state.carInfo);
  /* 임시 차량 수리 내역(추후 axios 구현 및 스토어 저장) */
  let [repairRecord, setRepairRecord] = useState([
    "repair 1",
    "repair 2",
    "repair 3",
    "repair 4",
    "repair 5",
  ]);

  /* 차량 수리 내역 요청 */
  useEffect(() => {
    console.log("getRepairRecord axios");
    /*
    (async () => {
      await getRepairRecord(carInfo.carNumber)
        .then((response) => {
          console.log(response.data);
          let repairs = [...response.data];
          setRepairRecord(repairs);
        })
        .catch((error) => {
          console.log(error.response);
        });
    })();*/
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
