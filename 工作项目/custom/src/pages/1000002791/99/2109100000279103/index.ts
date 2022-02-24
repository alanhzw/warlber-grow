import { createApp } from 'vue';
import { initRem } from '@/utils/client';
import JD from '@/utils/platforms';
import '@/style/reset.scss';
import { init } from '@/utils';
import root from './App.vue';

const app = createApp(root);

initRem(750);

// 初始化页面,
init({
  platform: 'jd',
  sysCode: 'cjwx',
  urlPattern: '/m/:venderId/:activityType/:activityId',
}).then(({ baseInfo, isOpenCard, pathParams }) => {
  app.provide('baseInfo', baseInfo);
  app.provide('isOpenCard', isOpenCard);
  app.provide('helpUuid', pathParams.helpUuid);
  app.mount('#app');
  JD.setHeaderShare({
    title: '会员领代言人微信红包封面',
    content: '加入滴露会员，领经典款代言人微信红包封面',
    imageUrl: 'https://img10.360buyimg.com/imgzone/jfs/t1/217304/3/1131/114362/616fd324Ee7b3fa66/11cc52dfda755bcb.jpg',
  });
});
