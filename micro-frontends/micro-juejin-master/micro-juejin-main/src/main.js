import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import "viewerjs/dist/viewer.css";
// import Viewer from "v-viewer";
// Vue.use(Viewer);

import "@/filter";

// 按需引入Ant Design 组件
import "@/shared/registAntd";

// 注册微应用相关
import subRegister from "./shared/subRegister";

Vue.config.productionTip = false;

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#main_app");

subRegister(vm);
