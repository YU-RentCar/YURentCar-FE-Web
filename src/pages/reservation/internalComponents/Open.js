import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeState, changeInfo } from "../../../store";

/**
 *
 * @param {number} props.idx 부모에게 받아온 카드 번호
 * @returns
 */
function Open(props) {
  /* 면허 필요 정보(placeholder 사용) */
  let [licenseInfo, setLicenseInfo] = useState({
    이름: "홍길동",
    생년월일: "2023-05-01",
    전화번호: "010-0000-0000",
    면허종류: "1종 보통",
    면허번호: "00-0000000-00-00",
    발급일자: "2023-05-01",
    만료일자: "2023-05-31",
  });

  /* 운전자 정보 */
  let driverInfo = useSelector((state) => state.driverInfo);
  let dispatch = useDispatch();

  return (
    <>
      <div className="w-full px-10 py-5 mt-5 border-2 border-blue-500 rounded-lg h-fit">
        <div className="flex justify-end w-full h-[50px]">
          {/* 운전자 카드 접기 버튼 */}
          <button
            className="w-1/6 h-full text-lg font-bold text-white rounded-md bg-rose-500"
            onClick={() => {
              dispatch(changeState(props.idx));
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
              <input
                className="w-full h-[50px] rounded-lg bg-slate-300 px-5 placeholder:italic mt-3 font-bold"
                placeholder={licenseInfo[item]}
                type="text"
                defaultValue={driverInfo[props.idx][item]}
                onChange={(e) => {
                  /* 운전자 정보 변경 반영 */
                  let info = {
                    1: props.idx,
                    2: item,
                    3: e.target.value,
                  };
                  dispatch(changeInfo(info));
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export { Open };
