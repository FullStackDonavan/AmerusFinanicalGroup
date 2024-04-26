<template>
  <div class="py-3">
    <nuxt-link to="/">
      <span class="sr-only">Home</span>
      <!-- <img
        src="@/assets/images/logo_white.png"
        class="h-16 md:h-24 w-auto scale-110"
        v-if="$colorMode.value == 'dark'"
      />
      <img
        src="@/assets/images/logo.png"
        class="h-16 md:h-24 w-auto scale-110"
        v-if="$colorMode.value == 'light'"
      /> -->

      <NuxtImg
        preload
        format="webp"
        src="/img/logo_white.png"
        alt="Happy Kids"
        quality="80"
        width="310"
        v-if="$colorMode.value == 'dark'"
      />
      <NuxtImg
        preload
        format="webp"
        src="/img/logo.png"
        alt="Happy Kids"
        quality="80"
        width="310"
        v-if="$colorMode.value == 'light'"
      />
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: "Clickable Logo",
};
</script>