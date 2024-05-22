<template>
  <BasicSection class="mx-4">
    <table class="w-full table-fixed border-collapse border border-gray-400">
      <!-- Table header -->
      <thead>
        <tr class="bg-blue-500 text-white">
          <th class="w-1/4 py-2 px-4 text-left">Rank</th>
          <th class="w-1/2 py-2 px-4 text-left">Name</th>
          <th class="w-1/4 py-2 px-4 text-left">Price</th>
        </tr>
      </thead>
      <!-- Table body -->
      <tbody v-if="!isLoading && insuranceSales && insuranceSales.length">
        <!-- Loop through insurance sales data -->
        <tr
          class="bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
          v-for="(sale, index) in insuranceSales"
          :key="sale.id || index"
        >
          <!-- Display sale information -->
          <td class="py-2 px-4">{{ index + 1 }}</td>
          <td class="py-2 px-4">{{ sale.firstName }} {{ sale.lastName }}</td>
          <td class="py-2 px-4">{{ sale.price }}</td>
        </tr>
      </tbody>
      <!-- Show message if no data available -->
      <tbody v-else>
        <tr>
          <td colspan="3" class="py-2 px-4 text-center">
            No insurance sales data available
          </td>
        </tr>
      </tbody>
    </table>
  </BasicSection>
</template>

<script setup>
import { getUserById } from "~/server/database/repositories/userRespository";

// Define reactive variables
const isLoading = ref(false);
const insuranceSales = ref([]);

// Fetch data using useFetch hook
useFetch(async () => {
  isLoading.value = true;
  try {
    // Fetch insurance sales data
    const response = await fetch("/api/dashboard/insuranceSales");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    // Group sales by sellerId
    const salesBySeller = {};
    for (const sale of data) {
      const sellerId = sale.sellerId;
      if (!salesBySeller[sellerId]) {
        salesBySeller[sellerId] = [];
      }
      salesBySeller[sellerId].push(sale);
    }

    // Fetch and merge seller details with sales data
    const sellerIds = Object.keys(salesBySeller);
    for (const sellerId of sellerIds) {
      // Fetch seller details from user repository
      const sellerDetails = await getUserById(parseInt(sellerId));

      // Merge seller name with each sale
      const salesWithSellerName = salesBySeller[sellerId].map((sale) => ({
        ...sale,
        sellerName: `${sellerDetails.firstName} ${sellerDetails.lastName}`,
      }));

      // Push sales with seller name to insuranceSales array
      insuranceSales.value.push(...salesWithSellerName);
    }
  } catch (error) {
    console.error("Error fetching insurance sales:", error);
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
