<template>
  <BasicSection class="container mx-auto mt-20">
    <GridTwoColumns>
      <div class="px-4 sm:px-8">
        <NuxtImg
          format="webp"
          src="/images/Senior-Solutions.jpg"
          sizes="sm:217px md:323px lg:376px xl:504px xxl:632px 2xl:700px"
          alt="Happy Kids"
          quality="80"
          loading="lazy"
        />
      </div>
      <div class="px-4 sm:px-8">
        <HeadlineTwo>{{ IntroText.Headline }}</HeadlineTwo>
        <ParagraphDescription>
          {{ IntroText.description }}
        </ParagraphDescription>
      </div>
    </GridTwoColumns>
  </BasicSection>
</template>

<script>
export default {
  name: "Ideal Customers Section",
  props: {
    title: String,
    description: String,
    mediaFirst: Boolean,
    subTitle: String,
  },
  data() {
    return {
      IntroText: {
        SubHeading:
          "Secure Your Future: Amerus Financial Group - Your Independent Insurance Agency for Health, Annuities, Life, and Employee Benefits",
        Headline:
          "Empowering Your Retirement Journey: Personalized Support and Guidance for Seniors",
        description:
          "Embark on your retirement journey with confidence with our dedicated Senior Solutions. At Amerus Financial, we understand the importance of ensuring your golden years are worry-free and fulfilling. From navigating the complexities of Medicare to securing long-term care coverage, our personalized support is tailored to meet your specific needs and goals. Let us be your partner in planning for a secure and prosperous retirement, providing expert guidance and support every step of the way.",
      },
    };
  },
};
</script>