<script setup lang="ts">
const initalCheck = await useLoggedIn();
const isLoggedIn = ref(initalCheck);
const user = useState("user");
const items = ref([
  {
    title: "Overview",
    path: "/dashboard",
    icon: "material-symbols:space-dashboard-rounded",
  },
  {
    title: "Transactions",
    path: "/dashboard/Transactions",
    icon: "fluent:arrow-swap-16-regular",
  },
  {
    title: "Leaderboard",
    path: "/dashboard/Leaderboard",
    icon: "icon-park-outline:table-report",
  },
  {
    title: "Questions",
    path: "/dashboard/ask",
    icon: "ic:sharp-live-help",
  },
  {
    title: "Search",
    path: "/dashboard/search",
    icon: "ic:outline-find-in-page",
  },
]);

async function checkIfLoggedIn() {
  const check = await useLoggedIn();
  isLoggedIn.value = check;
}

watch(
  user,
  async () => {
    await checkIfLoggedIn();
  },
  { deep: true }
);
</script>
<template>
  <div class="overflow-y-auto">
    <ul class="space-y-2">
      <li v-for="(item, index) in items" :key="index">
        <NuxtLink
          :to="item.path"
          class="flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <Icon
            :name="item.icon"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            size="45"
          />
          <span class="">{{ item.title }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>