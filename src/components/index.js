import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import { createApp } from '@vue/composition-api'
import EmailEditor from './EmailEditor.vue';
Vue.use(VueCompositionAPI)
const Components = {
  EmailEditor,
};

const app = createApp({});

Object.keys(Components).forEach((name) => {
  app.component(name, Components[name]);
});

export { EmailEditor };
export default Components;
