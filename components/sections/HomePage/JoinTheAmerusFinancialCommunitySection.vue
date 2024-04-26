<template>
  <BasicSection class="container mx-auto mt-20">
    <div class="px-4 pb-8 sm:px-8">
      <!-- <ParagraphSubHeading>
        {{ IntroText.SubHeading }}
      </ParagraphSubHeading> -->
      <HeadlineTwo>{{ IntroText.Heading }}</HeadlineTwo>
      <ParagraphDescription>
        {{ IntroText.description }}
      </ParagraphDescription>
    </div>
  </BasicSection>
</template>

<script>
export default {
  name: "Industries We Serve",
  data() {
    return {
      IntroText: {
        SubHeading:
          "Relying Solely On Referrals And Word Of Mouth Is No Longer Enough For Businesses. Smart Business Owners Now Integrate Digital Marketing Into Their Marketing Plan",
        Heading:
          "Join the Amerus Financial Community: Building Trust and Confidence in Your Future",
        description:
          "In alignment with our values of trust and integrity, we collaborate with premier industry carriers to provide you with the best-in-class insurance options. By choosing Amerus Financial, you're not just securing your future; you're joining a community built on reliability and dedication. Schedule a consultation with one of our approachable advisors today, and let's design an insurance plan perfectly tailored to your needs. Together, we'll navigate life's uncertainties with confidence and assurance.",
      },
    };
  },
};
</script>