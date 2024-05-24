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

const carriers = [
  "Ameritas",
  "Allstate",
  "Illinois Mutual",
  "MOO",
  "Washington National",
  "Prosperity",
  "Manhattan Life",
  "Alliance",
  "Aetna",
  "Securian",
  "Athene",
  "Silac",
  "American Eq",
  "Assurity",
  "F & G",
];
const products = {
  Ameritas: ["Product A", "Product B"],
  Allstate: ["Product C", "Product D"],
  "Illinois Mutual ": ["Product E", "Product F"],
  MOO: ["Product G", "Product H"],
  "Washington National": ["Product H", "Product J"],
  Prosperity: ["Product K", "Product L"],
  "Manhattan Life": ["Product M", "Product N"],
  Alliance: ["Product O", "Product P"],
  Aetna: ["Product Q", "Product R"],
  Securian: ["Product S", "Product T"],
  Athene: ["Product U", "Product V"],
  Silac: ["Product W", "Product X"],
  "American Eq": ["Product Y", "Product Z"],
  Assurity: ["Product AA", "Product BB"],
  "F & G": ["Product CC", "Product DD"],
};

const categories = {
  "Product A": "Health",
  "Product B": "Life",
  "Product C": "Life",
  "Product D": "Life",
  "Product E": "Life",
  "Product F": "Health",
  "Product G": "Life",
  "Product H": "Life",
  "Product I": "Life",
  "Product J": "Health",
  "Product K": "Life",
  "Product L": "Life",
  "Product M": "Health",
  "Product N": "Health",
  "Product O": "Life",
  "Product P": "Life",
  "Product Q": "Life",
  "Product R": "Life",
  "Product S": "Health",
  "Product T": "Health",
  "Product U": "Health",
  "Product V": "Life",
  "Product W": "Life",
  "Product X": "Life",
  "Product Y": "Health",
  "Product Z": "Life",
  "Product AA": "Health",
  "Product BB": "Medicare",
  "Product CC": "Medicare",
  // Define more mappings as needed
};

const filteredProducts = computed(() => {
  return products[data.value.carrier] || [];
});

const productCategories = computed(() => {
  const selectedProduct = data.value.product;
  return selectedProduct ? categories[selectedProduct] : "";
});

async function postInsuranceSales() {
  const category = productCategories.value; // Compute the category based on the selected product
  const postData = { ...data.value, category }; // Combine existing data with category

  const { data: question } = await useFetch<IInsuranceSales>(
    () => `${props.endpoint}`,
    { method: "post", body: { data: postData }, pick: ["id"] }
  );

  router.push(`/dashboard/SalesLog`);
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
