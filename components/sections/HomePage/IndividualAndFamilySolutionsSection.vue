<template>
  <BasicSection class="container mx-auto mt-20">
    <GridTwoColumns>
      <div class="px-4 sm:px-8">
        <!-- <ParagraphSubHeading>
          {{ IntroText.SubHeading }}
        </ParagraphSubHeading> -->
        <HeadlineTwo>
          {{ IntroText.Heading }}
        </HeadlineTwo>
        <ParagraphDescription>
          {{ IntroText.description }}
        </ParagraphDescription>
      </div>
      <div class="px-4 sm:px-8">
        <NuxtImg
          format="webp"
          src="/images/FamilyAndIndividual.jpg"
          sizes="sm:217px md:323px lg:376px xl:504px xxl:632px 2xl:700px"
          alt="Bus Driver"
          quality="80"
          loading="lazy"
        />
      </div>
    </GridTwoColumns>
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
      IntroText: {
        SubHeading:
          "Empower your business to new heights with our marketing blueprint. Let us make it effortless for your customers to find you!",
        Heading:
          "Securing Your Loved Ones' Future: Tailored Insurance Plans for Individuals and Families",
        description:
          "Safeguard your family's future with our comprehensive Individual And Family Solutions. Our meticulously crafted plans prioritize the security and well-being of your loved ones. From tailored life insurance options to personalized health coverage, we offer assurance and peace of mind. With a focus on your unique needs and circumstances, our solutions provide the protection and support your family deserves. Trust in Amerus Financial to help you navigate life's uncertainties with confidence and security.",
      },
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