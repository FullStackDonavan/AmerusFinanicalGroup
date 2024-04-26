<script setup lang="ts">
import { useUser } from "~/composables/useAuth";

const nuxtApp = useNuxtApp();

nuxtApp.hook("page:finish", () => {
  window.scrollTo(0, 0);
});

useHead({
  link: [{ rel: "icon", type: "image/x-icon", href: "/img/favicon.ico" }],
});

await useUser();
useSchemaOrg([
  defineLocalBusiness({
    name: "Good Time Travel",
    logo: "/logo.png",
    telephone: "+8647601263",
    address: {
      addressCountry: "US",
      postalCode: "29624",
      address: "445 E Shockley Ferry Rd",
      addressLocality: "Anderson",
      addressRegion: "South Carolina",
      streetAddress: "445 E Shockley Ferry Rd",
    },
    openingHoursSpecification: [
      {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "17:00",
      },
    ],
  }),
]);
</script>
<template>
  <NuxtLayout>
    <div class="dark:bg-indigo-100 dark:text-slate-300">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<style>
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}

.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>