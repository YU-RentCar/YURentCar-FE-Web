import { React, useEffect } from "react";
import { useSelector } from "react-redux";

/**
 * 기본적으로 정보들을 보여줄 형태
 * @param {string} props.title 부모에게서 받아온 어떤 정보인지 title
 * @param {setter} props.isChange 부모에게 받아온 기존 닉네임 보여주기 or 닉네임 변경 상태 변경 useState setter
 * @returns
 */
function DefaultItem(props) {
  const infoTitle = {
    이름: "name",
    닉네임: "nickname",
    이메일: "username",
    전화번호: "phoneNumber",
  };

  /* 유저 정보 객체 */
  let userInfo = useSelector((state) => state.userInfo);

  /* 닉네임이 아닌 경우에는 변경 버튼 숨기기 */
  useEffect(() => {
    if (props.title !== "닉네임")
      document.querySelector("#" + props.title).classList.add("hidden");
  });

  return (
    <div className="flex flex-col justify-between w-full h-1/6">
      {/* 정보 타이틀 */}
      <div className="text-xl font-bold text-slate-400">{props.title}</div>

      <div className="flex items-center justify-between w-full">
        {/* 정보 내용 */}
        <div className="text-xl font-bold hello">
          {userInfo[infoTitle[props.title]]}
        </div>

        {/* 닉네임이라면 나타날 변경 버튼 */}
        <button
          id={props.title}
          className="text-xl font-bold underline text-slate-400"
          onClick={() => {
            props.isChange(true);
          }}
        >
          변경
        </button>
      </div>
      <hr className="w-full border-black" />
    </div>
  );
}

export { DefaultItem };
