function Resv(props) {
  return (
    <>
      <div className="w-[45%] h-full border-2 border-blue-500 rounded-lg flex flex-col justify-around items-center font-bold">
        <button className="flex items-center justify-center w-[90%] text-xl font-bold text-white rounded-lg h-1/4 bg-rose-500">
          변경하기
        </button>
        <button className="flex items-center justify-center w-[90%] text-xl font-bold text-white rounded-lg h-1/4 bg-rose-500">
          취소하기
        </button>
        <button
          className="flex items-center justify-center w-[90%] text-xl font-bold text-white rounded-lg h-1/4 bg-sky-300"
          onClick={() => {
            props.setShowDetail(false);
          }}
        >
          뒤로가기
        </button>
      </div>
    </>
  );
}

export { Resv };
