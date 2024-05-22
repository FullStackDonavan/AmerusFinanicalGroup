<script setup lang="ts">
// import QuestionBoard from "~/components/elements/QuestionBoard.vue";
import DashboardSidebar from "~~/components/elements/DashboardSidebar.vue";
import Tiptap from "~~/components/elements/Tiptap.vue";
</script>
 
 <template>
  <PatternSection>
    <div class="md:flex min-h-full">
      <DashboardSidebar />
      <div class="container z-1 justify-right relative">
        <h1
          class="py-9 text-center text-5xl font-extrabold text-gray-900 dark:text-gray-400"
        >
          Sales Log
        </h1>
        <SalesLog />
      </div>
    </div>
  </PatternSection>
</template>