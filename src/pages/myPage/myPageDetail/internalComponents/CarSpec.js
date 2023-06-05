import { useState, useEffect } from "react";
import Fuel from "../../../../assets/Fuel.png";
import { getDetailSpec } from "../../../../api/DetailAxios";

/**
 * 차량 제원 정보
 * @return
 */
function CarSpec() {
  /* 임시 차량 제원 정보(추후 axios 구현 및 스토어 저장) */
  let [carSpec, setCarSpec] = useState({
    연료: "",
    출시일: "",
    등록일: "",
    "승차 인원": "",
    구동기: "",
    브랜드: "",
    "국산/외제": "",
  });

  /* 차량 제원 정보 요청 */
  useEffect(() => {
    (async () => {
      await getDetailSpec()
        .then((response) => {
          let newSpec = {
            연료: response.data.oilType,
            출시일: response.data.releaseDate.substring(0, 4) + "년",
            등록일: response.data.createdAt.substring(0, 4) + "년",
            "승차 인원": response.data.maxPassenger,
            구동기: response.data.transmission,
            브랜드: response.data.carBrand,
            "국산/외제": response.data.isKorean,
          };
          setCarSpec(newSpec);
        })
        .catch((error) => console.log(error.response));
    })();
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
