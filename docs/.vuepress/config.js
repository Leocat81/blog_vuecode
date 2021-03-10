module.exports = {
  base: "/pipe_blog/",
  title: "笔记", // 设置网站标题
  description: "欢迎来到我的博客",
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    /* 两个插件只能选一个 */
    [
      "vuepress-plugin-helper-live2d",
      {
        // 是否开启控制台日志打印(default: false)
        log: true,
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: false,
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
    // nav : [
    //     { text: '接口定义', link: '/apiword' },
    //     { text: '接口字段定义', link: '/api' },
    //     { text: '附录：错误码', link: '/error' },
    //     { text: '附录：错误码', link: '/error' }
    // ],
    sidebar: [
      {
        title: "ECMAScript",
        collapsable: true,
        children: ["/guide/", "/guide/a", "/guide/prototype","guide/ArrowDifNomal"],
      },
      {
        title: "VUE",
        children: ["/vueguide/","/vueguide/rendermechanism"],
      },
            {
        title: "CSS3",
        children: ["/css3guide/"],
      },
    ],
    sidebarDepth: 1,
  },
};
