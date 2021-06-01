const autometa_options = {
  site: {
    name: "pipepandafeng",
    twitter: "pipe",
  },
  author: {
    name: "司俊峰",
    twitter: "pipe",
  },
  canonical_base: "http://pipepandafeng.gitee.io",
};
module.exports = {
  locales: {
    "/zh/": {
      lang: "zh-CN",
    },
  },
  base: "/pipepandafeng/",
  title: "笔记", // 设置网站标题
  description: "欢迎来到我的博客",
  head: [["link", { rel: "icon", href: "/img/panda4.png" }]],
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    [
      "@vssue/vuepress-plugin-vssue",
      {
        // 设置 `platform` 而不是 `api`
        platform: "gitee",
        locale: "zh",
        // 其他的 Vssue 配置
        owner: "pipepandafeng",
        repo: "blog_vuecode",
        clientId:
          "a9ff2a019c4cfd9aebefe2c69240cf8b91e447a971097d8ffc94eed4b8fe575c",
        clientSecret:
          "41b6d9e7f29b0f228a8eded6e6ee58b7f7aea01cb3117a50e25ab920f549ff53",
      },
    ],
    ["autometa", autometa_options],
    "vuepress-plugin-baidu-autopush",
    /* 两个插件只能选一个 */
    [
      "vuepress-plugin-helper-live2d",
      {
        // 是否开启控制台日志打印(default: false)
        log: true,
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: "hibiki",
          display: {
            position: "right", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 65, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false, // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8, // 模型透明度(default: 0.8)
          },
        },
      },
    ],
    ["vuepress-plugin-gotop-plus"],
  ],
  themeConfig: {
    lastUpdated: "Last Updated",
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL +1+23
    repo: "https://gitee.com/pipepandafeng/blog_vuecode",
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "查看源码",
    nav: [
      { text: "面试宝典", link: "https://github.com/yisainan/web-interview" },
      { text: "vue原理讲解", link: "http://hcysun.me/vue-design/zh" },
      {
        text: "vue源码解析",
        link: "https://ustbhuangyi.github.io/vue-analysis",
      },
      { text: "前端工匠", link: "https://github.com/ljianshu/Blog" },
      { text: "typescript入门教程", link: "https://ts.xcatliu.com/" },
      { text: "源码学习视频", link: "https://www.bilibili.com/video/BV1LE411e7HE" }
    ],
    sidebar: [
      {
        title: "ECMAScript",
        collapsable: true,
        children: [
          "guide/",
          "guide/a",
          "guide/prototype",
          "guide/ArrowDifNomal",
          "guide/reduce",
          "guide/DataHijacking",
          "guide/lowcopyAnddeepCopy",
          "guide/VariableAndFunction",
          "guide/transmitParams",
          "guide/bibao",
          "guide/debounceAndThrottle",
          "guide/es6new",
          "guide/ArrayLike",
          "guide/ImplementationMechanism",
          "guide/ExtendObject",
          "guide/appy",
          "guide/ClassDesc"
        ],
      },
      {
        title: "VUE",
        children: [
          "vueguide/",
          "vueguide/rendermechanism",
          "vueguide/ComputedDifWatch",
        ],
      },
      {
        title: "CSS3",
        children: ["css3guide/", "css3guide/BFC", "css3guide/flex"],
      },
      {
        title: "http协议",
        children: ["httpguide/", "httpguide/cors","httpguide/httpcode"],
      },
      {
        title: "html",
        children: ["htmlguide/"],
      },
      // {
      //   title: "http协议",
      //   children: ["/httpguide/"],
      // },
    ],
    sidebarDepth: 3
  },
};
