<template>
    <span className="xw-top">
        外链自动显示出来
    </span>
</template>

<style>
.xw-top{
    width: 100%;
    height: 2.5rem;
    font-size: 1.6rem;
    text-align: center;
    background: #0550ae;
    color: #fff;
}
.xw-nofollow-link {
  outline: 0.14em dotted red !important;
  outline-offset: 0.2em;
}
</style>

<script lang="ts">
import type { PlasmoCSConfig } from "plasmo";

// 定义 Plasmo 的配置项
export const config: PlasmoCSConfig = {
    matches: ["<all_urls>"]
};

// 封装页面加载完成时添加 nofollow 链接样式的函数
const addNofollowLinkClass = () => {
    console.log("页面加载完成，开始寻找外链");

    // 获取所有带 rel="nofollow" 的链接元素
    const links = document.querySelectorAll('a[rel~="nofollow"]');

    // 遍历每个链接元素，添加 xw-nofollow-link 类名
    links.forEach(link => {
        link.classList.add('xw-nofollow-link');
    });
};

export default {
    plasmo: {
    },
    setup() {
        // 当页面加载完成时，执行添加 nofollow 链接样式的函数
        window.addEventListener('load', addNofollowLinkClass);
    }
};
</script>