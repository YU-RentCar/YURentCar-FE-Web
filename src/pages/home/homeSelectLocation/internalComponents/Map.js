import { React, useEffect, useState } from "react";
import { ReactComponent as MapSVG } from "../../../../assets/Map.svg";

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
    if (e.target.id !== "layer_1") {
      props.setLocation(provinceList[Number(e.target.id)]);

      /* 아래 내용은 추후 서버와의 통신을 임시로 구현해둔 내용 */
      alert(e.target.id + " ajax calling");
      props.setStoreLocList([
        "울산삼산점",
        "옥동점",
        "방어진점",
        "반구동점",
        "명촌점",
        "진장점",
      ]);
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

  /* state mapLocation 이 변경되면, 내부 함수가 실행된다.
    이 내부 코드는 지도 클릭 후에도 푸른색으로 선택 지역을 유지시키기 위한 코드이다.
  */
  useEffect(() => {
    let elms = document.querySelectorAll(".st0");
    elms.forEach((elm) => {
      if (elm.id === mapLocation) {
        elm.classList.add("selected");
      } else {
        elm.classList.remove("selected");
      }
    });
  }, [mapLocation]);

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
