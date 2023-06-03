import { configureStore, createSlice } from "@reduxjs/toolkit";

/**
 * 유저의 정보를 담고 있는 state
 *
 * 사용 컴포넌트
 * Home, MyPage(MyPageUserInfo)
 */
let userInfo = createSlice({
  name: "userInfo",
  initialState: {},
  reducers: {
    changeUserInfo(state, info) {
      state = info.payload;
      console.log(state);
      return state;
    },
    changeNickname(state, info) {
      state.nickname = info.payload;
      return state;
    },
  },
});

/**
 * 사용자 선호 차량 옵션 타이틀과 내용 state
 *
 * 사용 컴포넌트
 * MyPage(MyPagePreferCar)
 */
let preferInfo = createSlice({
  name: "preferInfo",
  initialState: {
    차량크기: ["소형", "준중형", "중형", "대형"],
    유종: ["휘발유", "경유", "수소", "전기"],
    트랜스미션: ["수동", "자동"],
  },
  reducers: {},
});

/**
 * 사용자 선호 차량
 *
 */

/**
 * 사용자의 선호 차량 옵션을 담고 있는 state
 *
 * 사용 컴포넌트
 * MyPage(MyPagePreferCar)
 */
let userPrefer = createSlice({
  name: "userPrefer",
  initialState: {
    carSizes: [true, false, true, false],
    minCount: 3,
    oilTypes: [false, true, false, true],
    transmissions: [true, false],
  },
  reducers: {
    changeUserPrefer(state, info) {
      state = info.payload;
      return state;
    },
  },
});

export default configureStore({
  reducer: {
    userInfo: userInfo.reducer,
    userPrefer: userPrefer.reducer,
    preferInfo: preferInfo.reducer,
  },
});

export let { changeUserInfo, changeNickname } = userInfo.actions;
export let { changeUserPrefer } = userPrefer.actions;
