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

<script>
export default {
  setup() {
    const isLoading = ref(false); // Flag to indicate loading state
    const insuranceSales = ref([]); // Store fetched data

    // Fetch data using useFetch
    useFetch(async () => {
      isLoading.value = true; // Set loading flag
      try {
        // Fetch data from the API endpoint
        const response = await fetch("/api/dashboard/insuranceSales");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse response as JSON
        const data = await response.json();
        // Update component data with fetched data
        insuranceSales.value = data;
      } catch (error) {
        // Handle error if fetching data fails
        console.error("Error fetching insurance sales:", error);
      } finally {
        // Reset loading flag regardless of success or failure
        isLoading.value = false;
      }
    });

    return { isLoading, insuranceSales };
  },
};
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
