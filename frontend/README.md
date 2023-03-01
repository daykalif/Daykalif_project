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