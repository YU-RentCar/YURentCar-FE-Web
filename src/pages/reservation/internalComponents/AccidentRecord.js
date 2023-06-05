import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAccidentRecord } from "../../../api/ReservationAxios";

/**
 * 차량 사고 내역
 * @returns
 */
function AccidentRecord() {
  /* request 를 위한 차량 정보 */
  // let carInfo = useSelector((state) => state.carInfo);
  /* 임시 차량 사고 내역(추후 axios 구현 및 스토어 저장) */
  let [accidentRecord, setAccidentRecord] = useState([
    "accident 1",
    "accident 2",
    "accident 3",
    "accident 4",
    "accident 5",
  ]);

  /* 차량 사고 내역 요청 */
  useEffect(() => {
    console.log("getAccidentRecord axios");
    /*
    (async () => {
      await getAccidentRecord(carInfo.carNumber)
        .then((response) => {
          console.log(response.data);
          let accidents = [...response.data];
          setAccidentRecord(accidents);
        })
        .catch((error) => {
          console.log(error.response);
        });
    })();*/
  }, []);

  return (
    <>
      <div className="w-[840px] h-[400px] mx-auto mt-20">
        {/* 사고 내역 타이틀 */}
        <div className="flex items-center justify-center w-full h-[60px] rounded-xl bg-blue-300 font-bold text-xl">
          사고 내역
        </div>

        {/* 사고 내역 */}
        <div className="w-full h-[340px] rounded-xl border-2 border-blue-500 overflow-y-scroll">
          {/* 개별 항목들 */}
          {accidentRecord.map((item, index) => {
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

export { AccidentRecord };
