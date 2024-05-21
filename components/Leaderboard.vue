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
    <div>
      <div class="flex m-5">
        <label
          for="search-dropdown"
          class="mb-2 text-sm font-medium text-slate-900 sr-only dark:text-gray-300"
          >Search Questions</label
        >
        <div class="relative w-full">
          <input
            v-model="searchInput"
            @input="search"
            type="search"
            id="search-dropdown"
            class="block p-2.5 w-full z-20 text-sm text-slate-900 bg-slate-50 rounded-lg border-solid border-2 border-indigo-600 dark:bg-gray-900 dark:text-gray-300"
            placeholder="Search Questions..."
          />
          <button
            type="submit"
            class="absolute top-0 right-0 p-2.5 text-sm font-medium dark:text-white"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
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
            {{ User.firstName + " " + User.lastName }}
          </td>
          <td class="py-2 px-4">1000</td>
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
  