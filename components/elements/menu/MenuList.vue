<template>
  <nav class="hidden md:flex justify-between space-x-10 align-bottom mt-14">
    <div class="hidden md:flex space-x-10 align-bottom">
      <nuxt-link to="/">
        <span
          class="text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300"
        >
          Home
        </span>
      </nuxt-link>

      <nuxt-link to="/about-us">
        <span
          class="text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300"
        >
          About Us
        </span>
      </nuxt-link>

      <nuxt-link to="/insurance-services">
        <span
          class="text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300"
        >
          Insurance Services
        </span>
      </nuxt-link>

      <nuxt-link to="/articles/overview">
        <span
          class="text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300"
        >
          Blog
        </span>
      </nuxt-link>
    </div>
  </nav>
</template>