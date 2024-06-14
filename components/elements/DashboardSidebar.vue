<script setup lang="ts">
const router = useRouter();
const route = useRoute();
const isLoggedIn = await useLoggedIn();
const hideDialog = ref(true);

console.log(route.path);

function goToAskForm() {
  if (isLoggedIn) {
    router.push("/dashboard/ask");
  }
  hideDialog.value = false;
}

function rehide() {
  hideDialog.value = true;
}
</script>

<template>
  <div class="fixed h-full flex flex-col justify-between">
    <div class="z-10">
      <div class="w-full" aria-label="Sidebar">
        <LogoIcon />
        <MenuList />
      </div>
    </div>
    <div class="p-4 flex-start">User</div>
  </div>
</template>

<style scoped>
/* Add any additional styles if needed */
</style>
