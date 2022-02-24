import '@/style/reset.scss';
import { createApp } from 'vue';
import { initRem } from '@/utils/client';
import { init } from '@/utils';
import JD from '@/utils/platforms';
import root from './App.vue';

initRem(750);

// 设置页面title
document.title = '骁龙看视频 赚积分';

const app = createApp(root);

// 初始化页面,
init({
  platform: 'jd',
  sysCode: 'cjwx',
  // activityType: '40',
  urlPattern: '/m/:venderId/:activityType/:activityId/?helpUuid=:helpUuid',
}).then(({ baseInfo, isOpenCard, pathParams }) => {
  app.provide('isOpenCard', isOpenCard);
  app.provide('baseInfo', baseInfo);
  app.provide('helpUuid', pathParams.helpUuid);
  app.mount('#app');
});
