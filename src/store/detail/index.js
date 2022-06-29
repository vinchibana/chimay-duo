import { reqAddOrUpdateCart, reqGoodsInfo } from "@/api";
import { getUUID } from "@/components/utils/uuid_token";

const state = {
  goodInfo: {},
  uuid_token: getUUID(),
};
const mutations = {
  GET_GOODINFO(state, goodInfo) {
    state.goodInfo = goodInfo;
  },
};

const actions = {
  async getGoodInfo({ commit }, skuId) {
    let result = await reqGoodsInfo(skuId);
    if (result.code === 200) {
      commit("GET_GOODINFO", result.data);
    }
  },

  async addOrUpdateCart({ commit }, { skuId, skuNum }) {
    let result = await reqAddOrUpdateCart(skuId, skuNum);
    if (result.code === 200) {
      return "ok";
    } else {
      return Promise.reject();
    }
  },
};
const getters = {
  categoryView(state) {
    return state.goodInfo.categoryView || {};
  },
  skuInfo(state) {
    return state.goodInfo.skuInfo || {};
  },
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || {};
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
