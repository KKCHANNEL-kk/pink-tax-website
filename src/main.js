import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";
import VueCompositionAPI from "@vue/composition-api";
import animated from "animate.css";

// import echarts from "echarts";

// import * as VueECharts from "vue-echarts";
// import { use } from "echarts/core";

// import { CanvasRenderer } from "echarts/renderers";
// import { BarChart } from "echarts/charts";
// import { GridComponent, TooltipComponent } from "echarts/components";
// import themeVintage from "@/assets/js/echartsTheme/vintage.json";
// echarts.registerTheme("vintage", themeVintage);
// use([CanvasRenderer, BarChart, GridComponent, TooltipComponent]);
// Vue.component("v-chart", VueECharts);

import SogTagCloud from "sog-tag-cloud";
Vue.use(SogTagCloud);

import VueTippy, { TippyComponent } from "vue-tippy";
Vue.use(VueTippy);
Vue.component("v-tippy", TippyComponent);

import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);
Vue.use(VueCompositionAPI);
Vue.use(animated);

import "./assets/fonts/font.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
