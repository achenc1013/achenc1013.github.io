import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

import dynamicTitle from "vuepress-plugin-dynamic-title";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "云晞科技",
  description: "云晞科技 · LUCIFRIX",

  theme,
  
  plugins: [
    dynamicTitle({
      showIcon: "/favicon.ico",
      showText: "(/≧▽≦/)欢迎回来！",
      hideIcon: "/favicon.ico",
      hideText: "(●—●)不要走开！",
      recoverTime: 2000,
    }),
  ],
 
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
