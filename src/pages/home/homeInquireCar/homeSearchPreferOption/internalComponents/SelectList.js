import { useState } from "react";

/**
 * 클릭하면 여러가지를 선택할 수 있는 리스트 셀렉터 컴포넌트.
 * 부모는 반드시 setter를 첨부하여 사용자가 리스트에서 무엇을 선택했는지 알 수 있도록 해야 한다.
 * @param {[string]} props.listArray 부모에게서 받아온 리스트의 목록
 * @param {setter} props.selectedSetter 부모에게서 받아온 setter
 */
function SelectList(props) {
  let [selectedElm, setSelectedElm] = useState(props.listArray[0]);
  let [isVisible, setIsVisible] = useState(false);

  return (
    <button
      className="relative w-full px-6 py-1 border-[2px] border-blue-500 rounded-full bg-sky-50"
      onClick={() => {
        setIsVisible(!isVisible);
      }}
    >
      {selectedElm}

      {isVisible ? (
        <div className="z-40 top-[-2px] rounded-2xl left-[-2px] absolute w-[calc(100%+4px)] px-6 py-1 border-[2px] items-center border-blue-500 bg-sky-50 flex flex-col">
          {props.listArray.map((elm, idx) => {
            return (
              <button
                className="py-1 w-fit h-fit hover:bg-blue-500"
                onClick={() => {
                  setSelectedElm(elm);
                  props.selectedSetter(elm);
                }}
              >
                {props.listArray[idx]}
              </button>
            );
          })}
        </div>
      ) : null}
    </button>
  );
}

export { SelectList };
