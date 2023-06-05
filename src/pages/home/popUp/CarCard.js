import { React } from "react";
import ExCar from "../../../assets/ExCar.png";
import { getCarDetailInfo } from "../../../api/HomeAxios";

/**
 * 최근 본 차량 상세 정보 카드뷰
 * @param {array} props.carInfo 부모에게서 받아온 사용자가 최근 본 특정 차량의 정보 객체
 * @param {setter} props.setIsPopUpShow 부모에게서 받아온 팝업이 보이는지 관리하는 state의 setter
 * @param {number} props.idx 부모에게서 받아온 현재 리스트의 번호
 * @param {setter} props.setSeletedIdx 부모에게서 받아온 선택된 리스트의 정보를 상위 컴포넌트에 전달하는 setter
 * @param {setter} props.setCarDetailInfoObj 부모에게서 받아온 팝업 내용을 업데이트하는 setter
 */
function CarCard(props) {
  return (
    <>
      <div className="flex items-center justify-center w-1/3 rounded-lg h-1/2">
        <div
          className="w-[90%] h-[90%] bg-sky-100 rounded-md flex flex-col justify-around items-center"
          onClick={(e) => {
            e.stopPropagation();
            props.setIsPopUpShow(true);

            props.setSeletedIdx(props.idx);

            (async () => {
              await getCarDetailInfo(props.carInfo[1])
                .then((response) => {
                  props.setCarDetailInfoObj(response.data);
                })
                .catch((error) => {
                  console.log(error.response);
                });
            })();

            // 로컬스토리지에 없으면 null, 빈 배열로 초기화
            if (window.localStorage.getItem("carNum") === null) {
              window.localStorage.setItem("carNum", JSON.stringify([]));
            }

            // 역변환하여 우리가 아는 배열로 다시 바꿔온다.
            let prev = JSON.parse(window.localStorage.getItem("carNum"));

            // 이미 6개 있으면 제일 앞을 뺌
            if (prev.length === 6) {
              prev.shift();
            }

            // 새로운 차 번호를 배열 뒤에 넣는다.
            prev.push(props.carInfo[1]);

            // 로컬 스토리지에 배열을 저장
            window.localStorage.setItem("carNum", JSON.stringify(prev));
          }}
        >
          {/* 차량의 사진 */}
          <img src={ExCar} alt="ExCar" className="object-contain h-1/2"></img>

          {/* 차종, 차량 번호*/}
          <div className="w-[80%] h-[10%] flex justify-around">
            <div className="flex items-center justify-center h-full font-bold bg-blue-300 rounded-md w-fit min-w-[30%] text-sm">
              {props.carInfo[0]}
            </div>
            <div className="flex items-center justify-center h-full font-bold bg-blue-300 rounded-md w-fit min-w-[50%] text-sm">
              {props.carInfo[1]}
            </div>
          </div>

          {/* 총 주행 거리, 1일 렌트 비용 */}
          <div className="w-[80%] h-[10%] flex justify-around">
            <div className="h-full bg-blue-300 rounded-md w-fit min-w-[50%] flex justify-center items-center font-bold text-sm">
              총 {props.carInfo[2]}km
            </div>
            <div className="h-full bg-amber-500 rounded-md min-w-[40%] w-fit flex justify-center items-center font-bold text-sm">
              {props.carInfo[3]}원
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { CarCard };
