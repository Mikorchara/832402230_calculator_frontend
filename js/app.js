const expressionDisplay = document.getElementById("expression");
const resultDisplay = document.getElementById("result");
const API_BASE_URL = "https://eight32402230-calculator-backend.onrender.com";
let expression = "";


// 找到所有具有 data-value 的按钮
const valueButtons = document.querySelectorAll("[data-value]");


// 给每个按钮添加点击事件
valueButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;

        expression += value;

        expressionDisplay.textContent = expression;
    });
});


// 清空按钮
document.getElementById("clear").addEventListener("click", () => {
    expression = "";

    expressionDisplay.textContent = "";
    resultDisplay.textContent = "0";
});


//回退键
document.getElementById("backspace").addEventListener("click", () => {
    expression = expression.slice(0, -1);
    expressionDisplay.textContent = expression;
});


//计算
document.getElementById("equals").addEventListener("click", async () => {
    if (!expression) {
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/calculate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                expression: expression
            })
        });

        const data = await response.json();

        if (!response.ok) {
            resultDisplay.textContent = "Error";
            return;
        }

        resultDisplay.textContent = data.result;

        await loadHistory();

    } catch (error) {
        resultDisplay.textContent = "Error";
        console.error(error);
    }
});


async function deleteHistory(id) {
    const response = await fetch(
        `${API_BASE_URL}/api/history/${id}`,
        {
            method: "DELETE"
        }
    );

    if (!response.ok) {
        console.error("删除失败");
        return;
    }

    await loadHistory();
}


async function loadHistory() {
    const response = await fetch(`${API_BASE_URL}/api/history`);
    const history = await response.json();

    const historyBox = document.getElementById("history-list");

    if (history.length === 0) {
        historyBox.innerHTML = "暂无历史记录";
        return;
    }

    historyBox.innerHTML = "";

    for (const item of history) {
        const record = document.createElement("div");
        record.className = "history-item";

        const text = document.createElement("span");
        text.className = "history-expression";
        text.textContent = `${item.expression} = ${item.result}`;

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "删除";

        deleteButton.addEventListener("click", () => {
            deleteHistory(item.id);
        });

        record.appendChild(text);
        record.appendChild(deleteButton);

        historyBox.appendChild(record);
    }
}

loadHistory();