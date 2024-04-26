<template>
  <slot />
</template>


<script>
import ParagraphDescription from "../html/ParagraphDescription.vue";
export default {
  components: { ParagraphDescription },
  name: "IndustryCard",
  props: {
    title: String,
    image: String,
    description: String,
  },
};
</script>

<style>
</style>