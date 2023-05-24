import React from "react";

/**
 *
 * @param {string} props.title 부모의 부모부터 받아온 어떤 정보인지 title
 * @param {string} props.content 부모의 부모부터 받아온 title 에 맞는 내용
 * @param {string} props.infoType 부모의 부모에게 받아온 title 에 따른 css
 * @param {string} props.setType 부모에게 받아온 현재 상황에 따른 type useState setter
 * @returns
 */
function MyPageDefaultItem(props) {
  return (
    <>
      <div className="flex flex-col justify-between w-full h-1/6">
        {/* 정보 타이틀 */}
        <div className="text-xl font-bold text-slate-400">{props.title}</div>
        <div className="flex items-center justify-between w-full">
          {/* 정보 내용 */}
          <div className="text-xl font-bold">{props.content}</div>
          {/* 닉네임이라면 나타날 변경 버튼 */}
          <div
            className={props.infoType}
            onClick={() => {
              props.setType("changeNick");
            }}
          >
            변경
          </div>
        </div>
        <hr className="w-full border-black" />
      </div>
    </>
  );
}

export default MyPageDefaultItem;
