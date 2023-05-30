/**
 * 홈에서 공지사항을 띄워 주는 컴포넌트.
 * 부모는 반드시 제목 배열을 넘겨줘야 한다.
 * @param {string} props.width 부모에게서 받아온 넓이 (tailwind 속성)
 * @param {string} props.height 부모에게서 받아온 높이 (tailwind 속성)
 * @param {[string]} props.titleArray 부모에게서 받아온 공지사항의 제목 배열
 */
function HomeNotice(props) {
  const initSetting = props.width + " " + props.height;
  return (
    <div className={initSetting}>
      <div className="relative flex flex-col items-center justify-around h-full">
        <div className="mt-3 w-2/4 text-center px-4 py-1 border-dashed rounded-md border-slate-200 border-[4px] font-extrabold text-xl">
          공지사항
        </div>
        <div className="border-blue-500 h-2/3 border-[3px] w-[90%] rounded-2xl m-3 overflow-hidden ">
          {props.titleArray.map((elm, idx) => {
            return (
              <div className="flex justify-center w-full my-1 h-[22%]">
                <div className="text-center border-[3px] py-1 border-slate-300 bg-slate-100 w-[90%] text-xl font-extrabold rounded-md flex-nowrap overflow-hidden whitespace-nowrap text-ellipsis">
                  {elm}
                </div>
              </div>
            );
          })}
        </div>

        <button className="absolute top-0 right-0 text-sm">
          더보기{">"}
          {">"}
        </button>
      </div>
    </div>
  );
}

export { HomeNotice };
