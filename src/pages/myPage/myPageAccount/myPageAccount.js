import React from "react";

function MyPageAccount() {
  return (
    <>
      <div className="w-full mt-20 h-fit">
        {/* 계정 관리 타이틀 */}
        <div className="flex items-center justify-between w-full h-12">
          <div className="flex items-center justify-center w-[15%] h-full text-xl font-bold border-2 border-dashed rounded-md border-slate-400">
            계정 관리
          </div>
        </div>
        {/* 계정 관리 */}
        <div className="flex flex-col justify-around items-center w-full h-[25vh] bg-white border-4 rounded-md border-slate-400 px-28 py-5 mt-5">
          <div className="flex flex-col justify-between w-full h-1/3">
            <div className="flex justify-between w-full h-[60%]">
              {/* 회원 탈퇴 타이틀 */}
              <div className="flex items-center justify-center text-xl font-bold text-slate-400">
                회원 탈퇴
              </div>
              {/* 탈퇴 버튼 */}
              <div className="w-[15%] flex justify-center items-center text-xl font-bold border-blue-300 border-4 rounded-md bg-slate-100 text-rose-500">
                탈퇴하기
              </div>
            </div>
            <hr className="w-full border-black" />
          </div>
          <div className="flex flex-col justify-between w-full h-1/3">
            <div className="flex justify-between w-full h-[60%]">
              {/* 로그아웃 타이틀 */}
              <div className="flex items-center justify-center text-xl font-bold text-slate-400">
                로그아웃
              </div>
              {/* 로그아웃 버튼 */}
              <div className="w-[15%] flex justify-center items-center text-xl font-bold border-blue-300 border-4 rounded-md bg-slate-100 text-rose-500">
                로그아웃
              </div>
            </div>
            <hr className="w-full border-black" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyPageAccount;
