<template>
  <TextInput
    class="w-3/5"
    v-model="model"
    :before="[{ icon: '/img/icons/search-icon.png', class: 'w-4 h-4' }]"
    :after="[
      {
        icon: '/img/icons/special-icon.png',
        class: 'w-3 h-3',
      },
      {
        icon: '/img/icons/k-icon.png',
        class: 'w-2.5 h-3 ml-2',
      },
    ]"
    placeholder="Search workspaces, documents, tags, people..."
  />
</template>

<script lang="ts">
import Vue from "vue";

import TextInput from "./TextInput.vue";

export default Vue.extend({
  name: "SearchInput",
  components: {
    TextInput,
  },
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      model: this.value,
    };
  },
  watch: {
    model(currentValue) {
      this.$emit("input", currentValue);
    },
    value(value) {
      this.model = value;
    },
  },
});
</script>

<style lang="scss" scoped></style>
