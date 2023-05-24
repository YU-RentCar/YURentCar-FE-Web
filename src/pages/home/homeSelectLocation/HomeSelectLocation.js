import { useState } from "react";
import { LocationList } from "./internalComponents/LocationList";
import { Map } from "./internalComponents/Map";
import { TimeSelectForm } from "./internalComponents/TimeSelectForm";

/**
 * 홈 화면에서 이용 시간, 지점을 선택하는 기능을 하는 컴포넌트
 * @param {string} props.width 부모에게 받아온 넓이값 (tailwind 속성)
 * @param {string} props.height 부모에게 받아온 높이값 (tailwind 속성)
 */
function HomeSelectLocation(props) {
  /* 컴포넌트의 초기 설정 */
  const initSetting = props.width + " " + props.height;

  /* 현재 컴포넌트들에서 사용할 state */
  let [storeLocList, setStoreLocList] = useState([
    "지도를 클릭해서 점포 검색!",
  ]);

  let [selectedStore, setSelectedStore] = useState("");

  let [location, setLocation] = useState("");

  let [startTime, setStartTime] = useState({
    date: "2023-05-08",
    time: "08:00",
  });

  let [endTime, setEndTime] = useState({
    date: "2023-05-12",
    time: "14:00",
  });

  return (
    <>
      <div className={initSetting}>
        <div className="flex flex-col items-center justify-start w-full h-full overflow-y-scroll bg-white">
          {/* 날짜 시간 선택 컴포넌트 */}
          <div className="flex flex-row justify-between mx-5 w-[96%] mt-3">
            <TimeSelectForm
              width="w-[49%]"
              legend="시작 시간"
              setDateTime={setStartTime}
            ></TimeSelectForm>

            <TimeSelectForm
              width="w-[49%]"
              legend="종료 시간"
              setDateTime={setEndTime}
            ></TimeSelectForm>
          </div>

          <div className="flex flex-row justify-between mx-5 w-[96%] mt-8 flex-grow">
            {/*! 지도 컴포넌트는 svg 크기 조절 문제로 인해 크기가 일정수준 정해져 있음 */}

            <Map
              setStoreLocList={setStoreLocList}
              setLocation={setLocation}
            ></Map>

            <div className="flex flex-col items-center justify-start w-[49%] max-h-[600px]">
              {/* 지점 컴포넌트 */}
              <LocationList
                width="w-full"
                height="h-[70%]"
                storeLocInfo={storeLocList}
                setSelectedStore={setSelectedStore}
              ></LocationList>

              <div className="flex flex-row items-center justify-around h-[30%] w-full">
                {/* 리마인더 */}
                <div className="flex flex-col justify-center font-bold text-l text-amber-700">
                  <div className="mb-1 text-3xl text-amber-500">{location}</div>
                  <div className="mb-3 text-3xl text-blue-500">
                    {selectedStore}
                  </div>
                  <div>
                    시작 시간 : {startTime.date} / {startTime.time}
                  </div>
                  <div>
                    종료 시간 : {endTime.date} / {endTime.time}
                  </div>
                </div>

                <button className="bg-rose-500 w-1/2 h-1/2 rounded-2xl text-[40px] text-white font-black">
                  검색하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { HomeSelectLocation };
