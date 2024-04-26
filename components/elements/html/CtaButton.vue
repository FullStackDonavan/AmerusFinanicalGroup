<template>
  <NuxtLink
    :to="to"
    class="text-slate-100 hover:text-slate-300 dark:hover:text-slate-100 dark:text-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-amber-800 bg-blue-400 hover:bg-blue-800 dark:bg-amber-500 dark:hover:bg-amber-600 font-medium text-sm rounded-lg px-5 py-2.5 mb-2"
  >
    <slot />
  </NuxtLink>
</template>

<script>
export default {
  name: "Card",
  props: {
    to: String,
  },
};
</script>

<style>
</style>