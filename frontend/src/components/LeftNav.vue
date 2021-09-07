<template>
  <div class="flex flex-col px-3 py-3 w-max">
    <Button
      class="w-9 h-9 rounded-full border focus:outline-none m-1"
      :class="active === index ? 'bg-indigo-700' : 'bg-white'"
      v-for="(item, index) in tabItems"
      :key="'tab-item' + index"
      @click="() => onClickTab(index)"
    >
      <img
        class="m-auto w-4 h-4"
        :src="active === index ? item.activeIcon : item.icon"
        alt=""
      />
    </Button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Button from "./common/Button.vue";

export default Vue.extend({
  name: "LeftNav",
  components: {
    Button,
  },
  data() {
    return {
      active: 0,
      tabItems: [
        {
          activeIcon: "/img/icons/feather-icon.png",
          icon: "/img/icons/feather-icon-black.png",
        },
        {
          activeIcon: "/img/icons/clock-icon.png",
          icon: "/img/icons/clock-icon-black.png",
        },
        {
          activeIcon: "/img/icons/alarm-icon.png",
          icon: "/img/icons/alarm-icon-black.png",
        },
        {
          activeIcon: "/img/icons/network-icon.png",
          icon: "/img/icons/network-icon-black.png",
        },
      ],
    };
  },
  methods: {
    onClickTab(tabId: number) {
      this.active = tabId;
    },
  },
});
</script>
