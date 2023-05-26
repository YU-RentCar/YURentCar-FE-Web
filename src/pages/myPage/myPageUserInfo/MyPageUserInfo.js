import React from "react";
import { useState } from "react";
import DefaultItem from "./internalComponents/DefaultItem";
import ChangeNickname from "./internalComponents/ChangeNickname";

/**
 *
 * @param {Object} userInfo 최상위 컴포넌트에서 받아온 사용자의 기본 정보 객체
 * @returns
 */
function MyPageUserInfo(props) {
  // 닉네임 변경하기 전과 변경을 하는 과정의 type
  let [type, setType] = useState("default");
  // type 에 따라 다른 컴포넌트를 호출
  let ContentComponent = type === "default" ? DefaultItem : ChangeNickname;

  let titles = Object.keys(props.userInfo);

  return (
    <>
      <div className="w-full h-[70vh] min-h-[720px] mt-20">
        {/* 기본 정보 타이틀 */}
        <div className="flex items-center justify-center w-[15%] h-12 text-xl font-bold border-2 border-dashed rounded-md border-slate-400">
          기본 정보
        </div>
        {/* 기본 정보들 */}
        <div className="flex flex-col justify-around items-center w-full h-[90%] bg-white border-4 rounded-md border-slate-400 px-28 py-5 mt-5">
          {titles.map((title) => {
            return title !== "닉네임" ? (
              // 닉네임이 아닌 경우는 기본 틀 (변경 버튼이 없음)
              <DefaultItem
                title={title}
                content={props.userInfo[title]}
                infoType={"hidden"}
              />
            ) : (
              // 닉네임인 경우 (변경 버튼 추가)
              // 버튼을 누름에 따라 바뀌는 상황 (변경 전 <-> 변경 과정)
              <ContentComponent
                title={title}
                content={props.userInfo[title]}
                infoType={"text-xl font-bold underline text-slate-400"}
                setType={setType}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MyPageUserInfo;
