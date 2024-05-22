<template>
  <BasicSection class="mx-4">
    <table class="w-full table-fixed border-collapse border border-gray-400">
      <thead>
        <tr class="bg-blue-500 text-white">
          <th class="w-1/5 py-2 px-4 text-left">Date</th>
          <th class="w-1/5 py-2 px-4 text-left">Client Name</th>
          <th class="w-1/5 py-2 px-4 text-left">Category</th>
          <th class="w-1/5 py-2 px-4 text-left">Price</th>
          <th class="w-1/5 py-2 px-4 text-left">Paid</th>
        </tr>
      </thead>
      <tbody v-if="!isLoading && salesData.length">
        <tr
          class="bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
          v-for="(sale, index) in salesData"
          :key="sale.id"
        >
          <td class="py-2 px-4">
            {{ new Date(sale.date).toLocaleDateString() }}
          </td>
          <td class="py-2 px-4">{{ sale.clientName }}</td>
          <td class="py-2 px-4">{{ sale.category }}</td>
          <td class="py-2 px-4">{{ formatCurrency(sale.price) }}</td>
          <td class="py-2 px-4">
            <input
              type="checkbox"
              :checked="sale.paid"
              @click="togglePaidStatus(sale.id, !sale.paid)"
            />
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="5" class="py-2 px-4 text-center">No data available</td>
        </tr>
      </tbody>
    </table>
  </BasicSection>
</template>

<script setup>
import { ref } from "vue";

const isLoading = ref(false);
const salesData = ref([]);

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

const togglePaidStatus = async (saleId, newStatus) => {
  try {
    const response = await fetch(`/api/dashboard/updatePaidStatus/${saleId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ paid: newStatus }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const updatedSale = await response.json();
    // Update salesData with the updated sale
    const index = salesData.value.findIndex((sale) => sale.id === saleId);
    if (index !== -1) {
      salesData.value[index].paid = updatedSale.paid;
    }
  } catch (error) {
    console.error("Error updating paid status:", error);
  }
};

onMounted(async () => {
  isLoading.value = true;
  try {
    const response = await fetch("/api/dashboard/salesLog");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const responseData = await response.json();

    if (!responseData.success) {
      throw new Error(responseData.error || "Failed to fetch sales data");
    }

    const data = responseData.data;
    if (!Array.isArray(data)) {
      throw new Error("Invalid data format received from API");
    }

    salesData.value = data;
  } catch (error) {
    console.error("Error fetching sales data:", error);
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
