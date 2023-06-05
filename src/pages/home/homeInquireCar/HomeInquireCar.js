import { HomeSelectLocation } from "../homeSelectLocation/HomeSelectLocation";
import { HomeSearchPreferOption } from "./homeSearchPreferOption/HomeSearchPreferOption";
import { useState } from "react";
import { CarCard } from "../../myPage/myPageRecord/internalComponents/CarCard";
import { HomeNotice } from "./homeNotice/HomeNotice";
import { useOutletContext } from "react-router-dom";
/**
 * 차량의 옵션을 선택하고, 옵션에 맞는 차량과 공지사항을 제공하는 컴포넌트.
 */
function HomeInquireCar(props) {
  const outletProps = useOutletContext();

  const width = outletProps[0];

  let initSetting = width;

  /* 차량 리스트 state */
  let [carInfo, setCarInfo] = useState([]);

  return (
    <>
      <div className={initSetting}>
        <div className="flex justify-between mt-2">
          <div className="flex w-[75%] flex-wrap min-h-[680px] max-h-[900px] h-[calc(98vh-240px)] bg-white overflow-y-scroll">
            {carInfo.map((val, idx) => {
              return <CarCard carInfo={val}></CarCard>;
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
      </div>
    </>
  );
}

export { HomeInquireCar };
