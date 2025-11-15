import type { Dictionary } from "./types";

const dictionary: Dictionary = {
  navigation: {
    languageSwitcherLabel: "语言",
  },
  hero: {
    title: "多语言 SSR 示例",
    subtitle:
      "体验一个支持英文、阿拉伯语与中文的服务端渲染 Next.js 页面，并可即时切换语言。",
    primaryCta: "查看功能",
  },
  features: {
    title: "包含内容",
    items: [
      "基于 Next.js App Router 的服务端渲染",
      "通过中间件实现的多语言路由",
      "适配阿拉伯语的从右到左布局",
      "动态语言切换导航",
    ],
  },
  serverInfo: {
    title: "服务端渲染信息",
    renderedAtLabel: "渲染时间",
  },
  languages: {
    en: "英语",
    ar: "阿拉伯语",
    zh: "中文",
  },
};

export default dictionary;


