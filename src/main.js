// STEP-1, Importing Vue, App and Router and other components/modules at the top
import Vue from 'vue';
import App from './App.vue';
import router from './router';

import 'bulma/css/bulma.css';

// Import the Auth0 configuration
import { domain, clientId } from "../auth_config.json";
// Import the plugin here
import { Auth0Plugin } from "./auth";

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

// STEP-2, Setting the app in development mode.
Vue.config.productionTip = false

// STEP-3, Creating a new Vue instance at the bottom
//! A Vue instance is required for every Vue app. 
/* 
The Vue instance will accept DATA/OPTIONS object that contains 
information about the application such as:
* 1- the DOM element that the Vue instance will be mounted on, 
* 2- data the instance will use, 
* 3- functions that run at some point during the instance's lifecycle and more.
*/

// In our case the Vue instance is using the router, rendering the app with the App template. 
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
