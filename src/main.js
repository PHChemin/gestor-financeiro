// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles.css";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "dark",
    themes: {
      dark: {
        colors: {
          primary: "#00FF65", // #E53935
          secondary: "#858585", // #FFCDD2
        },
      },
    },
  },
  icons: {
    defaultSet: "mdi",
  },
});

const app = createApp(App);

app.use(vuetify);
app.use(router);

app.mount("#app");
