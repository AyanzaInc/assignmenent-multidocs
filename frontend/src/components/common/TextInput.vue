<template>
  <div class="h-8 border border-gray-200 rounded-md overflow-hidden px-3">
    <label class="w-full h-full flex items-center">
      <img
        :src="icon.icon"
        :class="icon.class"
        class="mr-2"
        alt=""
        v-for="(icon, index) in before"
        :key="'before-icon-' + index"
      />
      <input
        class="w-full h-full text-sm text-black focus:outline-none"
        type="text"
        ref="input"
        v-model="model"
        :placeholder="placeholder"
        :autoFocus="autoFocus"
        @keyup.enter="onEnter"
      />
      <img
        :src="icon.icon"
        :class="icon.class"
        class="ml-2"
        alt=""
        v-for="(icon, index) in after"
        :key="'after-icon-' + index"
      />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Input",
  props: {
    before: {
      type: Array,
      default: null,
    },
    after: {
      type: Array,
      default: null,
    },
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    autoFocus: {
      type: Boolean,
      default: false,
    },
    autoFocusOnMount: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      model: this.value,
    };
  },
  mounted() {
    if (this.autoFocusOnMount) {
      (this.$refs.input as HTMLElement).focus();
    }
  },
  watch: {
    model(currentValue) {
      this.$emit("input", currentValue);
    },
    value(value) {
      this.model = value;
    },
  },
  methods: {
    onEnter() {
      this.$emit("onenter");
    },
  },
});
</script>

<style lang="scss" scoped></style>
