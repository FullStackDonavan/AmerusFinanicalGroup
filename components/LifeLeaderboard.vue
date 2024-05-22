<template>
  <BasicSection class="mx-4">
    <h2
      class="py-9 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-400"
    >
      Life Leaderboard
    </h2>
    <table class="w-full table-fixed border-collapse border border-gray-400">
      <thead>
        <tr class="bg-blue-500 text-white">
          <th class="w-1/4 py-2 px-4 text-left">Rank</th>
          <th class="w-1/2 py-2 px-4 text-left">Name</th>
          <th class="w-1/4 py-2 px-4 text-left">Total Sales</th>
        </tr>
      </thead>
      <tbody v-if="!isLoading && leaderboardData.length">
        <tr
          class="bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
          v-for="(user, index) in leaderboardData"
          :key="user.sellerId"
        >
          <td class="py-2 px-4">{{ index + 1 }}</td>
          <td class="py-2 px-4">{{ user.sellerName }}</td>
          <td class="py-2 px-4">{{ formatCurrency(user.totalSales) }}</td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="3" class="py-2 px-4 text-center">No data available</td>
        </tr>
      </tbody>
    </table>
  </BasicSection>
</template>


<script setup>
const isLoading = ref(false);
const leaderboardData = ref([]);

// Function to format totalSales as currency
const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

onMounted(async () => {
  isLoading.value = true;
  try {
    const response = await fetch("/api/dashboard/lifeInsuranceSales");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const responseData = await response.json();

    if (!responseData.success) {
      throw new Error(responseData.error || "Failed to fetch leaderboard data");
    }

    const data = responseData.data;
    if (!Array.isArray(data)) {
      throw new Error("Invalid data format received from API");
    }

    leaderboardData.value = data;
  } catch (error) {
    console.error("Error fetching leaderboard data:", error);
  } finally {
    isLoading.value = false;
  }
});
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
