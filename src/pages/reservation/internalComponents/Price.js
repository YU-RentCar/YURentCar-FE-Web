import { useSelector } from "react-redux";

/**
 * 최종 결제 금액
 * @returns
 */
function Price() {
  /* 현재 금액 */
  let resvInfo = useSelector((state) => state.resvInfo);

  return (
    <>
      <div className="w-[45%] h-full border-2 border-blue-500 rounded-lg flex flex-col justify-around items-center font-bold">
        <div className="flex items-center justify-between w-4/5">
          {/* 차량 가격 */}
          <del className="text-rose-500 ">300000 원</del>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"->"}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="text-sky-300">200000 원</span>
        </div>
        <div className="flex items-center justify-center text-sm">30% 할인</div>

        {/* 보험료 계산 */}
        <div className="flex items-center justify-between w-4/5 text-orange-500">
          <span>보험료</span>
          <span>+{resvInfo.totalPrice - 200000} 원</span>
        </div>
        {/* 사용 포인트 계산 */}
        <div className="flex items-center justify-between w-4/5 text-sky-300">
          <span>포인트 사용</span>
          <span>-{resvInfo.usePoint} 원</span>
        </div>
        <hr className="w-4/5 border-2" />

        {/* 최종 결제 금액*/}
        <div className="flex items-center justify-between w-4/5 text-rose-500">
          <span>총 비용</span>
          <span>{resvInfo.totalPrice - resvInfo.usePoint} 원</span>
        </div>
      </div>
    </>
  );
}

export { Price };
