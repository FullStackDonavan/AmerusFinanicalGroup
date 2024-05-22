<script setup lang="ts">
import InsuranceSalesForm from "~/components/elements/InsuranceSalesForm.vue";
import QuestionBoard from "~/components/elements/QuestionBoard.vue";
import DashboardSidebar from "~~/components/elements/DashboardSidebar.vue";
import PipelineHeader from "~~/components/dashboard/PipelineHeader.vue"; // Add this line
import Tiptap from "~~/components/elements/Tiptap.vue";

// definePageMeta({
//   middleware: "auth",
// });
</script>
 
 <template>
  <PatternSection>
    <div class="md:flex min-h-full">
      <DashboardSidebar />
      <div class="container z-1 flex justify-right relative">
        <h1
          class="py-9 text-center text-5xl font-extrabold text-gray-900 dark:text-gray-400 ml-4"
        >
          Dashboard
        </h1>
        <InsuranceSalesForm :data="data" :endpoint="endpoint" />
      </div>
    </div>
  </PatternSection>
</template>