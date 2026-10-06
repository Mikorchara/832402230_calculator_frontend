\# Frontend Code Style



本项目使用 HTML、CSS 和 JavaScript 开发，代码以简洁、清晰和易读为主要原则。



\## 1. 通用规范



\- 文件统一使用 UTF-8 编码。

\- 使用 4 个空格进行缩进。

\- 使用有意义的英文名称命名变量、函数和样式。

\- 保持代码结构清晰，避免不必要的重复代码。

\- 对重要功能添加简单注释。



\## 2. HTML / CSS



\- HTML 标签使用小写。

\- HTML 属性使用双引号。

\- CSS 样式统一放在 `css/style.css`。

\- CSS 类名和 ID 使用小写英文，多个单词使用 `-` 分隔。



例如：



```text

history-list

history-item

delete-btn



3\. JavaScript

\- JavaScript 代码统一放在 js/app.js。

\- 优先使用 const，需要重新赋值时使用 let。

\- 变量和函数使用 camelCase（小驼峰）命名。

\- 使用 async/await 处理异步 API 请求。

\- API 请求失败时进行必要的错误处理。

例如：

const resultDisplay = document.getElementById("result");



async function loadHistory() {

&#x20;   // ...

}



4\. Git 提交

提交信息应简洁说明本次修改内容，例如：

Initial frontend implementation

Add frontend documentation

Fix history display

