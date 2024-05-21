<script setup lang="ts">
interface IInsuranceSales {
  id?: number;
  seller: string;
  firstName: string;
  lastName: string;
  sellerId: number;
  carrier: string;
  product: string;
  category: string;
  policyYear: number;
  price: number;
}

const searchInput = ref("");

const {
  data: insuranceSales,
  pending,
  error,
} = await useFetch<IInsuranceSales[]>(
  () => `/api/dashboard/search?search=${searchInput.value}`,
  { server: false }
);

watch(searchInput, () => {
  if (searchInput.value.length >= 3) {
    refresh();
  }
});

// Compute the scores for each seller
const scores = computed(() => {
  const sellerScores: Record<
    string,
    { firstName: string; lastName: string; score: number }
  > = {};

  if (insuranceSales.value) {
    insuranceSales.value.forEach((sale) => {
      const { sellerId, firstName, lastName, price } = sale;
      if (!sellerScores[sellerId]) {
        sellerScores[sellerId] = { firstName, lastName, score: 0 };
      }
      sellerScores[sellerId].score += price; // Summing up the sales prices for each seller
    });
  }

  return Object.entries(sellerScores)
    .map(([sellerId, { firstName, lastName, score }]) => ({
      sellerId,
      firstName,
      lastName,
      score,
    }))
    .sort((a, b) => b.score - a.score); // Sort by score in descending order
});
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
        <tr
          class="bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
          v-for="(score, index) in scores"
          :key="score.sellerId"
        >
          <td class="py-2 px-4">{{ index + 1 }}</td>
          <td class="py-2 px-4">
            {{ score.firstName + " " + score.lastName }}
          </td>
          <td class="py-2 px-4">{{ score.score }}</td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td class="py-2 px-4" colspan="3">Loading...</td>
        </tr>
      </tbody>
    </table>
  </BasicSection>
</template>

<style scoped>
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
