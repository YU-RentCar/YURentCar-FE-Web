import { CarInfo } from "./internalComponents/CarInfo";
import { CarSpec } from "./internalComponents/CarSpec";
import { RepairRecord } from "./internalComponents/RepairRecord";
import { AccidentRecord } from "./internalComponents/AccidentRecord";
import { Insurance } from "./internalComponents/Insurance";
import { Driver } from "./internalComponents/Driver";
import { Point } from "./internalComponents/Point";
import { Price } from "./internalComponents/Price";
import { Resv } from "./internalComponents/Resv";

/**
 *
 * @param {setter} props.setShowDetail 부모에게 받아온
 * @returns
 */
function MyPageDetail(props) {
  return (
    <>
      <div className="w-[1200px] h-fit bg-white mx-auto">
        {/* 차량 기본 정보 */}
        <div className="w-[95%] h-[300px] flex justify-between items-center mx-auto py-5">
          <CarInfo />
        </div>
        <div className="w-[95%] h-fit mx-auto py-5 mt-5 border-2 border-blue-500 rounded-lg">
          {/* 차량 제원 정보 */}
          <CarSpec />

          {/* 차량 수리 내역 */}
          <RepairRecord />

          {/* 차량 사고 내역 */}
          <AccidentRecord />

          {/* 보험 정보 */}
          <Insurance />

          {/* 운전자 정보 */}
          <Driver />

          {/* 포인트 정보 */}
          <Point />

          {/* 최종 가격 및 결제 */}
          <div className="w-[740px] h-[200px] mx-auto mt-20 flex justify-between items-center">
            <Price />
            <Resv setShowDetail={props.setShowDetail} />
          </div>
        </div>
      </div>
    </>
  );
}

export { MyPageDetail };
