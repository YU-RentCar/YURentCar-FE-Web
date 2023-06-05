import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTotalPrice } from "../../../store";

/**
 * 보험 정보
 * @returns
 */
function Insurance() {
  /* 임시 보험 정보 */
  let [insurance, setInsurance] = useState([
    {
      name: "무보험",
      how: "전액부담",
      price: "+0원",
    },
    {
      name: "일반자차",
      how: "30만원 부담",
      price: "+15000원",
    },
    {
      name: "완전자차",
      how: "부담금 면제",
      price: "+30000원",
    },
  ]);
  // let dispatch = useDispatch();

  /* 보험 상품 클릭 이벤트 */
  let choiceInsurance = (idx) => {
    for (let i = 0; i < 3; i++) {
      let container = document.getElementById("" + i);
      let child = container.firstChild;
      if (i === idx) {
        container.classList.remove("border-blue-500");
        container.classList.add("border-amber-500");
        child.classList.remove("text-sky-300");
        child.classList.add("text-amber-500");
      } else {
        container.classList.remove("border-amber-500");
        container.classList.add("border-blue-500");
        child.classList.remove("text-amber-500");
        child.classList.add("text-sky-300");
      }
    }
  };

  return (
    <>
      <div className="w-[840px] h-[450px] mx-auto mt-20 rounded-lg border-2 border-blue-100 flex flex-col justify-around items-center">
        <div className="w-1/3 h-[70px] border-dashed border-4 border-slate-200 rounded-lg flex justify-center items-center font-bold">
          차량 종합 보험
        </div>
        <div className="w-[95%] h-[350px] flex justify-between items-center">
          {/* 보험들 */}
          {insurance.map((item, index) => {
            return (
              <div
                className="w-[30%] h-full flex flex-col justify-center items-center border-2 rounded-lg border-blue-500"
                id={index}
                key={index}
                onClick={() => {
                  choiceInsurance(index);
                  // dispatch(changeTotalPrice(Number(item["price"].substring(1,(item["price"].length-1)))));
                }}
              >
                {/* 각 보험 이름 */}
                <div className="text-3xl font-bold w-fit h-fit text-sky-300">
                  {item["name"]}
                </div>

                {/* 각 보험 부담 방식 */}
                <div className="mt-20 text-3xl font-bold text-center text-black w-fit h-fit">
                  {item["how"]}
                </div>

                {/* 각 보험료 */}
                <div className="mt-5 text-3xl font-bold text-black w-fit h-fit">
                  {item["price"]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export { Insurance };
