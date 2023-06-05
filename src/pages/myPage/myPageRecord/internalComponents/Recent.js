import { React, useState, useEffect } from "react";
import { CarCard } from "./CarCard";
import { getRecentRecord } from "../../../../api/MyPageAxios";

/**
 * 최근 본 차량 내역
 * @param {array} props.recent 부모에게서 받아온 사용자가 최근 본 차량 리스트
 * @returns
 */
function Recent(props) {
  /* localStorage 에 저장되어있는 최근 본 차량 6대 차량 번호 */
  let [numberList, setNumberList] = useState(
    JSON.parse(localStorage.getItem("carNum"))
  );

  let [recentInfo, setRecentInfo] = useState([]);

  useEffect(() => {
    (async () => {
      await getRecentRecord()
        .then((response) => {
          setRecentInfo(response.data);
        })
        .catch((error) => console.log(error.response));
    })();
  }, []);
  return (
    <>
      <div className="w-full h-[70%] mt-3">
        <div className="flex flex-col justify-around w-full h-full">
          {/* 내역 타이틀 */}
          <div className="flex items-center text-2xl font-bold text-slate-400">
            최근 본 차량 조회
          </div>

          {/* 최근 본 차량 리스트 */}
          <div className="border-4 rounded-md border-blue-300 h-[90%] w-full flex flex-wrap overflow-y-scroll">
            {/* 각각을 카드뷰로 표현 */}
            {recentInfo.map((carInfo, index) => {
              return <CarCard carInfo={carInfo} key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export { Recent };
