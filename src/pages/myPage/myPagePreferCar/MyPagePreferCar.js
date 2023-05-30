import { React, useState } from "react";
import { Alert } from "../popUp/Alert";
import { DefaultItem } from "./internalComponents/DefaultItem";

function MyPagePreferCar() {
  /* 사용자 선호 차량 객체 */
  let [preferInfo, setPreferInfo] = useState({
    차량크기: ["준중형", "중형", "대형"],
    유종: ["전기", "휘발유", "경유"],
    구동기: ["자동", "수동"],
    최소인원: ["5인승", "7인승", "11인승"],
  });

  /* 정보 객체의 title 들만 빼낸 배열 */
  let titles = Object.keys(preferInfo);

  /* Alert 를 보여줄지 숨길지를 결정하는 state */
  let [showAlert, setShowAlert] = useState(false);
  let [alertMsg, setAlertMsg] = useState("");

  return (
    <>
      <div className="w-full h-[45vh] min-h-[450px] mt-20">
        {/* 선호 차량 타이틀 */}
        <div className="flex items-center justify-center w-[15%] h-12 text-xl font-bold border-2 border-dashed rounded-md border-slate-400">
          선호 차량
        </div>

        {/* 선호 차량 옵션들 */}
        <div className="flex flex-col justify-between items-center w-full h-[80%] bg-white border-4 rounded-md border-slate-400 mt-5 px-28 py-10">
          {/* 각 옵션 제목 & 목록 */}
          <div className="flex justify-between w-full h-[50%]">
            {/* 총 4개의 옵션 */}
            {titles.map((title, index) => {
              return (
                <DefaultItem
                  title={title}
                  contents={preferInfo[title]}
                  key={index}
                />
              );
            })}
          </div>

          {/* 변경 저장 버튼 */}
          <button
            className="flex items-center justify-center w-full bg-blue-300 rounded-lg h-[18%] font-bold text-lg"
            onClick={() => {
              /* alert 2초 동안 호출 */
              setAlertMsg("정보가 변경되었습니다."); // 알림창 메시지
              setShowAlert(true); // 알림창 켜기
              setTimeout(() => setShowAlert(false), 2000); // 2초 뒤 종료
            }}
          >
            변경 저장
          </button>
        </div>
      </div>

      {/* 알림창 제어 */}
      {showAlert && <Alert msg={alertMsg} />}
    </>
  );
}

export { MyPagePreferCar };
