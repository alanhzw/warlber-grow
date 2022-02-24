/*
 * @Description:林某
 * @Date: 2021-06-24 10:47:07
 * @LastEditTime: 2021-07-15 10:00:09
 * @FilePath: \custom\src\pages\1000147201\2106100014720101\index.ts
 */
import '@/style/reset.scss';
import { createApp } from 'vue';
import { init } from '@/utils';

import { initRem } from '@/utils/client';
import root from './App.vue';

initRem(750);

// 设置页面title
document.title = '蒙牛拼手速赢大奖';

const app = createApp(root);

// 初始化页面,
init({
  platform: 'jd',
  sysCode: 'cjwx',
  urlPattern: '/m/:venderId/:activityType/:activityId',
  mockPin: {
    nickname: 'ces',
    pin: '63/Tyw/HiTryzWk4LVLkhU7oeVP9kq2pYSH90mYt4m3fwcJlClpxrfmVYaGKuquQkdK3rLBQpEQH9V4tdrrh0w==',
  },
}).then(({ baseInfo, isOpenCard }) => {
  app.provide('isOpenCard', isOpenCard);
  app.provide('baseInfo', baseInfo);
  app.mount('#app');
});
