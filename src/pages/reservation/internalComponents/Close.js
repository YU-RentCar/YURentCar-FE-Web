import { useDispatch, useSelector } from "react-redux";
import {
  changeState,
  decreaseCount,
  subDriver,
  deleteInfo,
} from "../../../store";

/**
 *
 * @param {number} props.idx 부모에게 받아온 카드 번호
 * @returns
 */
function Close(props) {
  /* 운전자 수, 운전자 정보 */
  let driverCount = useSelector((state) => state.driverCount);
  let driverInfo = useSelector((state) => state.driverInfo);
  let dispatch = useDispatch();

  return (
    <>
      <div
        className="w-full h-[80px] border-black border-2 rounded-md flex justify-between items-center px-10 mt-5"
        key={props.index}
      >
        <div className="text-xl font-bold">{driverInfo[props.idx]["이름"]}</div>
        <div className="w-[300px] h-3/5 flex items-center justify-around">
          {/* 운전자 삭제 버튼 */}
          <button
            className="w-[120px] h-full bg-rose-500 text-white font-bold text-lg rounded-md"
            onClick={() => {
              if (driverCount - 1 <= 0) {
                /* 1명 이상이어야함을 알림 */
                props.setAlertMsg("최소 1명의 운전자가 등록되어야 합니다.");
                props.setShowAlert(true);
                setTimeout(() => props.setShowAlert(false), 2000);
              } else {
                /* 운전자 정보를 삭제 후 운전자 수 -1 */
                dispatch(subDriver(props.idx));
                dispatch(deleteInfo(props.idx));
                dispatch(decreaseCount());
              }
            }}
          >
            운전자 제외
          </button>

          {/* 카드 펴기 버튼 */}
          <button
            className="w-[120px] h-full bg-sky-300 font-bold text-lg rounded-md"
            onClick={() => {
              /* 카드 상태 변경 */
              dispatch(changeState(props.idx));
            }}
          >
            카드 펴기
          </button>
        </div>
      </div>
    </>
  );
}

export { Close };
