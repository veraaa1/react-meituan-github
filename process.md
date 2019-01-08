
### 重中之重啊 db.json 完成
1. 创建 store 在 stores 文件夹中完成
2. 安装中间件logger thunk完成
3. 创建容器组件 containers 创立函数式组件 完成
4. 在 index 内导入 provider 并传递 store完成
5. 设置 constants 常量组件完成
6. 建立 reducer combine完成
    点菜 combine完成
    评论 
     一个 reducer 分类展示 评论类别完成
    商家
     不需
7. actions 完成
  
8. selectors 计算衍生数据完成
9. components
   app  -> Container 容器组件 -> Home ->Header 组件 Main 组件完成
   Main 是路由组件 ->四个路由 点菜，评论  商家，footer结算完成
   四个组件 点菜，评论 商家 footer完成
   点菜组件中要引入 商品列表组件 和 侧边导航组件完成
  ***
  老师讲解要点：
  1. 如何去除 a 下的高光 在 global.scss 中有所体现
  2. js 中写入 jsx 必须引入 import React, { Component } from 'react'; 才能支持。
  3. mobile 布局 在react 里就用 vw 即可
  4. best-scroll 用法
  5. react 中必须按照不变性原则 拷贝state   newState = {...state}/[...state]