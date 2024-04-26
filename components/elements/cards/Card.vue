<template>
  <div>
    <HeadlineFour>{{ title }}</HeadlineFour>
    <ParagraphDescriptionHero>{{ description }}</ParagraphDescriptionHero>
    <CtaButton :to="to"> {{ text }} </CtaButton>
  </div>
</template>
      

<script>
export default {
  name: "Card",
  props: {
    title: String,
    description: String,
    to: String,
    text: String,
  },
};
</script>

<style>
</style>