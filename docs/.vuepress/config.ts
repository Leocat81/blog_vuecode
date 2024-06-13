import { defineConfig } from "vuepress/config";
import "dotenv/config";

export default defineConfig({
  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "",
      description: "",
    },
  },
  // base: "",
  title: "pipe的笔记", // 设置网站标题
  description: "欢迎来到我的博客",
  head: [
    ["link", { rel: "icon", href: "/img/logo2.webp" }],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/pixi.js@6.1.2/dist/browser/pixi.min.js", // html头添加script标签
        async: true,
        low: true,
      },
    ],
  ],
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    [
      "@vssue/vuepress-plugin-vssue",
      {
        platform: "github",
        locale: "zh",
        owner: "Leocat81",
        repo: "blog_vuecode",
        clientId: process.env.clientId,
        clientSecret: process.env.clientSecret,
      },
    ],
    ["vuepress-plugin-gotop-plus", {}],
    [
      "vuepress-plugin-autometa",
      {
        site: {
          name: "pipepandafeng",
          twitter: "pipe",
        },
        author: {
          name: "司俊峰",
          twitter: "pipe",
        },
        canonical_base: "http://pipepandafeng.gitee.io",
      },
    ],
    ["vuepress-plugin-baidu-autopush", {}],
    ["vuepress-plugin-gotop-plus", {}],
    /* 两个插件只能选一个 */
    // [
    //   "vuepress-plugin-helper-live2d",
    //   {
    //     // 是否开启控制台日志打印(default: false)
    //     log: true,
    //     live2d: {
    //       // 是否启用(关闭请设置为false)(default: true)
    //       enable: false,
    //       // 模型名称(default: hibiki)>>>取值请参考：
    //       // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
    //       model: "hibiki",
    //       display: {
    //         position: "left", // 显示位置：left/right(default: 'right')
    //         width: 15, // 模型的长度(default: 135)
    //         height: 10, // 模型的高度(default: 300)
    //         hOffset: 65, //  水平偏移(default: 65)
    //         vOffset: 0, //  垂直偏移(default: 0)
    //       },
    //       mobile: {
    //         show: false, // 是否在移动设备上显示(default: false)
    //       },
    //       react: {
    //         opacity: 0.8, // 模型透明度(default: 0.8)
    //       },
    //     },
    //   },
    // ],
  ],
  themeConfig: {
    lastUpdated: "Last Updated",
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL +“”
    repo: "https://gitee.com/pipepandafeng/blog_vuecode",
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "查看源码",
    nav: [
      {
        text: "gitignore",
        link: "https://www.toptal.com/developers/gitignore",
      },
      {
        text: "google字体",
        link: "https://fonts.google.com",
      },
    ],
    sidebar: [
      {
        title: "序言",
        collapsable: false,
        path: "home/",
      },
      {
        title: "Funny",
        children: ["funny/book", "funny/codesnippet", "funny/google", "funny/curl", "funny/npmlink", "funny/npmscripts", "funny/nginx", "funny/crawler", "funny/macos", "funny/linux", "funny/regexp", "funny/license", "funny/proxy-pool", "funny/search", "funny/penetration-test", "funny/pixi"],
      },
      {
        title: "GIT",
        children: ["gitguide/base", "gitguide/clone", "gitguide/fetch", "gitguide/branch", "gitguide/merge", "gitguide/reset", "gitguide/history", "gitguide/stash"],
      },
      {
        title: "ES",
        children: ["guide/", "guide/a", "guide/prototype", "guide/ArrowDifNomal", "guide/reduce", "guide/DataHijacking", "guide/lowcopyAnddeepCopy", "guide/VariableAndFunction", "guide/transmitParams", "guide/bibao", "guide/debounceAndThrottle", "guide/es6new", "guide/ArrayLike", "guide/ImplementationMechanism", "guide/ExtendObject", "guide/appy", "guide/ClassDesc", "guide/BitOperation", "guide/module", "guide/designpattern"],
      },
      {
        title: "Node Server",
        children: ["node/"],
        sidebarDepth: 1,
      },
      {
        title: "CSS3",
        children: ["css3guide/", "css3guide/BFC", "css3guide/flex", "css3guide/margin", "css3guide/WaterFall", "css3guide/BEM", "css3guide/ResponsiveImages", "css3guide/clearfix"],
      },
      {
        title: "VUE",
        children: ["vueguide/", "vueguide/rendermechanism", "vueguide/ComputedDifWatch", "vueguide/vue3", "vueguide/tabbar", "vueguide/EventBus", "vueguide/scrollthrough", "vueguide/MultiPage", "vueguide/key", "vueguide/element"],
      },
      {
        title: "HTML",
        children: ["htmlguide/"],
      },
      {
        title: "Build",
        children: ["buildtools/", "buildtools/jenkins", "buildtools/deploy", "buildtools/sentry", "buildtools/docker", "buildtools/Clash", "buildtools/shell", "buildtools/cdn"],
      },
      {
        title: "HTTP",
        children: ["httpguide/", "httpguide/cors", "httpguide/httpcode"],
      },
    ],
    sidebarDepth: 3,
  },
});
