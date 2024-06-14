<template>
  <div class="pt-3">
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
      src="/img/LogoIcon.png"
      alt="Happy Kids"
      quality="80"
      width="150"
      v-if="$colorMode.value == 'dark'"
    />
    <NuxtImg
      preload
      format="webp"
      src="/img/LogoIcon.png"
      alt="Happy Kids"
      quality="80"
      width="150"
      v-if="$colorMode.value == 'light'"
    />
  </div>
</template>
<script>
export default {
  name: "Clickable Logo",
};
</script>