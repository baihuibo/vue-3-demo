Vue3 异步组件和普通组件使用相同的静态图片资源时引发的错误
===

此问题奇怪在，使用 `vite dev` 开发时，没有问题，但是当 使用 `vite build` 产出 `dist` 生产代码后

访问页面，会出现异常 `TypeError: Cannot add property __props, object is not extensible`

一个简单的复现步骤，使用 `http-server` 模拟

复现步骤
----
```bash
$ cd vue-3-demo
$ npm install
$ npm run build
$
$ cd ./dist
$ hs or http-server
```
打开浏览器访问 http://localhost:3000/

点击 `查看页面` 链接

预期出现 `assess.vue` 、`layout.vue` 渲染出两张图片

结果控制台报错：`TypeError: Cannot add property __props, object is not extensible`

system
```
@vue/compiler-sfc : 3.0.2
vue : 3.0.2
vite : 1.0.0-rc.9
vue-router : 4.0.0-rc.2
```
