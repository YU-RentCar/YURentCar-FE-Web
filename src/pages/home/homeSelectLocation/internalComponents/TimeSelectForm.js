import { React, useEffect, useState } from "react";
import listShowIcon from "../../../../assets/listShowIcon.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Select from "react-select";

/**
 * 날짜와 시간을 정하는 기능을 가진 컴포넌트
 * @param {string} props.width 부모에게서 받아온 width (tailwind 속성)
 * @param {string} props.legend 부모에게서 받아온 범례
 * @param {setter} props.dateSetter 부모에게서 받아온 날짜를 지정하는 setter
 * @param {setter} props.timeSetter 부모에게서 받아온 시간을 지정하는 setter
 */
function TimeSelectForm(props) {
  const initSetting = props.width;
  let [selectedDate, setSelectedDate] = useState(new Date());
  let [selectedTimeLabel, setSelectedTimeLabel] = useState();
  let [selectedTimeValue, setSelectedTimeValue] = useState();

  console.log(selectedTimeLabel);

  let [isCalClick, setIsCalClick] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const options = [
    { value: 1, label: "01:00" },
    { value: 2, label: "02:00" },
    { value: 3, label: "03:00" },
    { value: 4, label: "04:00" },
    { value: 5, label: "05:00" },
    { value: 6, label: "06:00" },
    { value: 7, label: "07:00" },
    { value: 8, label: "08:00" },
    { value: 9, label: "09:00" },
    { value: 10, label: "10:00" },
    { value: 11, label: "11:00" },
    { value: 12, label: "12:00" },
    { value: 13, label: "13:00" },
    { value: 14, label: "14:00" },
    { value: 15, label: "15:00" },
    { value: 16, label: "16:00" },
    { value: 17, label: "17:00" },
    { value: 18, label: "18:00" },
    { value: 19, label: "19:00" },
    { value: 20, label: "20:00" },
    { value: 21, label: "21:00" },
    { value: 22, label: "22:00" },
    { value: 23, label: "23:00" },
    { value: 24, label: "24:00" },
  ];

  return (
    <>
      <div className={initSetting}>
        <form
          className="flex"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset className="border-[5px] border-dashed border-slate-200 p-3 w-full">
            <legend className="px-5 ml-8 text-[1.7rem] font-black text-slate-600">
              {props.legend}
            </legend>
            <div className="flex justify-around h-15 mt-[-15px]">
              {/* 첫번째 버튼 */}
              <div className="flex w-[50%] mr-5 justify-center items-center bg-sky-50 border-blue-500 border-[2px] rounded-full h-[60px]">
                <div className="flex justify-around w-4/5 ">
                  <div className="relative flex flex-row items-center justify-center w-2/3 text-xl font-extrabold">
                    {/* 날짜가 보이는 부분 */}
                    {selectedDate.toLocaleDateString()}
                    {isCalClick ? (
                      <div className="absolute top-[-5px] left-[-80px] z-30 text-sm">
                        <Calendar
                          onChange={setCurrentDate}
                          value={currentDate}
                          onClickDay={(e) => {
                            setIsCalClick(false);
                            setSelectedDate(e);
                            props.dateSetter(e.toLocaleDateString());
                          }}
                        ></Calendar>
                      </div>
                    ) : null}
                  </div>

                  <button
                    className="flex items-center"
                    onClick={() => {
                      setIsCalClick(!isCalClick);
                    }}
                  >
                    {/* 버튼을 통해 달력이 보이게 하는 부분 */}
                    <img
                      src={listShowIcon}
                      alt="날짜 선택"
                      className="object-contain h-[40px]"
                    ></img>
                  </button>
                </div>
              </div>

              <div className="flex w-[40%] justify-center items-center bg-sky-50 border-blue-500 border-[2px] rounded-full h-[60px]">
                <div className="flex justify-around w-2/3 ">
                  <div className="flex items-center justify-center w-full text-xl font-extrabold">
                    {/* 시간이 보이는 부분 */}
                    <Select
                      defaultValue={selectedTimeValue}
                      onChange={(e) => {
                        console.log(e.value);
                        setSelectedTimeLabel(e.label);
                        setSelectedTimeValue(e.value);
                        props.timeSetter(e.value);
                      }}
                      options={options}
                    ></Select>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export { TimeSelectForm };
