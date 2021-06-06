import { createApp, provide, h } from "vue";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";

import App from "./App.vue";
import router from "./router";
import store from "./store";

const defaultClient = new ApolloClient({
  uri: "http://localhost:4001/",
  cache: new InMemoryCache(),
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, defaultClient);
  },
  render() {
    return h(App);
  },
});

app.use(store);
app.use(router);
app.mount("#app");
