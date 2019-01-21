# Vue 学习历程
`Date: 2019/1/19`

模板来自于：https://github.com/PanJiaChen/vue-admin-template/tree/master/src

## 思路

### 登录验证
> 思路
> - 得益于vue的数据双向绑定，让我们不用操作DOM就能边输入边验证字符串合法性
> - 利用axios实现前后端的数据交互
> - 利用jsonwebtoken实现登录验证，结合vue-router的导航钩子在跳转前拦截验证access_token的有效性

*参考简书文章https://www.jianshu.com/p/c51ffebeceed*

### 小屏控大屏
> 思路
> - 使用 deepstreamHub 实现多界面数据交互。[deepstreamHub](https://deepstreamhub.com/tutorials/getting-started/vuejs/) (目前已经不再对外注册账户)

## 任务列表
- route & axios
- 实现对远程服务器进行数据请求，并完成表单验证。
- 对用户登录状态进行鉴定，如果没有登录则无法进入数据窗口。
- 在程序中使用 svg-icon 进行图形渲染。
- 部署到服务器上面

## Bug 列表
无

## 开发日志
#### 2019.1.21
几经周折，最终还是准备使用原生的Echarts是，虽然配置麻烦了一点，但是文档多啊，使用起来方便啊！
- 之前的404界面由于版权问题，不适合使用，就自己参考案例新建了一个404界面。
- 利用 Vuex 的特性实现了如何动态更换全局主题，但是还饿密友做到更新后刷新
- 改变了项目架构

#### 2019.1.19
最终还是决定使用相对来说功能与遍历程度均衡的 vue-charts
- 采用 vue-admin-templete
- 项目重构且修改仓库名称为 Vintag

#### 2019.1.15
今天主要解决的是跨域请求问题，对开发环境进行了配置。
- 实现了跨域的数据请求，能够使用 axios 进行数据交互。
- 决定使用更加方便的 v-charts 进行图标的绘制。 

#### 2019.1.12
时间越来越近咯，我还啥也不会，看来接下来几天要静心开始学习了。目前完成的部分。
- 将登录界面进行一次可有可无的界面美化
- 对登陆进行优化，没有登陆成功的话，无法进入数据界面。

#### 2019.1.10
尝试将组件封装成一个块状模型，并设置相应样式
- 修改了组件的主题。
- 如何实现登陆跳转。

#### 2019.1.9
开始制作数据展示界面，思来想去决定使用 [Echarts](https://echarts.baidu.com/) 这个开源的图表化工具。
- 对于整个项目的前后端的数据交互采用 Ajax。
- 实现了第一个 Demo 的展示。

#### 2019.1.7
实现了简单的登录界面，能够对账户进行简单的判断，同时在登录界面加上了粒子特效并修复了部分显示bug，目前依然是存在着显示问题，具体内容如下：
- 登录按钮和注册按钮的布局并有分散对齐
- 登陆之后怎样跳转到另外一个界面，需要了解跳转的操作。
- 由于 el-row 元素的范围是一整行，也就导致了登录窗口的左边和右边存在粒子特效不可点击的问题。
