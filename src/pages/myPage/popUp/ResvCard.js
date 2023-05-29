/**
 * 예약 상세 정보 카드뷰
 * @param {object} props.item 부모에게 받아온 예약 상세 정보 객체
 * @param {string} props.width 부모에게 받아온 카드뷰의 너비
 * @param {string} props.height 부모에게 받아온 카드뷰의 높이
 * @returns
 */
function ResvCard(props) {
  /* 카드뷰에 적용된 스타일 */
  let cardStyle = `flex items-center justify-center rounded-lg ${props.width} ${props.height}`;

  return (
    <>
      <div className={cardStyle}>
        <div className="w-[90%] h-[90%] bg-sky-100 rounded-md flex flex-col justify-around items-center">
          {/* 차량의 사진 */}
          <img
            src={props.item["사진"]}
            alt="ExCar"
            className="object-contain h-1/2"
          ></img>

          {/* 지점, 예약 기간 */}
          <div className="w-[90%] h-[40%] flex flex-col items-center justify-around">
            {["지점", "시작", "종료"].map((title, index) => {
              return (
                <div
                  className="flex items-center justify-center px-3 text-sm font-bold bg-blue-300 rounded-md w-fit h-1/5"
                  key={index}
                >
                  {title} : {props.item[title]}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export { ResvCard };
