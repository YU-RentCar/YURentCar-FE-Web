import { useState } from "react";
import Close from "../../../assets/Close.png";

/**
 *
 * @param {function} props.showPopUp 부모에게 받아온 팝업 제어 함수
 * @returns
 */
function PointRecord(props) {
  let [pointList, setPointList] = useState([
    {
      사유: "후기 작성",
      타입: "+",
      액수: "500",
      "적립 일시": "2023-05-01",
    },
    {
      사유: "연체 반납",
      타입: "-",
      액수: "500",
      "적립 일시": "2023-05-31",
    },
  ]);
  let getMent = (item) => {
    let color = "";
    item["타입"] === "+"
      ? (color = "text-blue-500")
      : (color = "text-amber-500");
    return (
      <div className="w-[90%] h-[10%] mt-5 bg-slate-100 border-slate-400 border-2 rounded-lg flex justify-center items-center font-bold">
        {item["적립 일시"]} &nbsp;
        {item["사유"]} &nbsp;
        <span className={color}>{item["타입"] + item["액수"]}</span>
      </div>
    );
  };
  return (
    <>
      <div className="fixed top-0 left-0 right-0 flex items-center justify-center w-full h-full">
        <div
          className="fixed w-full h-full opacity-25 bg-slate-600"
          onClick={props.showPopUp}
        ></div>
        <div className="fixed w-[60%] m-auto bg-white border-blue-300 border-2 rounded-[10px] h-[700px] flex justify-around items-center">
          <div className="w-[90%] h-[90%] flex flex-col justify-center items-center">
            <div className="flex items-center justify-center w-full text-xl font-bold bg-blue-300 rounded-lg h-[10%]">
              포인트 사용/적립 내역
            </div>
            <div className="flex flex-col items-center w-full overflow-y-scroll border-2 border-blue-500 rounded-lg h-[90%]">
              {pointList.map((item) => {
                return getMent(item);
              })}
            </div>
          </div>
          <div className="w-[5%] h-[90%]">
            <img
              src={Close}
              alt="close button"
              className="object-contain w-full"
              onClick={props.showPopUp}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export { PointRecord };
