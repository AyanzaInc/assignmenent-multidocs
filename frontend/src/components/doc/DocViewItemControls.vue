<template>
  <div id="doc-view-item-controls" class="absolute right-4 top-4 w-max">
    <div id="avatars" class="flex items-center w-max">
      <img
        class="w-7 h-7 rounded-full border-2 border-white -m-1"
        :class="'z-' + (visitors.length - index)"
        v-for="(visitor, index) in visitors"
        :key="'visitor-avatar' + index"
        :src="visitor.avatarUrl || '/img/user1.png'"
        :alt="visitor.firstName + '' + visitor.lastName"
      />
      <div
        v-if="!visitors.length"
        class="
          w-7
          h-7
          rounded-full
          bg-gray-100
          flex
          items-center
          justify-center
        "
      >
        <img src="/img/icons/lock-icon.png" class="w-4 h-4" />
      </div>
      <Button
        class="h-7 bg-indigo-700 rounded-full px-3 text-white font-bold ml-2"
        v-if="isExpanded"
        >Share
      </Button>
      <Button class="h-7 w-7 bg-indigo-700 rounded-full ml-2" v-else
        ><img src="/img/icons/export-icon.png" class="w-4 h-4 m-auto" alt=""
      /></Button>
      <Button
        class="h-7 border rounded-full px-3 text-gray-500 font-bold ml-2"
        v-if="isExpanded"
        >Done</Button
      >
      <Button class="w-7 h-7 flex items-center justify-center ml-2"
        ><img src="/img/icons/more-horizontal-icon.png" class="w-5" alt=""
      /></Button>
      <Button
        class="w-7 h-7 flex items-center justify-center ml-4"
        @click="onCollapse"
        v-if="!isExpanded"
        ><img src="/img/icons/collapse-expand-icon.png" class="w-5" alt=""
      /></Button>
      <Button
        class="w-7 h-7 flex items-center justify-center ml-2"
        @click="onRemove"
        v-if="!isExpanded"
        ><img src="/img/icons/close-icon.png" class="w-4" alt=""
      /></Button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

import Button from "@/components/common/Button.vue";

export default Vue.extend({
  name: "DocViewItemControls",
  components: {
    Button,
  },
  props: {
    visitors: {
      type: Array,
      default: () => [],
    },
    isExpanded: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onCollapse() {
      this.$emit("onCollapse");
    },
    onRemove() {
      this.$emit("onRemove");
    },
  },
});
</script>
