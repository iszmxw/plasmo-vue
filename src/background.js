// src/background.js

// 定义一个后台运行的函数
function myBackgroundTask() {
  console.log("后台任务正在运行...");
  // 在这里编写你的后台任务逻辑
}

// 使用定时器每隔5秒运行一次
setInterval(myBackgroundTask, 5 * 1000);

// 初始化时立即运行一次
myBackgroundTask();

// 监听来自前端界面的消息
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "bomb") {
    // myBackgroundTask(); // 执行一次后台任务
    console.log("执行一次后台任务", sender);
    console.log(request);
    // 编写异步执行的函数，执行短信轰炸
    // 可以发送响应
    sendResponse({ farewell: "Goodbye" });
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(sender.tab ? "来自内容脚本：" + sender.tab.url : "来自扩展程序");
  sendResponse({ farewell: "再见" });
});
