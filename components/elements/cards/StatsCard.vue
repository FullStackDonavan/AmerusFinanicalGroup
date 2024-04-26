<template>
  <div>
    <div class="container mx-auto">
      <div class="flex items-stretch -mx-4">
        <div class="flex-1 p-4">
          <div
            class="block overflow-hidden rounded-t-lg rounded-b-lg h-full min-h-[250px] shadow-lg rounded-full bg-white flex flex-col justify-center"
          >
            <div class="p-4 bg-blue-400 dark:bg-amber-400 min-h-24">
              <h2
                class="mt-2 mb-2 font-bold text-2xl font-Heading text-center text-white"
              >
                {{ title }}
              </h2>
            </div>
            <!-- <p class="text-md text-justify">{{ description }}</p> -->
            <div class="flex justify-center items-center flex-grow">
              <!-- Added Tailwind CSS classes for larger and centered text -->
              <p class="text-6xl font-bold text-center text-gray-900">
                {{ stat }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndustryCard",
  props: {
    title: String,
    stat: String,
    description: String,
    url: String,
  },
};
</script>

<style>
</style>
