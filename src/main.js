import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.prototype.$urlAPI = "https://apilandingpage.herokuapp.com";
new Vue({
  render: (h) => h(App),
}).$mount("#app");
