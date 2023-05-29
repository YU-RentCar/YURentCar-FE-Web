import { useState } from "react";
import { ItemList } from "./ItemList";

/**
 *
 * @param {string} props.title 부모에게서 받아온 어떤 정보인지 title
 * @param {array} props.contents 부모에게서 받아와 자식에게 전해줄 title 에 항목들을 저장한 배열
 * @returns
 */
function DefaultItem(props) {
  /* 다른 항목을 선택하기 위한 목록을 제어하는 state */
  let [showList, setShowList] = useState(false);

  return (
    <div className="flex flex-col justify-between w-1/5 h-full">
      {/* 옵션 타이틀 */}
      <div className="flex items-center justify-center w-full text-lg font-bold bg-blue-300 rounded-lg h-1/3">
        {props.title}
      </div>

      <div className="relative w-full h-1/3">
        {/* 선택된 선호 옵션 */}
        <div className="absolute flex items-center justify-between w-full h-full px-3 border-2 border-blue-500 rounded-lg bg-sky-50">
          <div className="w-[10%] h-[80%]"></div>
          {/* 현재 선택된 옵션 */}
          <div className="text-lg font-bold" id={props.title}>
            {props.contents[0]}
          </div>

          {/* 목록 키고 끄기 버튼 */}
          <button
            className="w-[15%] h-[80%] bg-slate-400"
            onClick={() => {
              setShowList(true);
            }}
          ></button>
        </div>

        {/* 목록 제어 */}
        {showList && (
          <ItemList
            title={props.title}
            contents={props.contents}
            showList={setShowList}
          />
        )}
      </div>
    </div>
  );
}

export { DefaultItem };
