<template>
  <div id="doc-links">
    <div
      id="links-header"
      class="flex items-center cursor-pointer"
      @click="toggle"
    >
      <div
        class="bg-gray-200 w-4 h-4 rounded flex items-center justify-center"
        :class="isExpanded ? '' : 'transform -rotate-90'"
      >
        <img src="/img/icons/arrow-down-icon.png" class="w-2" alt="" />
      </div>
      <span class="uppercase text-gray-400 font-bold ml-2">Links here</span>
    </div>
    <div
      id="links-content"
      class="bg-gray-100 rounded-lg flex mt-2"
      v-if="isExpanded"
    >
      <div
        class="p-4"
        id="link"
        v-for="(_, index) in [0, 1]"
        :key="'link' + index"
      >
        <p class="font-bold text-gray-500">Link to this document</p>
        <span class="text-gray-500"
          >Lorem ipsum dolor it amet consetetur adipiscing sum.</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DocLinks",
  components: {},
  data() {
    return {
      isExpanded: false,
    };
  },
  props: {
    dialogs: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    toggle(): void {
      this.isExpanded = !this.isExpanded;
    },
  },
});
</script>

<style lang="scss" scoped></style>
