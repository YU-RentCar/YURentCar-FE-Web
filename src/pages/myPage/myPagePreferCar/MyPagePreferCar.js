import { React, useState } from "react";
import { Alert } from "../popUp/Alert";

function MyPagePreferCar() {
  /* 사용자 선호 차량 정보 */
  let [preferInfo, setPreferInfo] = useState({
    차량크기: ["소형", "준중형", "중형", "대형"],
    유종: ["휘발유", "경유", "수소", "전기"],
    트랜스미션: ["수동", "자동"],
  });

  /* 서버에 저장된 실제 사용자가 선호하는 차량 옵션 */
  let [userPrefer, setUserPrefer] = useState({
    carSizes: [false, false, false, true],
    minCount: 0,
    oilTypes: [false, false, false, false],
    transmissions: [false, false],
  });

  /* 정보 객체의 title 들만 빼낸 배열 */
  let infoTitles = Object.keys(preferInfo);
  let userTitles = Object.keys(userPrefer);

  /* Alert 를 보여줄지 숨길지를 결정하는 state */
  let [showAlert, setShowAlert] = useState(false);
  let [alertMsg, setAlertMsg] = useState("");

  return (
    <>
      <div className="w-full h-[60vh] min-h-[700px] mt-20">
        {/* 선호 차량 타이틀 */}
        <div className="flex items-center justify-center w-[15%] h-12 text-xl font-bold border-2 border-dashed rounded-md border-slate-400">
          선호 차량
        </div>

        {/* 선호 차량 옵션들 */}
        <div className="flex flex-col justify-between items-center w-full h-[80%] bg-white border-4 rounded-md border-slate-400 mt-5 px-28 py-10">
          {/* 각 옵션 제목 & 목록 */}
          <div className="flex flex-col justify-around items-center w-full h-[80%]">
            {/* 총 4개의 옵션 */}
            {infoTitles.map((title, index) => {
              return (
                <div
                  className="flex items-center justify-between w-full h-1/5"
                  key={index}
                >
                  {/* 옵션별 타이틀 */}
                  <div className="flex items-center justify-center w-1/6 text-lg font-bold bg-blue-300 rounded-lg h-4/5">
                    {title}
                  </div>
                  {/* 옵션별로 선택할 수 있는 항목들 */}
                  <div className="flex items-center justify-around w-4/5 h-4/5">
                    {Array.from(
                      { length: preferInfo[title].length },
                      (v, i) => i + 1
                    ).map((t, index) => {
                      return (
                        <div
                          className="flex items-center justify-center w-1/5 h-full text-lg font-bold border-2 border-blue-500 rounded-lg bg-sky-50"
                          key={index}
                        >
                          <input
                            type="checkbox"
                            defaultChecked={
                              userPrefer[userTitles[index]][t - 1]
                            }
                            className="w-[50%] h-[50%]"
                          />
                          <label className="flex items-center justify-start w-[40%]">
                            {preferInfo[title][t - 1]}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            <div className="flex items-center justify-between w-full h-1/5">
              {/* 유저가 직접 입력하는 탑승 가능 인원 */}
              <div className="flex items-center justify-center w-1/6 text-lg font-bold bg-blue-300 rounded-lg h-4/5">
                탑승 가능 인원
              </div>
              <div className="flex items-center justify-center w-4/5 text-lg font-bold h-4/5">
                {/* 인원 수 입력 양식 */}
                <input
                  type="number"
                  className="w-3/4 h-full text-center border-2 border-blue-500 rounded-lg"
                  defaultValue={userPrefer["minCount"]}
                ></input>
              </div>
            </div>
          </div>

          {/* 변경 저장 버튼 */}
          <button
            className="flex items-center justify-center w-full bg-blue-300 rounded-lg h-[15%] font-bold text-lg"
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
