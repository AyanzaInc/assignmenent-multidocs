<template>
  <div id="App">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  bind as clickOutsideBind,
  unbind as clickOutsideUnbind,
} from "@/directives/clickOutside";

import "tailwindcss/tailwind.css";
import "@/styles/index.scss";

Vue.directive("click-outside", {
  bind: clickOutsideBind,
  unbind: clickOutsideUnbind,
});

export default Vue.extend({
  name: "App",
});
</script>
