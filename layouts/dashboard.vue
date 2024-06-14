<template>
  <div>
    <TheDashboardHeader />
    <div class="flex">
      <!-- Sidebar -->
      <div
        class="hidden md:flex fixed md:relative md:w-[200px] h-100 flex-col justify-between border-r"
      >
        <DashboardSidebar />
      </div>
      <!-- Main Content -->
      <div class="w-full px-4">
        <slot />
        <TheDashboardFooter />
      </div>
    </div>
  </div>
</template>