import { ResvCard } from "./ResvCard";

/**
 * 후기 작성 팝업
 * @param {setter} props.showReview 부모에게 받아온 후기 작성 팝업 제어 state setter
 * @param {object} props.item 부모에게 받아온 후기 작성의 대상 객체
 * @param {setter} props.alertMsg 부모에게서 받아온 알림창에 띄울 메시지 setter
 * @param {setter} props.showAlert 부모에게서 받아온 알림창 띄울지 여부 결정 setter
 * @returns
 */
function Review(props) {
  if (props.canGetPoint === 0) {
    document.getElementById("reviewBtn").textContent = "작성 완료";
  }
  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-center w-full h-full">
      <div className="fixed w-full h-full opacity-25 bg-slate-600"></div>
      <div className="fixed w-[60%] m-auto bg-white border-blue-300 border-2 rounded-[10px] h-[700px] flex justify-around items-center">
        <div className="w-[30%] h-[90%]">
          {/* 후기 작성 대상을 카드뷰로 */}
          <ResvCard item={props.item} width="w-full" height="h-[60%]" />

          {/* 작성 완료 버튼 */}
          <button
            id="reviewBtn"
            className="w-full font-bold text-white rounded-lg h-[10%] bg-rose-500 mt-5"
            onClick={() => {
              /* alert 2초 동안 호출 */
              props.alertMsg("후기가 작성되었습니다."); // 알림창 메시지
              props.showAlert(true); // 알림창 켜기
              props.showReview(false); // 리뷰창 끄기
              setTimeout(() => props.showAlert(false), 2000); // 2초 뒤 종료
            }}
          >
            작성 완료 <br /> +500P
          </button>

          {/* 취소 버튼 (클릭시 팝업 off) */}
          <button
            className="w-full font-bold rounded-lg h-[7%] bg-slate-300 mt-5"
            onClick={() => props.showReview(false)}
          >
            취소
          </button>
        </div>
        <div className="w-[65%] h-[90%] flex flex-col items-center justify-around">
          {/* 후기 제목 */}
          <input
            className="w-full border-2 rounded-lg h-[10%] border-slate-300 font-bold text-lg px-5 placeholder:italic placeholder:text-slate-500"
            placeholder="후기 제목을 입력해주세요."
            type="text"
          ></input>

          {/* 후기 내용 */}
          <textarea
            placeholder="후기를 작성해주세요."
            className="w-full border-2 rounded-lg h-[85%] border-slate-300 font-bold text-lg p-5 placeholder:italic placeholder:text-slate-500 overflow-y-scroll"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export { Review };
