<script>
import { computed, ref } from "vue";
import ReactDOMServer from "react-dom/server";
import HelloWorld from "./components/HelloWorld.vue";

async function fetchImport() {
  return new Promise(async (resolve, reject) => {
    try {
      const res = (await import("header/HeaderBar")).default;
      resolve(
        ReactDOMServer.renderToString(
          res({
            caption: "React HeaderBar in vue",
          })
        )
      );
    } catch (err) {
      reject(err);
    }
  });
}

export default {
  async setup() {
    const data = ref(null);

    data.value = await fetchImport();

    return {
      headerbar: computed(() => {
        return data.value;
      }),
    };
  },
  components: {
    HelloWorld,
  }
};
</script>

<template>
  <div class="main">
    <div v-html="headerbar"></div>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
