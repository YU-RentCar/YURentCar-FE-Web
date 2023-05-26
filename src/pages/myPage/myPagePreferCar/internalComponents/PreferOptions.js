import { React } from "react";

/**
 *
 * @param {object} props.preferInfo 부모의 부모에게서 받아온 선호 차량 옵션 정보 객체
 * @returns
 */
function PreferOptions(props) {
  let titles = Object.keys(props.preferInfo);
  // 리스트 숨기기 & 보여주기
  let show = (title) => {
    let cur_st = document.getElementById(title + "List");
    let ul_style =
      "absolute w-full text-lg font-bold list-none border-2 border-blue-500 rounded-lg h-fit jusitfy-center bg-sky-50";

    cur_st.getAttribute("class") === "hidden"
      ? cur_st.setAttribute("class", ul_style)
      : cur_st.setAttribute("class", "hidden");
  };
  return (
    <>
      <div className="flex justify-between w-full h-[50%]">
        {/* 총 4개의 옵션 */}
        {titles.map((title) => {
          return (
            <div className="flex flex-col justify-between w-1/5 h-full">
              {/* 옵션 타이틀 */}
              <div className="flex items-center justify-center w-full text-lg font-bold bg-blue-300 rounded-lg h-1/3">
                {title}
              </div>
              <div className="relative w-full h-1/3">
                {/* 선택된 선호 옵션 */}
                <div className="absolute flex items-center justify-between w-full h-full px-3 border-2 border-blue-500 rounded-lg bg-sky-50">
                  <div className="w-[10%] h-[80%]"></div>
                  {/* 현재 선택된 옵션 */}
                  <div id={title + "Content"} className="text-lg font-bold">
                    {props.preferInfo[title][0]}
                  </div>
                  {/* 목록 키고 끄기 버튼 */}
                  <div
                    className="w-[15%] h-[80%] bg-slate-400"
                    onClick={() => {
                      show(title);
                    }}
                  ></div>
                </div>
                {/* 타이틀에 해당하는 선호 옵션 목록 */}
                <ul
                  id={title + "List"}
                  className="absolute hidden w-full text-lg font-bold list-none border-2 border-blue-500 rounded-lg h-fit jusitfy-center bg-sky-50"
                >
                  {/* 목록의 수만큼 항목 생성 */}
                  {props.preferInfo[title].map((item) => {
                    return (
                      // 선택 항목으로 바꾸고 목록 끄기
                      <li
                        className="flex items-center justify-center w-full py-3 text-lg font-bold hover:bg-blue-500"
                        onClick={() => {
                          document.getElementById(
                            title + "Content"
                          ).textContent = item;
                          show(title);
                        }}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export { PreferOptions };
