import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeNickname } from "../../../../store.js";
import { checkNickname, changeNick } from "../../../../api/MyPageAxios.js";

/**
 * 닉네임을 변경하는 경우
 * @param {string} props.title 부모에게서 받아온 어떤 정보인지 title
 * @param {setter} props.isChange 부모에게 받아온 기존 닉네임 보여주기 or 닉네임 변경 상태 변경 useState setter
 * @param {setter} props.alertMsg 부모에게서 받아온 알림창에 띄울 메시지 setter
 * @param {setter} props.showAlert 부모에게서 받아온 알림창 띄울지 여부 결정 setter
 * @returns
 */
function ChangeNickname(props) {
  /* 유저 정보 객체 */
  let userInfo = useSelector((state) => state.userInfo);
  let dispatch = useDispatch();

  /* 최종적으로 변경을 하기 전에 입력된 새로운 닉네임을 저장해둘 state */
  let [tmpNick, setTmpNick] = useState("");

  /* 최종적으로 변경할 닉네임 state */
  let [newNick, setNewNick] = useState("");

  /* 닉네임 중복 확인 여부를 저장해둘 state */
  /* 0 = 체크 안함, 1 = 기존과 동일, 2 = 중복o, 3 = 중복x */
  let [dupCheck, setDupCheck] = useState(0);

  /* Alert 함수 */
  let getAlert = (msg) => {
    props.alertMsg(msg); // 알림창 메시지
    props.showAlert(true); // 알림창 켜기
    setTimeout(() => props.showAlert(false), 2000); // 2초 뒤 종료
  };

  return (
    <div className="flex flex-col justify-between w-full h-1/4">
      {/* 정보 타이틀 (닉네임) */}
      <div className="text-xl font-bold text-slate-400">{props.title}</div>

      <div className="flex flex-col justify-between w-full px-10 h-[60%]">
        <div className="flex justify-between w-full h-1/2">
          {/* 기존 닉네임 정보 */}
          <div className="flex justify-between w-[40%]">
            <div className="w-[40%] text-lg font-bold">기존 닉네임</div>
            <div className="w-[60%] text-lg font-bold text-right">
              {userInfo.nickname}
            </div>
          </div>

          {/* 닉네임 변경 취소 */}
          <button
            className="w-[12%] h-[80%] flex justify-center items-center font-bold text-xs border-2 rounded-lg bg-slate-400 mr-3"
            onClick={() => {
              props.isChange(false);
            }}
          >
            변경 취소
          </button>
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
              onClick={async () => {
                if (tmpNick === "") {
                  /* 비어있는 닉네임일 때 */
                  getAlert("닉네임을 입력해주세요.");
                } else if (tmpNick === props.content) {
                  /* 기존과 동일할 때 */
                  getAlert("기존과 동일한 닉네임입니다.");
                } else {
                  /* 중복되었는지 아닌지 확인 필요 */
                  /* 중복 확인 여부에 따른 setDupCheck */
                  await checkNickname(tmpNick)
                    .then((response) => {
                      if (response.data) {
                        setDupCheck(2);
                        getAlert("중복된 닉네임 입니다.");
                      } else {
                        setDupCheck(3);
                        setNewNick(tmpNick);
                        getAlert("중복되지 않은 닉네임 입니다.");
                      }
                    })
                    .catch((error) => console.log(error.response));
                }
              }}
            >
              닉네임 중복 확인
            </button>

            {/* 최종 변경 적용 버튼 */}
            <button
              className="w-[40%] h-[80%] bg-rose-500 font-bold text-xs text-white border-2 rounded-lg flex justify-center items-center"
              onClick={async () => {
                if (dupCheck === 0) {
                  /* 0 = 닉네임 중복 검사 수행 x */
                  getAlert("닉네임 중복 검사를 진행해주세요.");
                } else if (dupCheck === 3) {
                  /* 3 = 닉네임 변경 가능 */
                  if (tmpNick !== newNick) {
                    getAlert(
                      "마지막 중복 확인과 다른 닉네임이 입력되었습니다."
                    );
                  } else {
                    await changeNick(newNick)
                      .then((response) => {
                        getAlert("닉네임을 변경했습니다.");
                        dispatch(changeNickname(newNick));
                        props.isChange(false);
                      })
                      .catch((error) => {
                        console.log(error.response);
                        getAlert("닉네임 변경에 실패했습니다.");
                      });
                  }
                } else {
                  /* 1,2 = 닉네임 변경 불가 */
                  getAlert("중복 검사를 먼저 수행해주세요.");
                }
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
