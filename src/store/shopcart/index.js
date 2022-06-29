import { reqCartList, reqDeleteCartById, reqUpdateCartStatus } from "@/api";

const state = {
  shopCartInfo: [],
};
const mutations = {
  GET_SHOPCART(state, shopCartInfo) {
    state.shopCartInfo = shopCartInfo;
  },
};
const actions = {
  async getShopCart({ commit }) {
    let result = await reqCartList();
    if (result.code === 200) {
      commit("GET_SHOPCART", result.data);
    }
  },
  async delCartItemById({ commit }, skuId) {
    let result = await reqDeleteCartById(skuId);
    if (result.code === 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("failed"));
    }
  },

  async updateCartStatus({ commit }, { skuId, isChecked }) {
    let result = await reqUpdateCartStatus(skuId, isChecked);
    if (result.code === 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("failed"));
    }
  },

  deleteAllChecked(context) {
    const { getters, dispatch } = context;
    let arr = [];
    getters.shopCartInfo.cartInfoList.forEach((item) => {
      if (item.isChecked == 1) {
        let result = dispatch("delCartItemById", item.skuId);
        arr.push(item);
      }
      return Promise.all(arr);
    });
  },

  updateAllChecked(context, isChecked) {
    const { dispatch, getters } = context;
    let arr = [];
    getters.shopCartInfo.cartInfoList.forEach((item) => {
      let result = dispatch("updateCartStatus", {
        skuId: item.skuId,
        isChecked,
      });
      arr.push(item);
      return Promise.all(arr);
    });
  },
};
const getters = {
  shopCartInfo(state) {
    return state.shopCartInfo[0] || [];
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
