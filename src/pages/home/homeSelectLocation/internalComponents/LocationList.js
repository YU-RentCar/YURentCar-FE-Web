import { useEffect, useState } from "react";

/**
 * 지점을 제공하는 리스트를 다루는 컴포넌트
 * @param {string} props.width 부모에게 받아온 넓이값 (tailwind 속성)
 * @param {string} props.height 부모에게 받아온 높이값 (tailwind 속성)
 * @param {[string]} props.storeLocInfo 부모에게 받아온 점포 위치 리스트 (state)
 * @param {setter} props.setSelectedStore 부모에게 받아온 setter. 선택한 지점을 변경한다.
 */
function LocationList(props) {
  let initSetting = props.width + " " + props.height;

  let [isSelect, setIsSelect] = useState(
    Array(props.storeLocInfo.length).fill(false)
  );

  const handleClick = (e) => {
    const newArr = Array(props.storeLocInfo.length).fill(false);

    newArr[e.target.id] = true;
    setIsSelect(newArr);

    props.setSelectedStore(e.target.innerText);
  };

  /* isSelect 가 변경되면, 코드가 실행된다. 선택 지점을 시각적으로 표시하기 위한 코드 */
  useEffect(() => {
    let lists = document.querySelectorAll(".lists");
    lists.forEach((elm, idx) => {
      if (true === isSelect[idx]) {
        elm.classList.remove("border-slate-400", "bg-slate-100");
        elm.classList.add("border-blue-500", "bg-blue-500");
      } else {
        elm.classList.remove("border-blue-500", "bg-blue-500");
        elm.classList.add("border-slate-400", "bg-slate-100");
      }
    });
  }, [isSelect]);

  return (
    <>
      <div className={initSetting}>
        <div className="flex flex-col items-center border-blue-500 w-full h-full rounded-[35px] border-[3px] overflow-y-scroll p-2">
          {props.storeLocInfo.map((value, idx) => {
            return (
              <div
                className="flex flex-row justify-center items-center text-3xl font-bold bg-slate-100 border-[3px] border-slate-400 w-[90%] py-3 my-2 rounded-xl lists"
                onClick={handleClick}
                id={idx}
                key={idx}
              >
                {value}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export { LocationList };
