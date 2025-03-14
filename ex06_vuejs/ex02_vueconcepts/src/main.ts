import './assets/main.css'

import { createApp } from 'vue'
// import router from '@/components/10-VueRouterBasics/router/routing';
// import router from './components/31-NestedRoutes/router.ts';
// import router from './components/32-ProgrammaticNavigation/router.ts';
// import router from './components/33-NamedRoutes/router.ts';
// import router from './components/34-NamedViews/router.ts';
// import router from './components/35-RouteGuards/router.ts';
// first component of the vue js 
import App from './App.vue'
import { createPinia } from 'pinia';
const pinia = createPinia();

const app =createApp(App);
app.use(pinia);
//app.use(router);
app.mount('#app');


