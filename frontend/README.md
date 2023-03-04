# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

## 项目技术
react18
umi
typescript
webpack
react hooks(useReducer,useContext)
valtio 状态管理
react-router-dom 路由
lodash

dva
antd pro
arco design pro(文件上传)

echarts
sankey
gantt
crawler
iconfont
electron
jwt
验证码
QQ/微信/github登陆
支付功能
中英文切换
chatgpt


## 代码提交规范

### type 标识代码提交的类型,type 取值通常如下：

- feat: 新增 feature
- flx: 修复 bug
- docs: 仅仅修改了文档，比如 README、CHANGELOG、CONTRIBUTE 等
- style: 仅仅修改了空格、格式缩进、逗号等，不改变代码逻辑
- refactor: 代码重构，没有加新功能或者修复 bug
- perf: 优化相关，比如提升性能、体验
- test: 测试用例，包括单元测试、集成测试等
- chore: 改变构建流程，或者增加依赖库、工具等
- revert: 回滚到上一个版本


### 测试代码访问

#### 测试路由
http://localhost:8000/                  --> 首页
http://localhost:8000/demo              --> 会加载layout页面
http://localhost:8000/demo/user         --> 会加载layout页面+wrappers
http://localhost:8000/demo/userInfo     --> 会加载layout页面+pages下的user页面

#### 测试sankey
http://localhost:8000/demo/sankey       --> 会加载layout页面+pages下的sankey页面

---

### 使用umi max内置valtio方式：
https://umijs.org/docs/max/introduce


#### ant design pro v5 Error: Module “xxx“ does not exist in container.报错
解决方案一
在/config/config.ts 下注释掉 mfsu: {}, 或者删掉即可

解决方案二
删除/src/.umi 这个文件夹重启即可


教学视频参考：
https://www.bilibili.com/video/BV1mr4y1r7GV?p=1