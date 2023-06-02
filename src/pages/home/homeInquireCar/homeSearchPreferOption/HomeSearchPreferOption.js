import { useState } from "react";
import { CheckboxForm } from "./internalComponents/CheckboxForm";

/**
 * 차량의 옵션을 선택하는 컴포넌트.
 * @param {string} props.width 부모에게서 받아온 넓이. (tailwind 속성)
 * @param {string} props.height 부모에게서 받아온 높이. (tailwind 속성)
 */
function HomeSearchPreferOption(props) {
  const initSetting = props.width + " " + props.height;

  /* 이후 다양한 옵션들을 추가할 예정 */
  const carSizeArray = ["소형", "준중형", "중형", "대형"];
  const [sizeCheckedList, setSizeCheckedList] = useState([
    false,
    false,
    false,
    false,
  ]);

  const carOilArray = ["휘발유", "경유", "수소", "전기"];
  const [oilCheckedList, setOilCheckedList] = useState([
    false,
    false,
    false,
    false,
  ]);

  const carTransArray = ["자동", "수동"];
  const [transCheckedList, setTransCheckedList] = useState([false, false]);

  return (
    <div className={initSetting}>
      <div className="flex justify-center w-full h-full">
        <div className="flex flex-col items-center justify-around text-xl font-extrabold">
          <button className="w-4/5 px-6 py-2 text-white rounded-md bg-rose-500">
            사용자 선호 차량 검색
          </button>
          <div className="w-3/4 text-center px-4 py-1 border-dashed rounded-md border-slate-200 border-[4px]">
            차량 옵션 선택
          </div>
          <div className="w-1/2 text-center px-4 py-1 border-dashed rounded-md border-slate-200 border-[4px]">
            차량 크기
          </div>
          <CheckboxForm
            inputArray={carSizeArray}
            setCheckedList={setSizeCheckedList}
          ></CheckboxForm>
          <div className="w-1/2 text-center px-4 py-1 border-dashed rounded-md border-slate-200 border-[4px]">
            차량 유종
          </div>
          <CheckboxForm
            inputArray={carOilArray}
            setCheckedList={setOilCheckedList}
          ></CheckboxForm>
          <div className="w-1/2 text-center px-4 py-1 border-dashed rounded-md border-slate-200 border-[4px]">
            자동/수동
          </div>
          <CheckboxForm
            inputArray={carTransArray}
            setCheckedList={setTransCheckedList}
          ></CheckboxForm>
          <label htmlFor="countPeople">탑승 인원 수</label>
          <input
            type="number"
            id="countPeople"
            className="w-1/2 p-4 border-[2px] border-blue-500 rounded-md text-center"
          />
          <button className="w-4/5 px-6 py-2 text-white rounded-md bg-rose-500">
            선택 옵션 차량 검색
          </button>
        </div>
      </div>
    </div>
  );
}

export { HomeSearchPreferOption };
