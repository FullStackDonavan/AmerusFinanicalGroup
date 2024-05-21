<script setup lang="ts">
import { ref, computed } from "vue";
import { useFetch } from "vue-composable";
import User from "./User.vue"; // Assuming this component provides user details

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

// Compute the scores for each user
const scores = computed(() => {
  const userScores: Record<string, number> = {};

  if (InsuranceSales.value) {
    InsuranceSales.value.forEach((sale) => {
      if (!userScores[sale.userId]) {
        userScores[sale.userId] = 0;
      }
      userScores[sale.userId] += sale.price; // Assuming 'price' is the sales value
    });
  }

  return Object.entries(userScores).map(([userId, score]) => ({
    userId,
    score,
  }));
});

// Get user information (e.g., firstName, lastName) for each score entry
const users = ref<User[]>([]); // Assuming you have a way to fetch user data

// Fetch user information for each unique userId in scores
async function fetchUserDetails() {
  const uniqueUserIds = scores.value.map((score) => score.userId);
  // Assuming you have an API endpoint to fetch user details by their IDs
  const { data: userData } = await useFetch<User[]>(
    () => `/api/users?ids=${uniqueUserIds.join(",")}`
  );
  users.value = userData.value || [];
}

fetchUserDetails();
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
        <tr
          v-for="(score, index) in scores"
          :key="score.userId"
          class="bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <td class="py-2 px-4">{{ index + 1 }}</td>
          <td class="py-2 px-4">
            <!-- Assuming you have a method to find user details by userId -->
            {{ getUserFullName(score.userId) }}
          </td>
          <td class="py-2 px-4">{{ score.score }}</td>
        </tr>
      </tbody>
    </table>
  </BasicSection>
</template>

<script setup lang="ts">
function getUserFullName(userId: string): string {
  const user = users.value.find((user) => user.id === userId);
  return user ? `${user.firstName} ${user.lastName}` : "Unknown User";
}
</script>

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
