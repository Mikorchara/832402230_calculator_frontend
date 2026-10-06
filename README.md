\# 832402230 Calculator Frontend



一个基于 HTML、CSS 和 JavaScript 实现的 Web 计算器前端项目。



本项目作为计算器系统的前端部分，通过 HTTP API 与 FastAPI 后端通信。计算表达式由后端完成计算，前端主要负责用户输入、结果展示以及历史记录的显示和删除。



\## 功能



\- 支持加、减、乘、除四则运算

\- 支持小数输入

\- 支持括号表达式

\- 支持复合表达式和运算优先级

\- 支持清空当前表达式

\- 支持退格删除

\- 显示计算结果

\- 显示历史计算记录

\- 支持删除指定历史记录

\- 计算错误时显示 `Error`



\## 技术栈



\- HTML5

\- CSS3

\- JavaScript

\- Fetch API



本项目不依赖前端框架或第三方 JavaScript 库。



\## 项目结构



```text

832402230\_calculator\_frontend/

├── css/

│   └── style.css

├── js/

│   └── app.js

├── .gitignore

├── codestyle.md

├── index.html

└── README.md



运行环境

推荐使用现代浏览器，例如：

\- Google Chrome

\- Microsoft Edge

运行前需要先启动对应的 Calculator Backend。

后端默认地址：

http://127.0.0.1:8000



启动方法

进入前端项目目录：

cd 832402230\_calculator\_frontend



使用 Python 启动简单 HTTP Server：

python -m http.server 5500



然后在浏览器访问：

http://127.0.0.1:5500/



后端 API

当前前端通过以下 API 与后端通信：

计算表达式

POST /api/calculate



前端向后端发送表达式，并显示后端返回的计算结果。

获取历史记录

GET /api/history



页面加载后会自动读取并显示历史计算记录。

删除历史记录

DELETE /api/history/{id}



点击历史记录右侧的“删除”按钮，可以删除对应记录。

前后端连接

当前开发环境中，前端请求的后端地址为：

http://127.0.0.1:8000



因此本地运行时需要同时启动：

Frontend: http://127.0.0.1:5500

Backend:  http://127.0.0.1:8000



如果部署到公网，需要将 js/app.js 中的 API 地址修改为实际部署的后端地址。

使用说明

1\. 点击数字、运算符和括号按钮输入表达式。

2\. 点击 = 将表达式发送到后端进行计算。

3\. 点击 C 清空当前表达式和显示结果。

4\. 点击 ⌫ 删除表达式最后一个字符。

5\. 计算成功后，历史记录会自动刷新。

6\. 点击历史记录旁的“删除”按钮可以删除指定记录。

