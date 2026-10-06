# 832402230 Calculator Frontend

一个基于 HTML、CSS 和 JavaScript 实现的 Web 计算器前端项目。

本项目作为计算器系统的前端部分，通过 HTTP API 与 FastAPI 后端通信。数学表达式的最终计算由后端完成，前端主要负责用户输入、结果展示以及历史记录的显示和删除。

## 在线访问

- 在线计算器：https://eight32402230-calculator-frontend.onrender.com
- 后端 API：https://eight32402230-calculator-backend.onrender.com
- Swagger API 文档：https://eight32402230-calculator-backend.onrender.com/docs
- 后端 GitHub：https://github.com/Mikorchara/832402230_calculator_backend

> 后端部署在 Render 免费实例上。长时间无访问后实例可能进入休眠状态，因此首次请求可能需要等待一段时间。

## 功能

- 支持加、减、乘、除四则运算
- 支持小数输入
- 支持括号表达式
- 支持复合表达式和运算优先级
- 支持清空当前表达式
- 支持退格删除
- 显示计算结果
- 显示历史计算记录
- 支持删除指定历史记录
- 计算错误时显示 `Error`

## 技术栈

- HTML5
- CSS3
- JavaScript
- Fetch API

本项目不依赖前端框架或第三方 JavaScript 库。

## 项目结构

```text
832402230_calculator_frontend/
├── css/
│   └── style.css
├── js/
│   └── app.js
├── .gitignore
├── codestyle.md
├── index.html
└── README.md
```

## 运行环境

推荐使用现代浏览器，例如：

- Google Chrome
- Microsoft Edge

本地开发时需要先启动对应的 Calculator Backend。

## 本地启动

进入前端项目目录：

```powershell
cd 832402230_calculator_frontend
```

使用 Python 启动简单 HTTP Server：

```powershell
python -m http.server 5500
```

然后在浏览器访问：

```text
http://127.0.0.1:5500/
```

## 后端 API

前端通过以下 API 与后端通信。

### 计算表达式

```text
POST /api/calculate
```

前端向后端发送数学表达式，并显示后端返回的计算结果。

### 获取历史记录

```text
GET /api/history
```

页面加载后会自动读取并显示历史计算记录。

### 删除历史记录

```text
DELETE /api/history/{id}
```

点击历史记录右侧的“删除”按钮，可以删除对应记录。

## 前后端连接

生产环境后端地址：

```text
https://eight32402230-calculator-backend.onrender.com
```

前端在 `js/app.js` 中通过 `API_BASE_URL` 统一配置后端 API 地址。

后端通过 CORS 配置允许已部署的前端访问 API。

## 使用说明

1. 点击数字、运算符和括号按钮输入表达式。
2. 点击 `=` 将表达式发送到后端进行计算。
3. 点击 `C` 清空当前表达式和显示结果。
4. 点击 `⌫` 删除表达式最后一个字符。
5. 计算成功后，历史记录会自动刷新。
6. 点击历史记录旁的“删除”按钮可以删除指定记录。

## 部署

前端使用 Render Static Site 部署：

```text
https://eight32402230-calculator-frontend.onrender.com
```

部署代码来源于本仓库的 `main` 分支。