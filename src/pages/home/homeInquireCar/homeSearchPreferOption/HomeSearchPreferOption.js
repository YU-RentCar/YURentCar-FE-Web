import { useEffect, useState } from "react";
import { CheckboxForm } from "./internalComponents/CheckboxForm";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { changeUserPrefer } from "../../../../store";

/**
 * 차량의 옵션을 선택하는 컴포넌트.
 * @param {string} props.width 부모에게서 받아온 넓이. (tailwind 속성)
 * @param {string} props.height 부모에게서 받아온 높이. (tailwind 속성)
 */
function HomeSearchPreferOption(props) {
  const initSetting = props.width + " " + props.height;

  /* 사용자가 선택했던 지점을 redux store 에서 받아옴 */
  const selectedRentalInfo = useSelector((state) => {
    return state.selectedRentalInfo;
  });

  const preferTitle = useSelector((state) => {
    return state.preferInfo;
  });
  const userPrefer = useSelector((state) => {
    return state.userPrefer;
  });

  let dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:8080/api/v1/users/prefer-filter", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data);

            /* store로 response를 보낸다. 이 안에서 state를 초기화 하는 방법을 알 수 없어서 이런 방법을 쓴다. */
            dispatch(changeUserPrefer(response.data));
          }
        })
        .catch((error) => {
          console.log(error);
          alert("error!");
        });
    })();
  }, []);

  /* store에 있는 state들을 받아온다. */
  let [sizeCheckedList, setSizeCheckedList] = useState([
    ...userPrefer.carSizes,
  ]);

  let [oilCheckedList, setOilCheckedList] = useState([...userPrefer.oilTypes]);

  let [transCheckedList, setTransCheckedList] = useState([
    ...userPrefer.transmissions,
  ]);

  return (
    <div className={initSetting}>
      <div className="flex justify-center w-full h-full">
        <div className="flex flex-col items-center justify-around text-xl font-extrabold">
          <div className="w-3/4 text-center px-4 py-1 border-dashed rounded-md border-slate-200 border-[4px]">
            차량 옵션 선택
          </div>
          <div className="w-1/2 text-center px-4 py-1 border-dashed rounded-md border-slate-200 border-[4px]">
            차량 크기
          </div>
          <CheckboxForm
            inputArray={preferTitle.차량크기}
            setCheckedList={setSizeCheckedList}
            defaultCheckedList={sizeCheckedList}
          ></CheckboxForm>
          <div className="w-1/2 text-center px-4 py-1 border-dashed rounded-md border-slate-200 border-[4px]">
            차량 유종
          </div>
          <CheckboxForm
            inputArray={preferTitle.유종}
            setCheckedList={setOilCheckedList}
            defaultCheckedList={oilCheckedList}
          ></CheckboxForm>
          <div className="w-1/2 text-center px-4 py-1 border-dashed rounded-md border-slate-200 border-[4px]">
            자동/수동
          </div>
          <CheckboxForm
            inputArray={preferTitle.트랜스미션}
            setCheckedList={setTransCheckedList}
            defaultCheckedList={transCheckedList}
          ></CheckboxForm>
          <label htmlFor="countPeople">탑승 인원 수</label>
          <input
            type="number"
            id="countPeople"
            min={1}
            max={10}
            className="w-1/2 p-4 border-[2px] border-blue-500 rounded-md text-center"
            defaultValue={userPrefer.minCount}
          />
          <button
            className="w-4/5 px-6 py-2 text-white rounded-md bg-rose-500"
            onClick={() => {
              const temp = {
                size: sizeCheckedList,
                oil: oilCheckedList,
                trans: transCheckedList,
                min: document.querySelector("#countPeople").value,
              };
              console.log(temp);
              console.log(selectedRentalInfo);
            }}
          >
            선택 옵션 차량 검색
          </button>
        </div>
      </div>
    </div>
  );
}

export { HomeSearchPreferOption };
