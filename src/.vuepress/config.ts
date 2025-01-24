import { defineUserConfig } from "vuepress";

import theme from "./theme.js";


export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "云晞科技",
  description: "云晞科技 · LUCIFRIX",

  theme,
  

 
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
