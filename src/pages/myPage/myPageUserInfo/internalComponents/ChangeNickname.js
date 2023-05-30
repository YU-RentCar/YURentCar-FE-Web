import { React, useState } from "react";

/**
 * 닉네임을 변경하는 경우
 * @param {string} props.title 부모에게서 받아온 어떤 정보인지 title
 * @param {string} props.content 부모에게서 받아온 title 에 맞는 내용
 * @param {string} props.isNick 부모에게서 받아온 정보가 닉네임인지 여부
 * @param {setter} props.isChange 부모에게 받아온 기존 닉네임 보여주기 or 닉네임 변경 상태 변경 useState setter
 * @param {setter} props.setNick 부모에게서 받아온 새로운 닉네임 저장 useState setter
 * @param {setter} props.alertMsg 부모에게서 받아온 알림창에 띄울 메시지 setter
 * @param {setter} props.showAlert 부모에게서 받아온 알림창 띄울지 여부 결정 setter
 * @returns
 */
function ChangeNickname(props) {
  /* 최종적으로 변경을 하기 전에 입력된 새로운 닉네임을 저장해둘 state */
  let [tmpNick, setTmpNick] = useState("");

  return (
    <div className="flex flex-col justify-between w-full h-1/4">
      {/* 정보 타이틀 (닉네임) */}
      <div className="text-xl font-bold text-slate-400">{props.title}</div>

      {/* 기존 닉네임 정보 */}
      <div className="flex flex-col justify-between w-full px-10 h-[60%]">
        <div className="flex justify-between w-[40%]">
          <div className="w-[40%] text-lg font-bold">기존 닉네임</div>
          <div className="w-[60%] text-lg font-bold text-right">
            {props.content}
          </div>
        </div>

        {/* 새로운 닉네임 입력 양식 */}
        <div className="flex justify-between w-full h-1/2">
          <div className="flex justify-between items-center w-[40%]">
            <div className="w-[40%] text-lg font-bold">새로운 닉네임</div>
            <input
              type="text"
              className="w-[60%] text-lg font-bold text-right bg-slate-200"
              onChange={(e) => {
                setTmpNick(e.target.value); // 임시 저장
              }}
            />
          </div>
          <div className="flex justify-around w-[30%]">
            {/* 새로운 닉네임 중복 확인 버튼 */}
            <button
              className="w-[40%] h-[80%] bg-blue-300 font-bold text-xs border-2 rounded-lg flex justify-center items-center"
              onClick={() => {
                /* alert 2초 동안 호출 */
                props.alertMsg("중복된/중복되지 않은 닉네임 입니다."); // 알림창 메시지
                props.showAlert(true); // 알림창 켜기
                setTimeout(() => props.showAlert(false), 2000); // 2초 뒤 종료
              }}
            >
              닉네임 중복 확인
            </button>

            {/* 최종 변경 적용 버튼 */}
            <button
              className="w-[40%] h-[80%] bg-rose-500 font-bold text-xs text-white border-2 rounded-lg flex justify-center items-center"
              onClick={() => {
                /* alert 2초 동안 호출 */
                props.setNick(tmpNick); // 최종 닉네임 변경
                props.alertMsg("닉네임이 변경되었습니다."); // 알림창 메시지
                props.showAlert(true); // 알림창 켜기
                setTimeout(() => props.showAlert(false), 2000); // 2초 뒤 종료
                props.isChange(false); // default 화면으로
              }}
            >
              닉네임 변경
            </button>
          </div>
        </div>
      </div>
      <hr className="w-full border-black" />
    </div>
  );
}

export { ChangeNickname };
