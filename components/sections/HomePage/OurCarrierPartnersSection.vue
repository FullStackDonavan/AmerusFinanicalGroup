<template>
  <BasicSection class="container mx-auto mt-20">
    <div class="px-4 sm:px-8">
      <HeadlineTwo> Our Carrier Partners </HeadlineTwo>
      <ParagraphDescription>
        We have relationships with the industry’s top carriers to ensure you
        have access to the best products and industry-leading commission rates.
      </ParagraphDescription>
      <div class="container shadow-lg mx-auto max-w-[600px]">
        <Swiper
          :modules="[SwiperAutoplay, SwiperEffectCreative]"
          :slides-per-view="1"
          :loop="true"
          :effect="'creative'"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
          }"
          :creative-effect="{
            prev: {
              shadow: false,
              translate: ['-20%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }"
        >
          <SwiperSlide v-for="slide in Slides" :key="slide">
            <img :src="slide.image" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </BasicSection>
</template>

<script>
export default {
  name: "TwoColumnSection",
  props: {
    title: String,
    description: String,
    mediaFirst: Boolean,
    subTitle: String,
  },
  data() {
    return {
      colorMode: useColorMode(),
      Slides: [
        {
          id: 1,
          image: "/images/americo.jpg",
        },
        {
          id: 2,
          image: "/images/american-amicable.jpg",
        },
        {
          id: 3,
          image: "/images/american-general.jpg",
        },
        {
          id: 4,
          image: "/images/ameritas.jpg",
        },
        {
          id: 5,
          image: "/images/assurity.jpg",
        },
        {
          id: 6,
          image: "/images/foresters.jpg",
        },
        {
          id: 7,
          image: "/images/john-hancock.jpg",
        },
        {
          id: 8,
          image: "/images/mutual-omaha.jpg",
        },
      ],
    };
  },
  computed: {
    // const isDark = this.$colorMode.value === "dark";
    isDark() {
      if (this.colorMode.preference === "dark") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
</style>