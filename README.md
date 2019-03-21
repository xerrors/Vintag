# Vintag

`Date: 2019/3/21`
[DemoLink](http://www.xerrors.fun)

模板来自于：[vue-admin-template](https://github.com/PanJiaChen/vue-admin-template/tree/master/src)

本项目已经 gg 故开源纪念下自己的那些不眠之夜

## 具体内容

### 图标数据类型

```json
{
   "title": "String",
   "legend": "Array",
   "axis": {
      "x": "Array" | null,
      "y": "Array" | null
   },
   "data": [
      "Array",
      "Array",
      ...
   ]
}
```

### 小屏控大屏

> 思路
> - 使用 deepstreamHub 实现多界面数据交互。[deepstreamHub](https://deepstreamhub.com/tutorials/getting-started/vuejs/) (已经凉了)
> - 使用 WebSocket 实现不同设备间的跨域传输，Socket.io 好像也不错的。

### 用户信息

- 注册

```json
{
   username: "username",
   password: "password",
   realname: "realname",
   telephone: "telephone",
   email: "email"
}
```

- 登录

```json
{
   username: "username",
   password: "password"
}
```

### 一些想法

#### 关于更换主题

因为更换表格的主题的时候更换的背景是表格的背景，并不能够更换整个展示界面的背景，就不太好看，所以，可以在设计主题的时候为每个主题选择背景图片，或者颜色，当逐日改变的时候就可以相当于更换全剧背景了，是不是很机智。

👆🏽上面的想法太白痴了，不仅仅要更换图表的主题，还要整个界面的主题，所以就需要使用到主题定制，具体的参考这篇文章：[动态换肤](https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/theme.html#%E5%A4%9A%E5%A5%97%E4%B8%BB%E9%A2%98%E6%8D%A2%E8%82%A4)

### 部署

在本机中添加了shell脚本

```shell
git add *
git commit -m "update in VScode"
git push

npm run build

scp -r ./dist/*  root@207.148.79.119:/www/wwwroot/www.xerrors.fun/
```

### 开发日志

#### 🛠 2019.1.29

今天主要是开始对主页面下手啦

- 按着设计稿把样子做了出来，并且把一些我认为不太好的地方给删除掉了
- 添加登出确认提示
- 修复侧栏菜单悬浮时颜色错误的问题
- 添加了外链，不过似乎别人是看不到的，不管了
- 优化了字体过大，页面加载时间过长的问题

#### 🛠 2019.1.28

今天注定是改 Bug 的一天，毕竟昨天慌慌张张的做完了之后留下了很多的上线 Bug 需要修复。

- 修复了上线后图片加载不出来的问题
- 修复了上线后字体加载不出来的问题

#### 🛠 2019.1.27

今天一早（中午一点半）我醒的时候，收到了设计同学的文件，就开始准备重新写登录界面了，路漫漫其修远兮，吾将上下而求索。

- 使用 Flex 布局更新之前的页面布局，使其更加灵活
- 重新写的登录界面的文件，但是之前的文件还没舍得删除，毕竟是自己亲生的
- 添加字体文件（但是我感觉还是去掉的好，毕竟网速还没有那么快）

#### 🛠 2019.1.26

开始着手可视化组件开发，为了尽快适应数据的变化，同时也是因为设计稿还没有给我，又没法与后端同学交流

- 既然没有数据，自动生成随机数据
- 模仿英出现的组件化的图表着手设计自己的组件，因为是自己一个项目使用，全部按照风格统一进行设计

#### 🛠 2019.1.24

为了尽快完成登录操作，早上起来就开始：

- 完善之前的注册界面，现在把注册界面和登录界面放在了一个界面。
- 将主题添加到了浏览器的 Cookies 里面，实现用户刷新时不会重置主题
- 实现当主题更换时刷新当前界面
- 创建表格数据模板，尽可能打包数据，方便加载

#### 🛠 2019.1.23

今天的主要任务还是实现登录以及注册，所以先写了一个注册界面出来，具体的鉴权以及Cookie放到以后再完善

- 添加注册界面，并完善用户本地验证的正则表达式
- 添加服务器为 FireBase 所以不能正常工作

#### 🛠 2019.1.22

今天的第一件事就是：

- 成功部署应用到服务器上面，但是又出现了另外一个bug，老是进入404，还不是我写的404。
- 设置登录界面的卡片为上下左右居中，且添加了进入动画。
- 添加了忘记密码以及用户注册控件，虽然并没有什么用。

#### 🛠 2019.1.21

几经周折，最终还是准备使用原生的Echarts是，虽然配置麻烦了一点，但是文档多啊，使用起来方便啊！

- 之前的404界面由于版权问题，不适合使用，就自己参考案例新建了一个404界面
- 利用 Vuex 的特性实现了如何动态更换全局主题，但是还饿密友做到更新后刷新
- 改变了项目架构

#### 🛠 2019.1.19

最终还是决定使用相对来说功能与遍历程度均衡的 vue-charts

- 采用 vue-admin-templete
- 项目重构且修改仓库名称为 Vintag

#### 🛠 2019.1.15

今天主要解决的是跨域请求问题，对开发环境进行了配置

- 实现了跨域的数据请求，能够使用 axios 进行数据交互。
- 决定使用更加方便的 v-charts 进行图标的绘制

#### 🛠 2019.1.12

时间越来越近咯，我还啥也不会，看来接下来几天要静心开始学习了。目前完成的部分。

- 将登录界面进行一次可有可无的界面美化
- 对登陆进行优化，没有登陆成功的话，无法进入数据界面。

#### 🛠 2019.1.10

尝试将组件封装成一个块状模型，并设置相应样式

- 修改了组件的主题。
- 如何实现登陆跳转。

#### 🛠 2019.1.9

开始制作数据展示界面，思来想去决定使用 [Echarts](https://echarts.baidu.com/) 这个开源的图表化工具。

- 对于整个项目的前后端的数据交互采用 Ajax。
- 实现了第一个 Demo 的展示。

#### 🛠 2019.1.7

实现了简单的登录界面，能够对账户进行简单的判断，同时在登录界面加上了粒子特效并修复了部分显示bug，目前依然是存在着显示问题，具体内容如下：

- 登录按钮和注册按钮的布局并有分散对齐
- 登陆之后怎样跳转到另外一个界面，需要了解跳转的操作。
- 由于 el-row 元素的范围是一整行，也就导致了登录窗口的左边和右边存在粒子特效不可点击的问题。
