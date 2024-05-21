<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});

interface Props {
  data: IInsuranceSalesPost;
  endpoint?: string;
}

const props = defineProps<Props>();
const data = ref(props.data);
const router = useRouter();

const carriers = ["Carrier 1", "Carrier 2", "Carrier 3"];
const products = {
  "Carrier 1": ["Product A", "Product B"],
  "Carrier 2": ["Product C", "Product D"],
  "Carrier 3": ["Product E", "Product F"],
};

const filteredProducts = computed(() => {
  return products[data.value.carrier] || [];
});

async function postInsuranceSales() {
  const { data: question } = await useFetch<IInsuranceSales>(
    () => `${props.endpoint}`,
    { method: "post", body: { data: data.value }, pick: ["id"] }
  );

  router.push(`/dashboard/question/${question.value.id}`);
}
</script>


<template>
  <form @submit.prevent="postInsuranceSales" class="p-4">
    <div class="mb-6">
      <label
        for="firstName"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        First Name
      </label>
      <input
        v-model="data.firstName"
        type="text"
        id="firstName"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
        placeholder="First name"
        required
      />
    </div>

    <div class="mb-6">
      <label
        for="lastName"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Last Name
      </label>
      <input
        v-model="data.lastName"
        type="text"
        id="lastName"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
        placeholder="Last name"
        required
      />
    </div>

    <div class="mb-6">
      <label
        for="carrier"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Carrier
      </label>
      <select
        v-model="data.carrier"
        id="carrier"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
        required
      >
        <option disabled value="">Select a carrier</option>
        <option v-for="carrier in carriers" :key="carrier" :value="carrier">
          {{ carrier }}
        </option>
      </select>
    </div>

    <div class="mb-6">
      <label
        for="product"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Product
      </label>
      <select
        v-model="data.product"
        id="product"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
        required
      >
        <option disabled value="">Select a product</option>
        <option
          v-for="product in filteredProducts"
          :key="product"
          :value="product"
        >
          {{ product }}
        </option>
      </select>
    </div>

    <div class="mb-6">
      <label
        for="category"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Category
      </label>
      <input
        v-model="data.category"
        type="text"
        id="category"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
        placeholder="Category"
        required
      />
    </div>

    <div class="mb-6">
      <label
        for="policyYear"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Policy Year
      </label>
      <input
        v-model="data.policyYear"
        type="number"
        id="policyYear"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
        placeholder="Policy Year"
        required
      />
    </div>

    <div class="mb-6">
      <label
        for="price"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Price
      </label>
      <input
        v-model="data.price"
        type="number"
        id="price"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
        placeholder="Price"
        required
      />
    </div>

    <div class="flex justify-center sm:justify-end">
      <button
        @click="postInsuranceSales"
        type="button"
        class="mt-5 dark:focus:ring-amber-800 bg-blue-400 hover:bg-blue-800 dark:bg-amber-500 dark:hover:bg-amber-600 font-medium text-sm rounded-lg px-5 py-2.5 mr-2 mb-2"
      >
        Post Sale
      </button>
    </div>
  </form>
</template>
