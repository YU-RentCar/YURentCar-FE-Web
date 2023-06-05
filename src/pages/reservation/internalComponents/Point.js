import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserPoint } from "../../../api/ReservationAxios";
import { changeUsePoint } from "../../../store";

/**
 * 사용자 포인트 사용
 * @returns
 */
function Point() {
  /* 현재 사용자 포인트 */
  let [userPoint, setUserPoint] = useState(0);
  let [usingPoint, setUsingPoint] = useState(0);
  let dispatch = useDispatch();

  /* 사용자 포인트 조회 */
  useEffect(() => {
    (async () => {
      await getUserPoint()
        .then(function (response) {
          setUserPoint(response.data);
        })
        .catch(function (error) {
          console.log(error.response);
        });
    })();
  }, []);

  return (
    <>
      <div className="w-[840px] h-fit mx-auto mt-20 flex flex-col justify-between items-center">
        <div className="w-1/3 h-[70px] border-dashed border-4 border-slate-200 rounded-lg flex justify-center items-center font-bold">
          포인트 사용
        </div>
        <div className="w-full h-[150px] border-2 border-blue-500 rounded-lg flex justify-around items-center mt-10">
          <div className="flex flex-col justify-center items-center w-[45%] h-full font-bold text-xl">
            {/* 현재 사용자 보유 포인트 */}
            <div className="flex items-center justify-center w-full h-1/2">
              사용 가능 포인트 : {userPoint}점
            </div>

            {/* 사용 후 남는 포인트 */}
            <div className="flex items-center justify-center w-full h-1/2">
              남는 포인트 : {userPoint - usingPoint}점
            </div>
          </div>

          <div className="flex flex-col justify-between items-center w-[45%] h-4/5 font-bold text-xl">
            <div className="flex items-center justify-between w-full h-2/5">
              {/* 포인트 사용 */}
              <div className="flex items-center justify-center w-1/2 h-full">
                포인트 사용 :{" "}
              </div>

              {/* 사용할 포인트 */}
              <input
                id="point"
                className="w-1/2 h-full text-center rounded-md placeholder:italic bg-slate-300"
                type="number"
                placeholder="숫자만 입력"
              ></input>
            </div>

            {/* 사용 포인트 적용 */}
            <button
              className="flex items-center justify-center w-full text-lg text-white rounded-md h-2/5 bg-rose-500"
              onClick={() => {
                let using = Number(
                  document.getElementById("point").ariaValueNow
                );
                setUsingPoint(using);
                dispatch(changeUsePoint(using));
              }}
            >
              적용
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export { Point };
