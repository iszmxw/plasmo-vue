
// @utils/chrome.ts

// 方法1：设置消息监听
export function setupMessageListener() {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        console.log(request);
        console.log(sender);
        console.log(sendResponse);
        switch (request.message) {
            case "menuItem1Clicked":
                alert("菜单1被点击");
                break;
            case "menuItem2Clicked":
                alert("菜单2被点击");
                break;
        }
    });
}
