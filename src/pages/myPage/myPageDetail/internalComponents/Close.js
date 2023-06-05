/**
 *
 * @param {number} props.idx 부모에게 받아온 카드 번호
 * @param {array} props.showCard 부모에게 받아온 보여지는 상태 state
 * @param {setter} props.setShowCard 부모에게 받아온 카드 보여지는 상태 state setter
 * @param {string} props.name 부모에게 받아온 운전자 이름
 * @returns
 */
function Close(props) {
  return (
    <>
      <div
        className="w-full h-[80px] border-black border-2 rounded-md flex justify-between items-center px-10 mt-5"
        key={props.index}
      >
        <div className="text-xl font-bold">{props.name}</div>
        <div className="w-[300px] h-3/5 flex items-center justify-around">
          {/* 카드 펴기 버튼 */}
          <button
            className="w-[120px] h-full bg-sky-300 font-bold text-lg rounded-md"
            onClick={() => {
              /* 카드 상태 변경 */
              let newArr = [...props.showCard];
              newArr[props.idx] = true;
              props.setShowCard(newArr);
            }}
          >
            카드 펴기
          </button>
        </div>
      </div>
    </>
  );
}

export { Close };
