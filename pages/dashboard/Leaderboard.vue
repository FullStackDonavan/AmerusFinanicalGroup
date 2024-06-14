<script setup lang="ts">
definePageMeta({
  middleware: "auth",
  layout: "dashboard",
});
</script>
 
 
 <template>
  <PatternSection>
    <div class="md:flex min-h-full">
      <div class="container z-1 justify-right relative">
        <h1
          class="py-9 text-center text-5xl font-extrabold text-gray-900 dark:text-gray-400"
        >
          Leaderboards
        </h1>
        <GridTwoColumns>
          <Leaderboard />
          <HealthLeaderboard />
        </GridTwoColumns>
        <GridTwoColumns>
          <LifeLeaderboard />
          <MedicareLeaderboard />
        </GridTwoColumns>
      </div>
    </div>
  </PatternSection>
</template>