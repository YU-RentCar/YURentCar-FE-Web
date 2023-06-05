import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { DefaultItem } from "./internalComponents/DefaultItem";
import { ChangeNickname } from "./internalComponents/ChangeNickname";
import { Alert } from "../popUp/Alert";
import { changeUserInfo } from "../../../store.js";
import { getUserInfo } from "../../../api/MyPageAxios";

/**
 * 사용자의 기본 정보
 * @returns
 */
function MyPageUserInfo() {
  /* 사용자 기본 정보 객체 */
  let dispatch = useDispatch();

  /* 기존 닉네임 보여주기 OR 닉네임 변경 */
  let [isChange, setIsChange] = useState(false);
  let DefaultOrChange = isChange ? ChangeNickname : DefaultItem;

  /* Alert 를 보여줄지 숨길지를 결정하는 state, Alert 를 통해 보여줄 메시지 state */
  let [showAlert, setShowAlert] = useState(false);
  let [alertMsg, setAlertMsg] = useState("");

  /* 서버로부터 사용자 정보 전달 받음 */
  useEffect(() => {
    (async () => {
      await getUserInfo()
        .then((response) => {
          dispatch(changeUserInfo(response.data));
        })
        .catch((error) => {
          console.log(error.response);
        });
    })();
  }, []);

  return (
    <>
      <div className="w-full h-[70vh] min-h-[720px] mt-20">
        {/* 기본 정보 타이틀 */}
        <div className="flex items-center justify-center w-[15%] h-12 text-xl font-bold border-2 border-dashed rounded-md border-slate-400">
          기본 정보
        </div>

        {/* 기본 정보들 */}
        <div className="flex flex-col justify-around items-center w-full h-[90%] bg-white border-4 rounded-md border-slate-400 px-28 py-5 mt-5">
          {/* 이름 */}
          <DefaultItem title="이름" />

          {/* 닉네임 */}
          <DefaultOrChange
            title="닉네임"
            isChange={setIsChange}
            alertMsg={setAlertMsg}
            showAlert={setShowAlert}
          />

          {/* 전화번호 */}
          <DefaultItem title="전화번호" />

          {/* 이메일 */}
          <DefaultItem title="이메일" />
        </div>
      </div>

      {/* 알림창 제어 */}
      {showAlert && <Alert msg={alertMsg} />}
    </>
  );
}

export { MyPageUserInfo };
