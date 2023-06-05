import { React, useState } from "react";
import { ReactComponent as MapSVG } from "../../../../assets/Map.svg";
import { getStoreList } from "../../../../api/HomeAxios";
/**
 * 지도를 출력하고 지도의 상호작용이 설정된 컴포넌트
 * @param {setter} props.setStoreLocList 부모에게 받아온 점포 위치 리스트를 바꾸는 setter
 * @param {setter} props.setLocation 부모에게 받아온 지역 위치를 바꾸는 setter
 */
function Map(props) {
  let [mapLocation, setMapLocation] = useState("where?");

  const provinceList = [
    "제주도",
    "경기도",
    "서울",
    "인천",
    "인천",
    "전라북도",
    "강원도",
    "경상북도",
    "대구",
    "울산",
    "부산",
    "전라남도",
    "광주",
    "충청북도",
    "충청남도",
    "대전",
    "세종",
    "경상남도",
  ];
  /**
   * 지도를 클릭했을 때, 서버에 지점 정보 요청을 보내는 함수
   * @param {event} e 이벤트
   */
  let callStoreInfo = function (e) {
    /* 지도 밖의 배경에 클릭을 하면 배경의 id 인 layer_1 지역으로 표시되는 것을 막기 위함. */
    let provinceName = provinceList[Number(e.target.id)];
    if (e.target.id !== "layer_1") {
      props.setLocation(provinceList[Number(e.target.id)]);
      /* 아래 내용은 서버와의 통신을 구현해둔 내용 */

      (async () => {
        await getStoreList(provinceName)
          .then((response) => {
            console.log(response.data);
            props.setStoreLocList(response.data);
          })
          .catch((error) => {
            console.log(error.response);
          });
      })();
    }
  };

  /**
   * 지도 왼쪽 상단의 지역 표시 기능을 맡는 함수
   * @param {event} e 이벤트
   */
  let changeWhere = function (e) {
    /* 지도 밖의 배경에 마우스를 두면 배경의 id 인 layer_1 지역으로 표시되는 것을 막기 위함. */
    if (e.target.id === "layer_1") {
      setMapLocation("어디?");
    } else {
      // 추후 지역명 정상화, 한글화 하겠습니다.
      setMapLocation(provinceList[Number(e.target.id)]);
    }
  };

  return (
    <div
      className="relative flex flex-row justify-center items-center rounded-[40px] bg-slate-800 w-[49%] h-[90%] overflow-hidden mapCanvas"
      onClick={callStoreInfo}
      onMouseOver={changeWhere}
    >
      {/* 어떤 지역인지 글자로 띄워 보여주는 부분 */}
      <div className="absolute flex px-5 pt-1 pb-2 text-3xl font-bold text-blue-600 bg-white rounded-full left-5 top-5">
        {mapLocation}
      </div>
      {/* svg 파일을 컴포넌트 형태로 만든 MapSVG 컴포넌트 */}
      <MapSVG></MapSVG>
    </div>
  );
}

export { Map };
