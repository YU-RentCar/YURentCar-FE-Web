import { React, useState } from "react";
import { Item } from "./internalComponents/Item";

/**
 * 사용자 면허 정보
 * @returns
 */
function MyPageLicense() {
  /* 사용자 면허 정보 */
  let [licenseInfo, setLicenseInfo] = useState({
    종류: "1종 보통",
    번호: "00-00-000000-00",
    발급일자: "2023-01-01",
    만료일자: "2023-12-31",
  });

  /* 정보 객체의 title 들만 빼낸 배열 */
  let titles = Object.keys(licenseInfo);

  return (
    <>
      <div className="w-full mt-20 h-[70vh] min-h-[720px]">
        {/* 면허 정보 타이틀 */}
        <div className="flex items-center justify-between w-full h-12">
          <div className="flex items-center justify-center w-[15%] h-full text-xl font-bold border-2 border-dashed rounded-md border-slate-400">
            면허 정보
          </div>

          {/* 새로운 면허 인증 버튼 */}
          <button className="flex items-center justify-center w-[15%] h-full text-xl font-bold bg-slate-100 border-slate-400 border-4 rounded-md">
            새 면허 인증
          </button>
        </div>

        {/* 기본 정보들 */}
        <div className="flex flex-col justify-around items-center w-full h-[90%] bg-white border-4 rounded-md border-slate-400 px-28 py-5 mt-5">
          {titles.map((title, index) => {
            return (
              /* 각각의 정보들을 띄워줄 Item */
              <Item title={title} content={licenseInfo[title]} key={index} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export { MyPageLicense };
