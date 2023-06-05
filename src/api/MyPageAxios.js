import { api } from "./interceptors";

/* 사용자 기본 정보 ㄴ*/
let getUserInfo = () => {
  return api({
    url: "/users/profiles",
    method: "get",
  });
};

/* 닉네임 중복 조회 */
let checkNickname = (tmpNick) => {
  return api({
    url: "/users/nicknames/exists",
    method: "get",
    params: { nickname: tmpNick },
  });
};

/* 닉네임 변경 적용 */
let changeNick = (newNick) => {
  return api({
    url: "/users/nicknames",
    method: "patch",
    data: { nickname: newNick },
  });
};

/* 사용자 선호 차량 옵션 조회 */
let getUserPrefer = () => {
  return api({
    url: "/users/prefer-filter",
    method: "get",
  });
};

/* 사용자 선호 차량 옵션 변경 적용 */
let changeUserPref = (tmpPrefer) => {
  return api({
    url: "/users/prefer-filter",
    method: "patch",
    data: tmpPrefer,
  });
};

export {
  getUserInfo,
  checkNickname,
  changeNick,
  getUserPrefer,
  changeUserPref,
};
