/*
 * @Author: junjie.lean
 * @Date: 2019-04-15 15:54:03
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2019-08-05 17:27:32
 */

/**
 * @description 全局配置
 */

import lang from "./../lang/zh_CN";
// const sKey = require("./../../package").config.defaultSKey;
const sKey = "";

let isDev = process.env.NODE_ENV === "development" ? true : false;

const baseConfig = {
  systeamTitle: lang.systeam.systeamTitle /** */,
  sKey: sKey || "0000000000000000"
};

/**
 * @param {Boolean} isDev
 * @description
 */
function createGlobalConfig(isDev) {
  let obj = {
    ...baseConfig
  };
  if (isDev) {
    obj.dataService = "";
  } else {
    obj.dataService = "";
  }
  return obj;
}

let g = createGlobalConfig(isDev);

if (window) {
  window.g = g;
}

export default g;
