<template>
  <div
    id="app"
    class="parallax flex items-center relative bg-gray-100 text-gray-800"
    :style="style"
  >
    <!-- <PaintDripTop fill="60A5FA" /> -->
    <div class="container mx-auto max-w-[600px]">
      <div class="grid grid-cols-1 gap-4 items-center">
        <div class="px-4 md:block">
          <div class="pb-8 mt-auto">
            <div class="text-center">
              <h1
                class="text-5xl drop-shadow font-black font-serif mx-auto text-gray-900"
              >
                <strong>Building Your Agency</strong> Can Be Easier
              </h1>
              <p
                class="mb-8 drop-shadow text-lg font-normal text-gray-900 lg:text-xl"
              >
                At Amerus Ginanical Group, building agencies is what we do best.
                With nearly four decades of experience, Amerus Ginanical Group
                has become one of the country’s largest and most influential
                insurance marketing organizations (IMOs). Known across the
                industry as The Original Agency Builder™, we work relentlessly
                to maximize the full potential of our agency partners and their
                financial professionals through our innovative sales tools,
                industry-leading training programs, proven marketing programs,
                integrated technology, and back-office support.
              </p>
              <!-- <ContactForm />-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <PaintDripBottom fill="fff" v-if="$colorMode.value == 'light'" />
    <PaintDripBottom fill="1E1B4B" v-if="$colorMode.value == 'dark'" /> -->
  </div>
</template>

<script>
export default {
  name: "HeroSection",
  props: {
    title: String,
    description: String,
    url: String,
    image: String,
  },
  computed: {
    style() {
      return "background-image: url(" + this.image + ")";
    },
  },
};
</script>

<style scoped>
.hero-image {
  /* background-image: url("~/assets/images/exterior-painted-house.jpg"); */
  background-position: center;
  background-size: cover;
  height: 700px;
  display: flex;
  align-items: center;
}

.parallax {
  /* The image used */
  /* background-image: url("~/assets/images/exterior-painted-house.jpg"); */

  /* Set a specific height */
  min-height: 700px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

input:focus,
textarea:focus {
  color: #ffffff !important;
}
</style>