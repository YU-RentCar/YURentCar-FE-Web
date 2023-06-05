import { api } from "./interceptors";

/* 지점 리스트  */
let getStoreList = (province) => {
  return api({
    url: "/branches",
    method: "get",

    params: {
      siDo: province,
    },
  });
};

export { getStoreList };
