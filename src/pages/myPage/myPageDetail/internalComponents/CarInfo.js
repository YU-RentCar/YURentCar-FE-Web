import { useState, useEffect } from "react";
import ExCar from "../../../../assets/ExCar.png";
import { getDetailInfo } from "../../../../api/DetailAxios";

/**
 * 차량 기본 정보
 * @returns
 */
function CarInfo() {
  /* 차량 기본 정보 state */
  let [carInfo, setCarInfo] = useState({
    차종: "",
    "차 번호": "",
    "총 주행거리": "",
  });

  /* 차량 기번 정보 조회 */
  useEffect(() => {
    (async () => {
      await getDetailInfo()
        .then((response) => {
          let newInfo = {
            차종: response.data.carName,
            "차 번호": response.data.carNumber,
            "총 주행거리": response.data.totalDistance,
          };
          setCarInfo(newInfo);
        })
        .catch((error) => console.log(error.response));
    })();
  }, []);

  return (
    <>
      {/* 차량 사진 */}
      <img src={ExCar} alt="ExCar" className="object-contain h-full"></img>

      <div className="flex items-center justify-center w-[63%] h-full border-2 border-blue-500 rounded-lg">
        <div className="flex items-center justify-between w-4/5 h-1/3">
          {/* 차량 기본 정보 */}
          {Object.keys(carInfo).map((item, index) => {
            return (
              <div
                className="flex flex-col items-center justify-between w-[30%] h-full"
                key={index}
              >
                {/* 차량 기본 정보 타이틀 */}
                <div className="w-full h-[45%] rounded-lg bg-blue-300 font-bold flex justify-center items-center">
                  {item}
                </div>

                {/* 차량 정보 */}
                <div className="w-full h-[45%] rounded-lg border-2 border-blue-500 font-bold flex justify-center items-center">
                  {carInfo[item]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export { CarInfo };
