<template>
    <div class="xw-link">
        <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
            open
        </el-button>

        <el-drawer v-model="drawer" title="I am the title" :with-header="false">
            <span>Hi there!</span>
        </el-drawer>

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
import { defineComponent, ref } from 'vue';
import { ElButton, ElDrawer } from 'element-plus';
import type { PlasmoCSConfig, PlasmoGetStyle } from "plasmo";
import cssText from 'data-text:element-plus/dist/index.css';
import { setupMessageListener } from '@utils/chrome';

export const config: PlasmoCSConfig = {
    matches: ["<all_urls>"],
};

export const getStyle: PlasmoGetStyle = () => {
    const style = document.createElement("style");
    style.textContent = cssText;
    return style;
};

export default defineComponent({
    plasmo: {
        getStyle
    },
    components: {
        ElButton,
        ElDrawer
    },
    setup() {
        const drawer = ref(false);
        setupMessageListener();
        return {
            drawer
        }
    },
    mounted() {
        console.log("mounted");
    }
});
</script>