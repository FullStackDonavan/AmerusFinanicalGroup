<script setup lang="ts">
import Tiptap from "~~/components/elements/Tiptap.vue";
import User from "./User.vue";

const searchInput = ref("");

const {
  data: InsuranceSales,
  pending,
  refresh,
  error,
} = await useFetch<IInsuranceSales[]>(
  () => `/api/dashboard/search?search=${searchInput.value}`,
  { server: false }
);

refresh();

function search() {
  if (searchInput.value.length >= 3) {
    refresh();
  }
}
</script>

<template>
  <BasicSection class="mx-4">
    <table class="w-full table-fixed border-collapse border border-gray-400">
      <thead>
        <tr class="bg-blue-500 text-white">
          <th class="w-1/4 py-2 px-4 text-left">Rank</th>
          <th class="w-1/2 py-2 px-4 text-left">Name</th>
          <th class="w-1/4 py-2 px-4 text-left">Score</th>
        </tr>
      </thead>
      <tbody v-if="!pending">
        <!-- Use v-for on tr -->
        <tr
          class="bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
          v-for="InsuranceSale in InsuranceSales"
          :key="InsuranceSale.id"
        >
          <td class="py-2 px-4">1</td>
          <td class="py-2 px-4">
            {{ InsuranceSale.firstName + " " + InsuranceSale.lastName }}
          </td>
          <td class="py-2 px-4">{{ InsuranceSale.price }}</td>
        </tr>
      </tbody>
    </table>
  </BasicSection>
</template>
  
  <style scoped>
/* Optional custom styles */
.leaderboard {
  max-width: 600px;
  margin: 0 auto;
}

.leaderboard .header {
  background-color: #4c51bf;
  color: #fff;
}

.leaderboard .header th {
  padding: 10px;
  text-align: left;
}

.leaderboard .row:nth-child(even) {
  background-color: #f7f7f7;
}

.leaderboard .row:hover {
  background-color: #e2e8f0;
}

.leaderboard .rank {
  width: 50px;
}

.leaderboard .name {
  width: 200px;
}

.leaderboard .ytd {
  width: 100px;
}
</style>
  