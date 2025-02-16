import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  {
    text: "BLOG",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      // {
      //   text: "苹果",
      //   icon: "pen-to-square",
      //   prefix: "apple/",
      //   children: [
      //     { text: "苹果1", icon: "pen-to-square", link: "1" },
      //     { text: "苹果2", icon: "pen-to-square", link: "2" },
      //     "3",
      //     "4",
      //   ],
      // },
      
      { text: "Web安全-文件上传", icon: "pen-to-square", link: "2025-02-16" },
      { text: "金砖省赛获奖", icon: "pen-to-square", link: "2024-11-02" },
      { text: "金砖国赛获奖", icon: "pen-to-square", link: "2024-12-20" },
      
    ],
  },
  {
    text: "关于",
    icon: "book",
    link: "#",
  },
]);
