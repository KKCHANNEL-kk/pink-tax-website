import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";
import VueCompositionAPI from "@vue/composition-api";
import animated from "animate.css";

import "echarts";

import * as ECharts from "vue-echarts";
import { use } from "echarts/core";

import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import { GridComponent, TooltipComponent } from "echarts/components";

import SogTagCloud from "sog-tag-cloud";
Vue.use(SogTagCloud);

import VueTippy, { TippyComponent } from "vue-tippy";
Vue.use(VueTippy);
Vue.component("v-tippy", TippyComponent);

use([CanvasRenderer, BarChart, GridComponent, TooltipComponent]);

import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);
Vue.use(VueCompositionAPI);
Vue.use(animated);

Vue.config.productionTip = false;
Vue.component("v-chart", ECharts);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
