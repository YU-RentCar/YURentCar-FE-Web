/**
 *
 * 특정 기능이 수행된 결과를 알려주는 알림의 역할
 * @param {string} props.style 해당 alert 가 가질 style
 * @param {string} props.msg 해당 alert 가 보여줄 메시지
 * @returns
 */
function Alert(props) {
  return (
    <>
      <div className="fixed left-0 z-50 flex items-center justify-center w-full bottom-20">
        <div className={props.style}>{props.msg}</div>
      </div>
    </>
  );
}

export { Alert };
