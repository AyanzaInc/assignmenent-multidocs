<template>
  <div
    id="doc-view-item-container"
    class="border-l h-full"
    :class="isExpanded ? 'flex-1' : 'w-12'"
  >
    <div
      id="doc-view-collapsed-item"
      class="
        flex flex-col
        relative
        items-center
        justify-center
        h-full
        px-3
        py-6
        cursor-pointer
      "
      v-if="!isExpanded"
      @click="() => openDoc(id)"
    >
      <img
        src="/img/icons/collapse-expand-icon.png"
        class="absolute top-6 w-5 h-4"
        alt=""
      />
      <p class="text-gray-700 text-sm font-bold transform -rotate-90 w-max">
        {{ title }}
      </p>
    </div>
    <div
      id="doc-view-item"
      class="p-4 h-full flex-1 relative"
      v-show="isExpanded"
    >
      <DocViewItemControls
        :visitors="visitors"
        :is-expanded="docCount === 1"
        @onRemove="() => removeDoc(id)"
        @onCollapse="() => closeDoc(id)"
      />
      <div id="doc-view-item-content" class="h-full mx-auto flex flex-col">
        <div id="content-header" class="text-gray-600">
          <label id="maker-info" class="font-bold">
            {{ `${maker.firstName} ${maker.lastName} ● ` }}
          </label>
          {{
            `${$moment(expDate).format("MMM D, YYYY")} ● ${$moment(
              expDate
            ).format("h:mm")}`
          }}
        </div>
        <div
          id="doc-title"
          class="text-3xl font-bold mt-2"
          :class="title === 'Untitled' ? 'text-gray-400' : 'text-gray-700'"
        >
          {{ title }}
        </div>
        <div
          id="doc-text"
          class="text-base text-gray-500 mt-2 flex-1"
          v-html="content"
        />
        <DocDialogs :dialogs="dialogs" />
        <DocLinks class="mt-3" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

import DocViewItemControls from "@/components/doc/DocViewItemControls.vue";
import DocDialogs from "@/components/doc/DocDialogs.vue";
import DocLinks from "@/components/doc/DocLinks.vue";
import { Link } from "@/store/docs";

export default Vue.extend({
  name: "DocViewItem",
  components: {
    DocViewItemControls,
    DocDialogs,
    DocLinks,
  },
  data() {
    return {};
  },
  mounted() {
    const linkEls = document.getElementsByClassName("text-link");
    for (const linkEl of linkEls) {
      const docId = linkEl.id;

      linkEl.addEventListener("click", () => {
        this.addDoc(docId);
      });
    }
  },
  props: {
    id: {
      type: String,
      default: "",
    },
    isExpanded: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "Untitled",
    },
    text: {
      type: String,
      default: "",
    },
    textLinks: {
      type: Array,
      default: () => [],
    },
    maker: {
      type: Object,
      default: () => ({
        firstName: "FirstName",
        lastName: "LastName",
        avatarUrl: "",
      }),
    },
    expDate: {
      type: Date,
      default: () => new Date(),
    },
    dialogs: {
      type: Array,
      default: () => [],
    },
    visitors: {
      type: Array,
      default: () => [],
    },
    docCount: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    content() {
      let temp = this.text;

      for (const link of this.textLinks as Link[]) {
        temp = temp.replace(
          link.linkText,
          `<a class="text-link font-bold text-indigo-700 cursor-pointer" id="${link.docId}">${link.linkText}</a>`
        );
      }

      return temp;
    },
  },
  methods: {
    ...mapActions("docs", ["addDoc", "openDoc", "closeDoc", "removeDoc"]),
  },
  updated() {
    this.$nextTick(function () {
      const linkEls = document.getElementsByClassName("text-link");
      for (const linkEl of linkEls) {
        const docId = linkEl.id;

        linkEl.addEventListener("click", () => {
          this.addDoc(docId);
        });
      }
    });
  },
});
</script>

<style lang="scss" scoped>
#doc-view-item-content {
  max-width: 50vw;
}
</style>
