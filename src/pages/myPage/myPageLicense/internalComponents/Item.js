import { React } from "react";

/**
 *
 * @param {string} props.title 부모의 부모부터 받아온 어떤 정보인지 title
 * @param {string} props.content 부모의 부모부터 받아온 title 에 맞는 내용
 * @returns
 */
function Item(props) {
  return (
    <>
      <div className="flex flex-col justify-between w-full h-1/6">
        {/* 정보 타이틀 */}
        <div className="text-xl font-bold text-slate-400">{props.title}</div>
        {/* 정보 내용 */}
        <div className="text-xl font-bold">{props.content}</div>
        <hr className="w-full border-black" />
      </div>
    </>
  );
}

export { Item };
