/**
 *
 * @param {string} props.title 부모의 부모에게서 받아온 어떤 정보인지 title
 * @param {array} props.contents 부모의 부모에게서 받아온 특정 title 에 대한 항목들을 저장한 배열
 * @param {setter} props.showList 부모에게서 받아온 항목들을 띄워줄 목록을 제어할 setter
 * @returns
 */
function ItemList(props) {
  return (
    <ul className="absolute w-full text-lg font-bold list-none border-2 border-blue-500 rounded-lg h-fit jusitfy-center bg-sky-50">
      {/* 목록의 수만큼 항목 생성 */}
      {props.contents.map((item, index) => {
        return (
          /* 선택 항목으로 바꾸고 목록 끄기 */
          <li
            key={index}
            className="flex items-center justify-center w-full py-3 text-lg font-bold hover:bg-blue-500"
            onClick={() => {
              /* id 값을 이용한 특정 목록 선택 */
              document.querySelector("#" + props.title).textContent = item;
              props.showList(false);
            }}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export { ItemList };
