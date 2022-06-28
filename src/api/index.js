import requests from "@/api/ajax";
import mockRequests from "@/api/mock";

export const reqCategoryList = () =>
  requests({ url: "/product/getBaseCategoryList", methode: "get" });

export const reqBannerList = () =>
  mockRequests({ url: "/banner", method: "get" });

export const reqFloorList = () =>
  mockRequests({ url: "/floor", method: "get" });

export const reqGetSearchInfo = (params) =>
  requests({ url: "/list", method: "post", data: params });
