import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import 'bootstrap/dist/css/bootstrap.min.css';
import"bootstrap"
// import "bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 

createApp(App).use(store).use(router).mount('#app')
