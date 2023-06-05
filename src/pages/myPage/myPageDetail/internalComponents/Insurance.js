import { useState, useEffect } from "react";

/**
 * 보험 정보
 * @returns
 */
function Insurance() {
  /* 보험 정보 */
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

  /* 보험 임의 선택 */
  useEffect(() => {
    let container = document.getElementById("" + 1);
    let child = container.firstChild;

    container.classList.remove("border-blue-500");
    container.classList.add("border-amber-500");
    child.classList.remove("text-sky-300");
    child.classList.add("text-amber-500");
  }, []);

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
