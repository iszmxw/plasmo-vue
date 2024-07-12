<template>
  <div class="popup">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="username" name="mobile" label="手机号" placeholder="请输入手机号码"
          :rules="[{ required: true, message: '请输入手机号码' }]" />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const username = ref('');
    const onSubmit = () => {
      // 向后台发送消息启动任务
      chrome.runtime.sendMessage({
        greeting: "123",
        action: 'bomb',
        data: {
          username: username.value
        }
      }, function (response) {
        console.log(response.farewell);
      });
    };
    return {
      username,
      onSubmit,
    };
  },
};

</script>


<style scoped>
.popup {
  padding: 30px 0px 20px 0px;
  width: 320px;
}
</style>