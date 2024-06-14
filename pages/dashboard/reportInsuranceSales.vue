<script setup lang="ts">
import InsuranceSalesForm from "~/components/elements/InsuranceSalesForm.vue";

// definePageMeta({
//   middleware: "auth",
// });

const data: IInsuranceSalesPost = reactive({
  seller: "",
  firstName: "",
  lastName: "",
  sellerId: 0,
  carrier: "",
  product: "",
  category: "",
  policyYear: 0,
  price: 0,
});

const endpoint = "/api/dashboard/reportInsuranceSales";
</script>
 
 <template>
  <PatternSection>
    <div class="md:flex">
      <div v-if="true" class="w-full">
        <InsuranceSalesForm :data="data" :endpoint="endpoint" />
      </div>
    </div>
    <div class="h-32 flex justify-center">
      <div class="flex m-5">
        <!-- <img
          class="mx-auto h-24 w-auto"
          src="/img/logo_clear_fsj.png"
          alt="full stack jack logo"
        /> -->
        <h1
          class="py-9 text-center text-5xl font-extrabold text-gray-900 dark:text-gray-400 ml-4"
        >
          Report Insurance Sales
        </h1>
      </div>
    </div>
  </PatternSection>
</template>
 