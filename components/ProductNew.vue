<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";

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

const createNewProduct = async () => {
  try {
    loading.value = true;

    // my call
  } catch (error: any) {
    throw new Error(error);
  } finally {
    loading.value = false;
    open.value = false;
  }
};
</script>

<template>
  <AlertDialog :open="open">
    <AlertDialogTrigger>
      <Button @click="open = true">Add New Insurance Policy</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader class="relative">
        <AlertDialogCancel class="absolute top-2 right-2">
          <button
            @click="open = false"
            class="w-6 h-6 text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </AlertDialogCancel>
        <AlertDialogTitle>Add New Insurance Policy</AlertDialogTitle>
        <InsuranceSalesForm :data="data" :endpoint="endpoint" />
      </AlertDialogHeader>
      <AlertDialogFooter></AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>