import { HomeSelectLocation } from "../homeSelectLocation/HomeSelectLocation";
import { HomeSearchPreferOption } from "./homeSearchPreferOption/HomeSearchPreferOption";
import { useState } from "react";
import CarCard from "../../myPage/myPageRecord/internalComponents/CarCard";
import { HomeNotice } from "./homeNotice/HomeNotice";

/**
 * 차량의 옵션을 선택하고, 옵션에 맞는 차량과 공지사항을 제공하는 컴포넌트.
 */
function HomeInquireCar(props) {
  let [carInfo, setCarInfo] = useState([
    ["차1", "11일 1111", "11111", "11111"],
    ["차2", "22이 2222", "22222", "22222"],
    ["차3", "33삼 3333", "33333", "33333"],
    ["차5", "55오 5555", "55555", "55555"],
    ["차5", "55오 5555", "55555", "55555"],
    ["차5", "55오 5555", "55555", "55555"],
    ["차5", "55오 5555", "55555", "55555"],
  ]);

  const titleArray = [
    "글1",
    "좀 긴 글 글글그ㅡ르르그ㅡ르ㅡㅡ그르ㅡ글",
    "글 3",
    "글 4",
  ];

  return (
    <>
      <div className="w-[1200px] pt-[calc(80px+2vh)]">
        <div className="flex flex-col mb-5">
          <div className="mb-5">
            <HomeSelectLocation
              width="w-[1200px]"
              height="h-[calc(96vh-80px)]"
              isFold={true}
            ></HomeSelectLocation>
          </div>
          <div className="flex justify-between">
            <div className="flex w-[75%] flex-wrap min-h-[680px] max-h-[900px] h-[calc(98vh-240px)] bg-white overflow-y-scroll">
              {carInfo.map((val, idx) => {
                return <CarCard carInfo={val}></CarCard>;
              })}
            </div>
            <div className="flex flex-col w-[23%] min-h-[680px] h-[calc(98vh-240px)] justify-between max-h-[900px]">
              <div className=" bg-white w-full h-[60%]">
                <HomeSearchPreferOption
                  width="w-full"
                  height="h-full"
                ></HomeSearchPreferOption>
              </div>
              <div className=" bg-white w-full h-[37%]">
                <HomeNotice
                  width="w-full"
                  height="h-full"
                  titleArray={titleArray}
                ></HomeNotice>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { HomeInquireCar };
