import { useState } from "react";
import { LocationList } from "./internalComponents/LocationList";
import { Map } from "./internalComponents/Map";
import { TimeSelectForm } from "./internalComponents/TimeSelectForm";
import listShowIcon from "../../../assets/listShowIcon.png";
import { useNavigate } from "react-router-dom";

/**
 * 홈 화면에서 이용 시간, 지점을 선택하는 기능을 하는 컴포넌트
 * @param {string} props.width 부모에게 받아온 넓이값 (tailwind 속성)
 * @param {string} props.height 부모에게 받아온 높이값 (tailwind 속성)
 * @param {boolean} props.isFold 부모에게 받아온 접힘, 닫힘 여부
 */
function HomeSelectLocation(props) {
  /* 컴포넌트의 초기 설정 */
  const initSetting = props.width + " " + props.height;

  let nav = useNavigate();

  /* 현재 컴포넌트들에서 사용할 state */
  let [storeList, setStoreList] = useState(["지도를 클릭해서 점포 검색!"]);

  let [selectedStore, setSelectedStore] = useState("");

  let [province, setProvince] = useState("");

  let [startTime, setStartTime] = useState("");

  let [startDate, setStartDate] = useState("");

  let [endTime, setEndTime] = useState("");

  let [endDate, setEndDate] = useState("");

  let [isFold, setIsFold] = useState(props.isFold);

  if (isFold) {
    return (
      <>
        <div className={props.width}>
          <div className="flex flex-row items-center justify-around h-full py-3 my-5 bg-white">
            <div className="w-[28%] h-[100px] bg-white">
              {/* 고정 시작 시간 */}
              <div className="relative flex justify-around items-center border-[5px] border-dashed border-slate-200 h-full">
                <div className="absolute top-[-10px] left-[20px] w-[100px] h-6 bg-white"></div>
                <span className="absolute text-[1.5rem] px-4 left-2 top-[-20px] text-slate-600 font-extrabold">
                  시작 시간
                </span>
                <div className="border-blue-500 border-[2px] rounded-full h-fit bg-sky-50 py-3 px-6 font-extrabold text-xl">
                  {startDate} 일
                </div>
                <div className="border-blue-500 border-[2px] rounded-full h-fit bg-sky-50 py-3 px-6 font-extrabold text-xl">
                  {startTime} 시
                </div>
              </div>
            </div>
            <div className="w-[28%] h-[100px] bg-white">
              {/* 고정 종료 시간 */}
              <div className="relative flex justify-around items-center border-[5px] border-dashed border-slate-200 h-full ">
                <div className="absolute top-[-10px] left-[20px] w-[100px] h-6 bg-white"></div>
                <span className="absolute text-[1.5rem] px-4 left-2 top-[-20px] h-fit text-slate-600 font-extrabold">
                  종료 시간
                </span>
                <div className="border-blue-500 border-[2px] rounded-full h-fit bg-sky-50 py-3 px-6 font-extrabold text-xl">
                  {endDate} 일
                </div>
                <div className="border-blue-500 border-[2px] rounded-full h-fit bg-sky-50 py-3 px-6 font-extrabold text-xl">
                  {endTime} 시
                </div>
              </div>
            </div>
            <div className="w-[28%] h-[100px] bg-sky-50 rounded-lg border-[2px] border-blue-500">
              {/* 지점 위치 */}
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-2xl font-extrabold text-amber-500">
                  {province}
                </div>
                <div className="text-3xl font-extrabold text-blue-500 ">
                  {selectedStore}
                </div>
              </div>
            </div>
            <div className="w-[10%] flex justify-center ">
              <button>
                <img
                  src={listShowIcon}
                  alt="unfold"
                  onClick={() => {
                    setIsFold(false);
                    nav("/home");
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={initSetting}>
          <div className="flex flex-col items-center justify-start w-full h-full my-5 overflow-y-scroll min-h-[600px] bg-white">
            {/* 날짜 시간 선택 컴포넌트 */}
            <div className="flex flex-row justify-between w-full px-5 my-3">
              <TimeSelectForm
                width="w-[49%]"
                legend="시작 시간"
                dateSetter={setStartDate}
                timeSetter={setStartTime}
              ></TimeSelectForm>

              <TimeSelectForm
                width="w-[49%]"
                legend="종료 시간"
                dateSetter={setEndDate}
                timeSetter={setEndTime}
              ></TimeSelectForm>
            </div>

            <div className="flex flex-row items-center justify-between flex-grow w-full px-5">
              <Map
                setStoreLocList={setStoreList}
                setLocation={setProvince}
              ></Map>

              <div className="flex flex-col items-center justify-center w-[49%] h-full">
                {/* 지점 컴포넌트 */}
                <LocationList
                  width="w-full"
                  height="h-[60%]"
                  storeLocInfo={storeList}
                  setSelectedStore={setSelectedStore}
                ></LocationList>

                <div className="flex flex-row items-center justify-around h-[30%] w-full">
                  {/* 리마인더 */}
                  <div className="flex flex-col justify-center font-bold text-l text-amber-700">
                    <div className="mb-1 text-3xl text-amber-500">
                      {province}
                    </div>
                    <div className="mb-3 text-3xl text-blue-500 ">
                      {selectedStore}
                    </div>
                    <div>
                      시작 시간 : {startDate} -- {startTime} 시
                    </div>
                    <div>
                      종료 시간 : {endDate} -- {endTime} 시
                    </div>
                  </div>

                  <button
                    className="bg-rose-500 w-1/2 h-1/2 rounded-2xl text-[40px] text-white font-black"
                    onClick={() => {
                      setIsFold(true);
                      nav("/home/inquirecar");
                    }}
                  >
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
}

export { HomeSelectLocation };
