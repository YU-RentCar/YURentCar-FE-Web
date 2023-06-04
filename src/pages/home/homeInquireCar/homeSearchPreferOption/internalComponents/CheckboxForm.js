import { useState } from "react";

/**
 * 체크박스 형태의 다중선택이 가능한 컴포넌트
 * @param {[string]} props.inputArray 부모에게 받아온 체크박스로 만들어줄 목록들
 * @param {setter} props.setCheckedList 부모에게 받아온 체크 여부를 확인하는 배열의 setter 내부는 [true, false] 같이 이루어진다.
 * @param {[bool]} props.defaultCheckedList 부모에게 받아온 기본 체크 리스트
 */
function CheckboxForm(props) {
  /* 내부에서 사용할 체크된 state */
  let [innerCheckedList, setInnerCheckedList] = useState([
    ...props.defaultCheckedList,
  ]);

  return (
    <>
      <div className="flex flex-row flex-wrap justify-between w-[90%] px-2">
        {props.inputArray.map((elm, idx) => (
          <div className="mr-1 ">
            <input
              type="checkbox"
              key={idx}
              id={elm}
              defaultChecked={innerCheckedList[idx]}
              onChange={(e) => {
                let idx = props.inputArray.indexOf(e.target.id);

                console.log(idx);

                innerCheckedList[idx] = !innerCheckedList[idx];
                setInnerCheckedList(innerCheckedList);

                /* setCheckedList 통해 체크된 항목을 상위 컴포넌트로 보냄 */
                props.setCheckedList(innerCheckedList);
                console.log(innerCheckedList);
              }}
            />
            <label htmlFor={elm}>{" " + elm}</label>
          </div>
        ))}
      </div>
    </>
  );
}

export { CheckboxForm };
