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

chrome.runtime.onInstalled.addListener(() => {
  // 创建第一个菜单项
  chrome.contextMenus.create({
    id: "1",
    title: "★ 收藏网址",
    contexts: ["all"]
  });

  // 创建第二个菜单项
  chrome.contextMenus.create({
    id: "2",
    title: "☁ 意见反馈",
    contexts: ["all"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "1":
      chrome.tabs.sendMessage(tab.id, { info, tab, message: "menuItem1Clicked" });
      break;
    case "2":
      chrome.tabs.sendMessage(tab.id, { message: "menuItem2Clicked" });
      break;
  }
});
