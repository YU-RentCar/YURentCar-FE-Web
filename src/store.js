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

/**
 * 사용자가 선택한 시작, 종료 날짜, 시간, 지점, 지역 저장
 *
 * 사용 컴포넌트
 * Home
 */
let selectedRentalInfo = createSlice({
  name: "selectedRentalInfo",
  initialState: {
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    province: "",
    store: "",
  },
  reducers: {
    changeRentalInfo(state, info) {
      state = info.payload;
      return state;
    },
  },
});

/**
 * 사용자가 선택한 지방, 지점 선택
 *
 * 사용 컴포넌트
 * Home
 */
let selectedStore = createSlice({
  name: "selectedStore",
  initialState: {
    province: "",
    store: "",
  },
  reducers: {
    changeProvince(state, info) {
      state.province = info.payload;
      return state;
    },
    changeStore(state, info) {
      state.store = info.payload;
      return state;
    },
  },
});

/**
 * 운전자 수
 *
 * 사용 컴포넌트
 * Reservation
 */
let driverCount = createSlice({
  name: "driverCount",
  initialState: 1,
  reducers: {
    increaseCount(state) {
      state += 1;
      return state;
    },
    decreaseCount(state) {
      state -= 1;
      return state;
    },
  },
});

/**
 * 각 운전자들의 카드 상태
 *
 * 사용 컴포넌트
 * Reservation
 */
let showCard = createSlice({
  name: "showCard",
  initialState: [true],
  reducers: {
    addDriver(state) {
      state[state.length] = true;
      return state;
    },
    subDriver(state, idx) {
      console.log(idx);
      state.splice(idx.payload, 1);
      return state;
    },
    changeState(state, idx) {
      console.log(state[idx]);
      state[idx.payload]
        ? (state[idx.payload] = false)
        : (state[idx.payload] = true);
      return state;
    },
  },
});

/**
 * 각 운전자들 정보
 *
 * 사용 컴포넌트
 * reservation
 */
let driverInfo = createSlice({
  name: "driverInfo",
  initialState: [
    {
      이름: "",
      생년월일: "",
      전화번호: "",
      면허종류: "",
      면허번호: "",
      발급일자: "",
      만료일자: "",
    },
  ],
  reducers: {
    plusInfo(state) {
      state.splice(state.length, 0, {
        이름: "",
        생년월일: "",
        전화번호: "",
        면허종류: "",
        면허번호: "",
        발급일자: "",
        만료일자: "",
      });
      return state;
    },
    deleteInfo(state, idx) {
      console.log(idx);
      state.splice(idx.payload, 1);
      return state;
    },
    changeInfo(state, info) {
      state[info.payload[1]][info.payload[2]] = info.payload[3];
      return state;
    },
  },
});

/**
 * 사용자 보유 포인트
 *
 * 사용 컴포넌트
 * reservation
 */
let userPoint = createSlice({
  name: "userPoint",
  initialState: 0,
  reducers: {
    changeUserPoint(state, afterPoint) {
      state -= afterPoint.payload;
      return state;
    },
  },
});

/**
 * 예약 등록을 위한 정보
 *
 * 사용 컴포넌트
 * reservation
 */
let resvInfo = createSlice({
  name: "resvInfo",
  initialState: {
    carNumber: "",
    startDate: "",
    endDate: "",
    totalPrice: 0,
    usePoint: 0,
  },
  reducers: {
    changeCarNumber(state, info) {
      state.carNumber = info.payload;
      return state;
    },
    changeStartDate(state, info) {
      state.startDate = info.payload;
      return state;
    },
    changeEndDate(state, info) {
      state.endDate = info.payload;
      return state;
    },
    changeTotalPrice(state, info) {
      state.totalPrice = 200000 + info.payload;
      return state;
    },
    changeUsePoint(state, info) {
      state.usePoint = info.payload;
      return state;
    },
  },
});

/**
 * 상세정보에서 저장되는 state
 * 차량번호, 차종 (차 이름), 총 주행거리
 *
 * 사용 컴포넌트 CarDetail
 */
let baseInfo = createSlice({
  name: "baseInfo",
  initialState: {
    carNum: "",
    carName: "",
    runDistance: "",
  },
  reducers: {
    changeCarNum(state, info) {
      state.carNum = info.payload;
      return state;
    },
    changeCarName(state, info) {
      state.carName = info.payload;
      return state;
    },
    changeRunDistance(state, info) {
      state.runDistance = info.payload;
      return state;
    },
  },
});

export default configureStore({
  reducer: {
    userInfo: userInfo.reducer,
    userPrefer: userPrefer.reducer,
    preferInfo: preferInfo.reducer,
    selectedRentalInfo: selectedRentalInfo.reducer,
    selectedStore: selectedStore.reducer,
    driverCount: driverCount.reducer,
    showCard: showCard.reducer,
    driverInfo: driverInfo.reducer,
    resvInfo: resvInfo.reducer,
    userPoint: userPoint.reducer,
    baseInfo: baseInfo.reducer,
  },
});

export let { changeUserInfo, changeNickname } = userInfo.actions;
export let { changeUserPrefer } = userPrefer.actions;
export let { changeRentalInfo } = selectedRentalInfo.actions;
export let { changeProvince, changeStore } = selectedStore.actions;
export let { increaseCount, decreaseCount } = driverCount.actions;
export let { changeState, addDriver, subDriver } = showCard.actions;
export let { plusInfo, deleteInfo, changeInfo } = driverInfo.actions;
export let {
  changeCarNumber,
  changeStartDate,
  changeEndDate,
  changeTotalPrice,
  changeUsePoint,
} = resvInfo.actions;
export let { changeUserPoint } = userPoint.actions;
export let { changeCarName, changeCarNum, changeRunDistance } =
  baseInfo.actions;
