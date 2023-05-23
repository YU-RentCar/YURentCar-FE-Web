import React, { useState } from "react";
import listShowIcon from "../../../../assets/listShowIcon.png";

/**
 * 날짜와 시간을 정하는 기능을 가진 컴포넌트
 * @param {string} props.width 부모에게서 받아온 width (tailwind 속성)
 * @param {string} props.legend 부모에게서 받아온 범례
 */
function TimeSelectForm(props) {
  const initSetting = props.width;
  let [isTimeClick, setIsTimeClick] = useState(false);

  return (
    <>
      <div className={initSetting}>
        <form className="flex">
          <fieldset className="border-[5px] border-dashed border-slate-200 p-3 w-full">
            <legend className="px-5 ml-8 text-[1.7rem] font-black text-slate-600">
              {props.legend}
            </legend>
            <div className="flex justify-around h-15 mt-[-15px]">
              {/* 첫번째 버튼 */}
              <div className="flex w-[50%] mr-5 justify-center items-center bg-sky-50 border-blue-500 border-[2px] rounded-full h-[60px]">
                <div className="flex justify-around w-4/5 ">
                  <div className="relative flex flex-row items-center justify-center w-2/3 text-xl font-extrabold">
                    {/* 날짜가 보이는 부분 */}
                    2023-05-08
                  </div>

                  <button className="flex items-center">
                    {/* 버튼을 통해 달력이 보이게 하는 부분 */}
                    <img
                      src={listShowIcon}
                      alt="날짜 선택"
                      className="object-contain h-[40px]"
                    ></img>
                  </button>
                </div>
              </div>

              <button className="flex w-[40%] justify-center items-center bg-sky-50 border-blue-500 border-[2px] rounded-full h-[60px]">
                <div className="flex justify-around w-4/5 ">
                  <div className="flex items-center justify-center w-2/3 text-xl font-extrabold">
                    {/* 날짜가 보이는 부분 */}
                    08:00
                  </div>

                  <button className="flex items-center">
                    {/* 버튼을 통해 시간 리스트가 보이게 하는 부분 */}
                    <img
                      src={listShowIcon}
                      alt="시간 선택"
                      className="object-contain h-[40px]"
                    ></img>
                  </button>
                </div>
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export { TimeSelectForm };
