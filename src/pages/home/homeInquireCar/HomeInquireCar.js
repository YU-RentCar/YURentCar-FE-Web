import { HomeSearchPreferOption } from "./homeSearchPreferOption/HomeSearchPreferOption";
import { useState } from "react";
import { CarCard } from "../../myPage/myPageRecord/internalComponents/CarCard";
import { useOutletContext } from "react-router-dom";
import { CarDetail } from "../popUp/CarDetail";

/**
 * 차량의 옵션을 선택하고, 옵션에 맞는 차량과 공지사항을 제공하는 컴포넌트.
 */
function HomeInquireCar(props) {
  const outletProps = useOutletContext();

  const width = outletProps[0];

  let initSetting = width;

  /* 차량 리스트 state */
  let [carInfo, setCarInfo] = useState([]);

  let [isPopUpShow, setIsPopUpShow] = useState(false);

  return (
    <>
      <div className={initSetting}>
        <div className="flex justify-between mt-2">
          <div className="flex w-[75%] flex-wrap min-h-[680px] max-h-[900px] h-[calc(98vh-240px)] bg-white overflow-y-scroll">
            {carInfo.map((val, idx) => {
              return (
                <CarCard
                  carInfo={val}
                  setIsPopUpShow={setIsPopUpShow}
                ></CarCard>
              );
            })}
          </div>
          <div className="flex flex-col w-[23%] min-h-[680px] h-[calc(98vh-240px)] justify-between max-h-[900px]">
            <div className="w-full h-full bg-white ">
              <HomeSearchPreferOption
                width="w-full"
                height="h-full"
                /* 차량 리스트를 변경하는 setter */
                setCarInfo={setCarInfo}
              ></HomeSearchPreferOption>
            </div>
          </div>
        </div>
        {isPopUpShow ? <CarDetail setIsPopUpShow={setIsPopUpShow} /> : null}
      </div>
    </>
  );
}

export { HomeInquireCar };
