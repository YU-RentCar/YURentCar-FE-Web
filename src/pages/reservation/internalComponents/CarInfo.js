import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCarNumber } from "../../../store";
import ExCar from "../../../assets/ExCar.png";

/**
 * 차량 기본 정보
 * @returns
 */
function CarInfo() {
  /* 임시 차량 정보(추후 스토어에서 가져옴) */
  // let carInfo = useSelector((state)=>state.carInfo);
  let [carInfo, setCarInfo] = useState({
    차종: "그랜저 HG",
    "차 번호": "12삼 4567",
    "총 주행거리": "123456km",
  });

  /* 예약 정보에 차 번호 저장 */
  // let dispatch = useDispatch();
  // dispatch(changeCarNumber(carInfo["차 번호"]));

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
