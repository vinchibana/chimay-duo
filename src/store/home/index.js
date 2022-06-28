import { reqBannerList, reqCategoryList, reqFloorList } from "@/api";

const state = {
  categoryList: [],
  bannerList: [],
  floorList: [],
};
const mutations = {
  // 直接操作 state
  GET_CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  GET_BANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  GET_FLOORLIST(state, floorList) {
    state.floorList = floorList;
  },
};
const getters = {};
const actions = {
  async getCategoryList({ commit }) {
    let result = await reqCategoryList();
    if (result.code === 200) {
      // 携带 result.data 作为 payload（第二个参数，categoryList）
      commit("GET_CATEGORYLIST", result.data);
    }
  },

  async getBannerList({ commit }) {
    let result = await reqBannerList();
    if (result.code === 200) {
      commit("GET_BANNERLIST", result.data);
    }
  },

  async getFloorList({ commit }) {
    let result = await reqFloorList();
    if (result.code === 200) {
      commit("GET_FLOORLIST", result.data);
    }
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
