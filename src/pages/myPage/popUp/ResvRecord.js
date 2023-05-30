import { useState } from "react";
import { ResvCard } from "./ResvCard";
import { Review } from "./Review";
import Close from "../../../assets/Close.png";
import ExCar from "../../../assets/ExCar.png";

/**
 * 상세 내역 조회
 * @param {function} props.showPopUp 부모에게 받아온 팝업 제어 함수
 * @param {setter} props.alertMsg 부모에게서 받아온 알림창에 띄울 메시지 setter
 * @param {setter} props.showAlert 부모에게서 받아온 알림창 띄울지 여부 결정 setter
 * @returns
 */
function ResvRecord(props) {
  /* 예약 내역 상세 정보 */
  let [resvList, setResvList] = useState([
    {
      사진: ExCar,
      지점: "달서구지점",
      시작: "2023-05-01 / 08:00",
      종료: "2023-05-31 / 22:00",
    },
    {
      사진: ExCar,
      지점: "수성구지점",
      시작: "2023-05-01 / 08:00",
      종료: "2023-05-31 / 22:00",
    },
    {
      사진: ExCar,
      지점: "북구지점",
      시작: "2023-05-01 / 08:00",
      종료: "2023-05-31 / 22:00",
    },
    {
      사진: ExCar,
      지점: "서대구지점",
      시작: "2023-05-01 / 08:00",
      종료: "2023-05-31 / 22:00",
    },
  ]);

  /* 후기 작성 팝업 제어 state */
  let [review, setReview] = useState(false);

  /* 후기 작성의 대상이 될 아이템 state */
  let [reviewItem, setReviewItem] = useState({});

  return (
    <>
      <div className="fixed top-0 left-0 right-0 flex items-center justify-center w-full h-full">
        {/* 팝업 배경 (클릭시 팝업 off) */}
        <div
          className="fixed w-full h-full opacity-25 bg-slate-600"
          onClick={() => props.showPopUp(false)}
        ></div>

        <div className="fixed w-[60%] m-auto bg-white border-blue-300 border-2 rounded-[10px] h-[700px] flex justify-around items-center">
          {/* 상세 내역들 */}
          <div className="w-[90%] h-[90%] flex items-center flex-wrap overflow-y-scroll rounded-lg border-blue-300 border-2">
            {resvList.map((item, index) => {
              return (
                <div
                  className="flex flex-col items-center justify-between w-1/3 h-[60%]"
                  key={index}
                >
                  {/* 특정 정보 카드뷰 */}
                  <ResvCard item={item} width="w-full" height="h-full" />

                  {/* 해당 카드뷰에 대한 후기 작성 버튼 */}
                  <button
                    className="w-1/3 h-[10%] flex justify-center items-center bg-rose-500 rounded-lg text-white font-bold"
                    onClick={() => {
                      setReviewItem(item);
                      setReview(true);
                    }}
                  >
                    후기 작성
                  </button>
                </div>
              );
            })}
          </div>

          {/* 팝업 off 버튼 */}
          <div className="w-[5%] h-[90%]">
            <img
              src={Close}
              alt="close button"
              className="object-contain w-full"
              onClick={() => props.showPopUp(false)}
            ></img>
          </div>
        </div>
      </div>

      {/* 후기 작성 팝업 제어 */}
      {review && (
        <Review
          showReview={setReview}
          item={reviewItem}
          alertMsg={props.alertMsg}
          showAlert={props.showAlert}
        />
      )}
    </>
  );
}

export { ResvRecord };
