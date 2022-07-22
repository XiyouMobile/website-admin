# 规范

组件和页面的文件夹名使用小写+中划线链接，类似：web-component，member-manage，其中使用 index.ts 进行文件的命名与导出。

## 总览

```
├── package.json
├── .umirc.ts
├── .env
├── dist
├── mock
├── public
└── src
    ├── .umi
    ├── api
        ├── interface
            ├── member.ts //成员相关的类型定义
            ├── ....
            └── club.ts //iOSClub相关的类型定义
        └── request
            ├── member.ts //成员相关的请求
            ├── ....
            └── club.ts //iOSClub相关的请求
    ├── assets //静态资源文件夹
    ├── util  //公共工具函数
    ├── pages //所有页面相关文件
        ├── index.less
        ├── component //页面自身相关组件
        └── index.tsx
    └── app.ts
```

所有变量均为小驼峰，类型定义命名为：I+大驼峰，例如 IUserInfo。对于枚举，枚举名称以及成员都是大驼峰。

```ts
enum UserType {
  // 普通用户
  Normal = 1,
  // 管理员
  Admin = 2,
  // 超级管理员
  SuperAdmin = 3,
}
```

```
src 下分为 pages(所有页面相关文件),component(公共组件相关文件),asset(静态资源文件),utils(公共方法)
```

# 实验室管理端官网搭建

## 6 月 7 日

<1>添加菜单栏二级路由 icon 显示的效果

# 7 月 22 日
<1>完成wiki编辑功能
