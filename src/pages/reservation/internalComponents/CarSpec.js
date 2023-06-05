import { useState, useEffect } from "react";
import Fuel from "../../../assets/Fuel.png";
import { useSelector } from "react";
import { getCarSpec } from "../../../api/ReservationAxios";

/**
 * 차량 제원 정보
 * @return
 */
function CarSpec() {
  /* request 를 위한 차량 정보 */
  // let carInfo = useSelector((state) => state.carInfo);
  /* 임시 차량 제원 정보(추후 axios 구현 및 스토어 저장) */
  let [carSpec, setCarSpec] = useState({
    연료: "가솔린",
    출시일: "2016년",
    등록일: "2018년",
    "승차 인원": "5명",
    구동기: "자동",
    브랜드: "현대",
    "국산/외제": "국산",
  });

  /* 차량 제원 정보 요청 */
  useEffect(() => {
    console.log("getCarSpec axios");
    /*
    (async () => {
      await getCarInfo(carInfo.carNumber)
        .then((response) => {
          console.log(response.data);
          let specs = {
            연료: response.data.연료,
            출시일: response.data.출시일,
            등록일: response.data.등록일,
            "승차 인원": response.data.승차인원,
            구동기: response.data.구동기,
            브랜드: response.data.브랜드,
            "국산/외제": response.data.국산/외제,
          }
          setCarSpec(specs);
        })
        .catch((error) => {
          console.log(error.response);
        });
    })();*/
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center items-center w-full h-[450px] mx-auto mt-10">
        {Object.keys(carSpec).map((item, index) => {
          return (
            <div
              className="w-[150px] h-[150px] rounded-lg border-2 border-blue-500 p-3 mx-10 mb-10 flex flex-col justify-between items-start"
              key={index}
            >
              {/* 아이템에 맞는 이미지 */}
              <img
                src={Fuel}
                alt="연료"
                className="object-contain h-[40%]"
              ></img>

              {/* 아이템 타이틀, 내용 */}
              <div className="h-1/2">
                <div className="text-lg font-bold text-slate-400">{item}</div>
                <div className="text-3xl font-bold">{carSpec[item]}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export { CarSpec };
