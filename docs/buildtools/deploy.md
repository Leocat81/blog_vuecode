# 前端部署优化策略总结

> 总要针对 SPA 应用

1.  项目优化层面

    - 部分依赖包不打入构建包中，采用 CDN 引入
    - 采用一些打包工具对代码进行压缩 如（`TerserWebpackPlugin`,`ImageMinimizerWebpackPlugin`）等
    - 路由懒加载
    - 开启 GZip 压缩（需配合 web 服务器结合使用）
    - 使用 SSR

2.  一些其他增强型优化

    - 同域名请求数量限制优化

      网络面板关于网络请求的一些优化同域名请求数量限制（HTTP/1.0 或 HTTP/1.1）如果网络请求出现排队的情况，那么说明是在单个域上提出了太多请求。在 HTTP/1.0 或 HTTP/1.1 连接上，Chrome 每个主机最多允许六个同步 TCP 连接。想要优化这一点，可以将关键请求提前，不关键请求延后。如果都是关键请求，那么可以尝试使用 HTTP 2。（在 Network 面板可以展示 Protocol 显示）如果条件有限，可以将这些请求放在不同的域名上，然后用 nginx 指向同一个源头，这样同样可以解决这个问题

    - 使用阿里云 OSS 托管静态网页
      https://help.aliyun.com/document_detail/31872.html

    - 增加服务器的带宽
    - CDN加速
