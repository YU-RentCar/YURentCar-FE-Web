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
      return state;
    },
    changeNickname(state, info) {
      state.nickname = info.payload;
      return state;
    },
  },
});

export default configureStore({
  reducer: {
    userInfo: userInfo.reducer,
  },
});

export let { changeUserInfo, changeNickname } = userInfo.actions;
