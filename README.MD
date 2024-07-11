# create-web-tpl

一个轻量的脚手架，默认 生成 vue spa 项目，默认为 vue3版本，并支持 vue2, react, react-hook [模板项目](https://github.com/Fantasy15/web-template)，包含了 webpack, router, store 等, 完全暴露，无二次开发成本


### 技术栈

- 默认版本

    webpack5 + vue3 + vue-router + pinia

- react

    webpack5 + react + react-router + mobx

- react-hook-version

    webpack5 + react(hook风格) + react-router + mobx
## 对比其他脚手架

- create-react-app

    更简洁的 webpack 配置，公共 webpack.config.js 在 100 行左右
- vue-cli

    暴露除了底层 webpack 配置，无二次开发成本


## 使用


```
npx create-web-tpl my-app

cd my-app

npm install

npm run dev

```

##

```
npx create-web-tpl <projectName> [projectType]
```


## 参数

| option | required | type  | default  | value
| -------| -------| -------| -----------| ---------
| projectName   | True      | String |  ''  | eg: 'myapp'
| prejectType   | False     | String |  ''  | react/react-hook-version



