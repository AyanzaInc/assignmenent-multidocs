<template>
  <div class="h-screen flex flex-col">
    <header class="px-4 py-1.5 flex items-center justify-between border-b">
      <img class="w-9 h-9 rounded-xl" src="/img/logo.png" alt="" />
      <SearchInput v-model="search" />
      <img class="w-8 h-8 rounded-full" src="/img/user1.png" alt="" />
    </header>
    <div class="doc-view-screen flex flex-1">
      <LeftNav />
      <div class="doc-view-section flex-1 flex">
        <DocViewItem
          v-for="(doc, index) in docs"
          :key="'doc-view-item' + index"
          :id="doc.id"
          :is-expanded="doc.isExpanded"
          :maker="doc.maker"
          :title="doc.title"
          :text="doc.text"
          :exp-date="doc.expDate"
          :text-links="doc.textLinks"
          :dialogs="doc.dialogs"
          :visitors="doc.visitors"
          :doc-count="docs.length"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapState } from "vuex";

import LeftNav from "@/components/LeftNav.vue";
import SearchInput from "@/components/common/SearchInput.vue";
import DocViewItem from "@/components/doc/DocViewItem.vue";

export default Vue.extend({
  name: "DocView",
  components: {
    SearchInput,
    LeftNav,
    DocViewItem,
  },
  data() {
    return {
      search: "",
    };
  },
  created() {
    this.addMainDoc();
  },
  computed: {
    ...mapState("docs", ["docs"]),
  },
  methods: {
    ...mapActions("docs", ["addMainDoc"]),
  },
});
</script>

<style lang="scss" scoped></style>
