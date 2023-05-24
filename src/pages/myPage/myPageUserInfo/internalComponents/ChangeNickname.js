import React from "react";

/**
 *
 * @param {string} props.title 부모의 부모부터 받아온 어떤 정보인지 title
 * @param {string} props.content 부모의 부모부터 받아온 title 에 맞는 내용
 * @param {string} props.infoType 부모의 부모에게 받아온 title 에 따른 css
 * @param {string} props.setType 부모에게 받아온 현재 상황에 따른 type useState setter
 * @returns
 */
function ChangeNickname(props) {
  return (
    <>
      {/* 닉네임을 변경하는 과정 */}
      <div className="flex flex-col justify-between w-full h-1/4">
        {/* 정보 타이틀 (닉네임) */}
        <div className="text-xl font-bold text-slate-400">{props.title}</div>
        <div className="flex flex-col justify-between w-full px-10 h-[60%]">
          <div className="flex justify-between w-[40%]">
            {/* 기존 닉네임 정보 */}
            <div className="w-[40%] text-lg font-bold">기존 닉네임</div>
            <div className="w-[60%] text-lg font-bold text-right">
              {props.content}
            </div>
          </div>
          <div className="flex justify-between w-full h-1/2">
            <div className="flex justify-between items-center w-[40%]">
              {/* 새로운 닉네임 입력 양식 */}
              <div className="w-[40%] text-lg font-bold">새로운 닉네임</div>
              <input
                type="text"
                className="w-[60%] text-lg font-bold text-right bg-slate-200"
              />
            </div>
            <div className="flex justify-around w-[30%]">
              {/* 새로운 닉네임 중복 확인 버튼 */}
              <div className="w-[40%] h-[80%] bg-blue-300 font-bold text-xs border-2 rounded-lg flex justify-center items-center">
                닉네임 중복 확인
              </div>
              {/* 최종 변경 적용 버튼 */}
              <div
                className="w-[40%] h-[80%] bg-rose-500 font-bold text-xs text-white border-2 rounded-lg flex justify-center items-center"
                onClick={() => {
                  props.setType("default");
                }}
              >
                닉네임 변경
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full border-black" />
      </div>
    </>
  );
}

export default ChangeNickname;
