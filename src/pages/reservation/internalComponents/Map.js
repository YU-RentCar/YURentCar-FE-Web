import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getMapPoint } from "../../../api/ReservationAxios";

const { kakao } = window;

/**
 * 지점 지도
 * @returns
 */
function Map() {
  /* request 를 위한 차량 정보 */
  // let selectedRentalInfo = useSelector((state) => state.selectedRentalInfo);
  /* 임시 지점 위도, 경도(추후 axios 구현 및 스토어 저장) */
  let [mapPoint, setMapPoint] = useState({
    wido: 35.83197282422097,
    kyungdo: 128.7584953471887,
  });

  /* 지점 위도, 경도 요청 */
  useEffect(() => {
    console.log("getMapPoint axios");
    /*
    (async () => {
      await getMapPoint(selectedRentalInfo.store)
        .then((response) => {
          console.log(response.data);
          let point = {
            wido: response.data.위도;
            kyungdo: response.data.경도;
          }
          setAccidentRecord(point);
        })
        .catch((error) => {
          console.log(error.response);
        });
    })();*/

    /* 지도 표시 */
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(mapPoint.wido, mapPoint.kyungdo),
      level: 3,
    };

    /* 마커 표시 */
    var markerPosition = new kakao.maps.LatLng(mapPoint.wido, mapPoint.kyungdo);
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    /* 지도 컨트롤러 */
    var mapTypeControl = new kakao.maps.MapTypeControl();
    var zoomControl = new kakao.maps.ZoomControl();

    /* 지도 세팅 */
    var map = new kakao.maps.Map(container, options);
    marker.setMap(map);
    map.setZoomable(false);
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  });

  return (
    <>
      {/* 지도 표시 */}
      <div
        id="map"
        className="w-[840px] h-[400px] mx-auto mt-20 rounded-lg border-2 border-black"
      ></div>
    </>
  );
}

export { Map };
