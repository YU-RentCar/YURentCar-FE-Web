import { useState } from "react";

/**
 * 체크박스 형태의 다중선택이 가능한 컴포넌트
 * @param {[string]} props.inputArray 부모에게 받아온 체크박스로 만들어줄 목록들
 * @param {setter} props.setCheckedList 부모에게 받아온 체크 여부를 확인하는 배열의 setter 내부는 [true, false] 같이 이루어진다.
 */
function CheckboxForm(props) {
  let [innerCheckedList, setInnerCheckedList] = useState(
    new Array(props.inputArray.length).fill(false)
  );

  return (
    <>
      <div className="flex flex-row flex-wrap justify-between w-[90%] px-2">
        {props.inputArray.map((elm, idx) => (
          <div>
            <input
              type="checkbox"
              key={idx}
              id={elm}
              onChange={(e) => {
                let idx = props.inputArray.indexOf(e.target.id);

                console.log(idx);

                innerCheckedList[idx] = !innerCheckedList[idx];
                setInnerCheckedList(innerCheckedList);

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
