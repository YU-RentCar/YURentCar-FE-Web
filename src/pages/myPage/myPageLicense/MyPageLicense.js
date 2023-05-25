import React from "react";
import Item from "./internalComponents/Item";

/**
 *
 * @param {Object} licenseInfo 최상위 컴포넌트에서 받아온 사용자의 면허 정보 객체
 * @returns
 */
function MyPageUserInfo(props) {
  let titles = Object.keys(props.licenseInfo);

  return (
    <>
      <div className="w-full mt-20 h-fit">
        {/* 면허 정보 타이틀 */}
        <div className="flex items-center justify-between w-full h-12">
          <div className="flex items-center justify-center w-[15%] h-full text-xl font-bold border-2 border-dashed rounded-md border-slate-400">
            면허 정보
          </div>
          {/* 새로운 면허 인증 버튼 */}
          <div className="flex items-center justify-center w-[15%] h-full text-xl font-bold bg-slate-100 border-slate-400 border-4 rounded-md">
            새 면허 인증
          </div>
        </div>
        {/* 기본 정보들 */}
        <div className="flex flex-col justify-around items-center w-full h-[60vh] bg-white border-4 rounded-md border-slate-400 px-28 py-5 mt-5">
          {titles.map((title) => {
            return <Item title={title} content={props.licenseInfo[title]} />;
          })}
        </div>
      </div>
    </>
  );
}

export default MyPageUserInfo;
