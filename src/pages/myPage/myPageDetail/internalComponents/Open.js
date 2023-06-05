import { useState } from "react";

/**
 *
 * @param {number} props.idx 부모에게 받아온 카드 번호
 * @param {array} props.showCard 부모에게 받아온 보여지는 상태 state
 * @param {setter} props.setShowCard 부모에게 받아온 카드 보여지는 상태 state setter
 * @param {string} props.name 부모에게 받아온 운전자 이름
 * @returns
 */
function Open(props) {
  /* 면허 필요 정보(placeholder 사용) */
  let [licenseInfo, setLicenseInfo] = useState({
    이름: "",
    생년월일: "2023-05-01",
    전화번호: "010-0000-0000",
    면허종류: "1종 보통",
    면허번호: "00-0000000-00-00",
    발급일자: "2023-05-01",
    만료일자: "2023-05-31",
  });

  return (
    <>
      <div className="w-full px-10 py-5 mt-5 border-2 border-blue-500 rounded-lg h-fit">
        <div className="flex justify-end w-full h-[50px]">
          {/* 운전자 카드 접기 버튼 */}
          <button
            className="w-1/6 h-full text-lg font-bold text-white rounded-md bg-rose-500"
            onClick={() => {
              /* 카드 상태 변경 */
              let newArr = [...props.showCard];
              newArr[props.idx] = false;
              props.setShowCard(newArr);
            }}
          >
            카드 접기
          </button>
        </div>

        {/* 필요 내용 */}
        {Object.keys(licenseInfo).map((item, index) => {
          return (
            <div className="w-full h-[100px] mt-5" key={index}>
              <div className="text-xl font-bold">{item}</div>
              <div className="w-full h-[50px] rounded-lg bg-slate-300 px-5 mt-3 font-bold flex items-center">
                {item === "이름" ? props.name : licenseInfo[item]}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export { Open };
