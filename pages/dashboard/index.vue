<script setup lang="ts">
let chartData = ref([]);
const list = [
  { title: "Today" },
  { title: "Week" },
  { title: "Month" },
  { title: "Year" },
];

let currentCategory = ref("today");

function generateRandomValue(number) {
  let values = [];
  for (let j = 0; j < number; j++) {
    values.push(Math.floor(Math.random() * 100));
  }
  chartData.value = values;
  return values;
}

const setCategory = (category) => {
  currentCategory.value = category.toLowerCase();
  if (category === "Today") generateRandomValue(24);
  if (category === "Week") generateRandomValue(7);
  if (category === "Month") generateRandomValue(31);
  if (category === "Year") generateRandomValue(12); // 12 months
};

const cards = [
  {
    title: "Sales",
    progression: 12,
    amount: 1244.43,
    label: "View sales",
    description: "Sales of March 2024",
    icon: "solar:ticket-sale-outline",
    link: "/dashboard/Transactions",
  },
  {
    title: "Refunds",
    progression: 8,
    amount: 84.44,
    label: "View refunds",
    description: "Refunds since beginning of year",
    icon: "heroicons-outline:receipt-refund",
    link: "",
  },
  {
    title: "Payouts",
    progression: 14,
    amount: 899.99,
    label: "View payouts",
    description: "Payouts of this week",
    icon: "tabler:zoom-money",
    link: "",
  },
];

onMounted(() => {
  generateRandomValue(24);
});

const endpoint = "/api/dashboard/reportInsuranceSales";

definePageMeta({
  middleware: "auth",
  layout: "dashboard",
});
</script>

<template>
  <PatternSection>
    <div class="grid w-full gap-4">
      <header class="flex items-start justify-between">
        <div class="grow">
          <WelcomeText>Hi, welcome back!</WelcomeText>
          <HeadlineTwo>Dashboard</HeadlineTwo>
        </div>
        <ProductNew />
      </header>
      <main class="grid w-full gap-4">
        <Tabs
          default-value="Today"
          class="w-full"
          @update:modelValue="setCategory"
        >
          <TabsList class="max-w-[400px]">
            <TabsTrigger
              v-for="(item, index) in list"
              :key="index"
              :value="item.title"
            >
              {{ item.title }}
            </TabsTrigger>
          </TabsList>
          <TabsContent
            class="w-full"
            v-for="(item, index) in list"
            :key="index"
            :value="item.title"
          >
            <Chart
              v-if="chartData.length > 0"
              :currentCategory="currentCategory"
              :data="chartData"
            />
          </TabsContent>
        </Tabs>
      </main>
      <footer>
        <div class="grid gap-4 lg:grid-cols-3">
          <Card v-for="(item, index) in cards" :key="index" :card="item" />
        </div>
      </footer>
    </div>
  </PatternSection>
</template>
