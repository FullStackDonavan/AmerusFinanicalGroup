<template>
  <BasicSection class="mx-4">
    <table class="w-full table-fixed border-collapse border border-gray-400">
      <thead>
        <tr class="bg-blue-500 text-white">
          <th class="w-1/4 py-2 px-4 text-left">Rank</th>
          <th class="w-1/2 py-2 px-4 text-left">Name</th>
          <th class="w-1/4 py-2 px-4 text-left">Price</th>
        </tr>
      </thead>
      <tbody v-if="!pending && InsuranceSales && InsuranceSales.length">
        <tr
          class="bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
          v-for="(sale, index) in InsuranceSales"
          :key="sale.id || index"
        >
          <td class="py-2 px-4">{{ index + 1 }}</td>
          <td class="py-2 px-4">{{ sale.firstName }} {{ sale.lastName }}</td>
          <td class="py-2 px-4">{{ sale.price }}</td>
        </tr>
      </tbody>
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
  data() {
    return {
      InsuranceSales: [],
      pending: false,
    };
  },
  async fetch() {
    this.pending = true;
    try {
      const response = await this.$axios.$get("/api/dashboard/insuranceSales");
      this.InsuranceSales = response.data; // <--- Adjust this line
    } catch (error) {
      console.error("Error fetching insurance sales:", error);
    } finally {
      this.pending = false;
    }
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
