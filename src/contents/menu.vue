<template>
    <div class="xw-link">
        <el-button type="primary">外链自动显示出来</el-button>
        <div class="mb-4">
            <el-button>Default</el-button>
            <el-button type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
        </div>
    </div>

</template>

<style>
@import url("element-plus/dist/index.css");
.xw-link {
    /* width: 100%; */
    /* height: 100%; */
    font-size: 1.6rem;
    text-align: center;
    background: rgba(49, 76, 105, 0.63);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
}
</style>

<script lang="ts">

import type { PlasmoCSConfig, PlasmoGetStyle } from "plasmo";
import { defineComponent } from 'vue';
import { ElButton } from 'element-plus';
import cssText from 'data-text:element-plus/dist/index.css';

const getStyle: PlasmoGetStyle = () => {
    console.log(cssText);
    const style = document.createElement("style")
    style.textContent = cssText
    return style
}


// 定义 Plasmo 的配置项
export const config: PlasmoCSConfig = {
    matches: ["<all_urls>"],
};

export default defineComponent({
    plasmo: {
        getStyle
    },
    components: {
        ElButton
    },
    setup() {
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
            console.log(request);
            console.log(sender);
            console.log(sendResponse);
            switch (request.message) {
                case "menuItem1Clicked":
                    alert("Menu Item 1 clicked!");
                    break;
                case "menuItem2Clicked":
                    alert("Menu Item 2 clicked!");
                    break;
            }
        });
    },
    mounted() {
        console.log("mounted");
    }
});
</script>
