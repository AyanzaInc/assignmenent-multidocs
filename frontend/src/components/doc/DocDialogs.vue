<template>
  <div id="doc-discussion">
    <div
      id="discussion-header"
      class="flex items-center text-gray-500 uppercase font-bold cursor-pointer"
      @click="toggle"
    >
      <img src="/img/icons/dialog-icon.png" class="w-5 h-5 mr-2" alt="" />
      {{ isExpanded ? "Discussion" : "Start Discussion" }}
    </div>
    <div id="discussion-input" class="flex items-center py-3" v-if="isExpanded">
      <img src="/img/user1.png" class="w-6 h-6 mr-3" alt="" />
      <TextInput class="flex-1" placeholder="Leave a comment" />
    </div>
    <div id="dialogs" class="py-3 border-t" v-if="dialogs.length && isExpanded">
      <div
        id="dialog"
        class="relative flex"
        v-for="(dialog, index) in dialogs"
        :key="'dialog' + index"
      >
        <img
          src="/img/icons/more-horizontal-icon.png"
          class="w-5 absolute right-0 top-2"
          alt=""
        />
        <img
          :src="dialog.sender.avatarUrl || '/img/user1.png'"
          class="w-6 h-6 mr-3 mt-2"
          alt=""
        />
        <div id="dialog-content">
          <div class="text-gray-800 font-bold flex">
            {{ `${dialog.sender.firstName} ${dialog.sender.lastName}` }}
            <div class="text-gray-600 font-normal ml-2">5 min ago</div>
          </div>
          <div class="text-gray-800 text-sm">{{ dialog.message }}</div>
          <div class="text-indigo-700 font-bold text-sm">Reply</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import TextInput from "@/components/common/TextInput.vue";

export default Vue.extend({
  name: "DocDialogs",
  components: {
    TextInput,
  },
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
