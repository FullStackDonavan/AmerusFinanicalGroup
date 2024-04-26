<template>
  <div
    id="ServiceArea"
    class="map-image flex flex-col justify-center items-center relative bg-blue-300 dark:bg-blue-400 text-gray-800"
  >
    <div class="container my-25 mx-auto mt-60">
      <GridTwoColumns>
        <BasicSection class="container mx-auto">
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
        <div>
          <JoinTheAmerusFinancialCommunity
            tag="JoinTheAmerusFinancialCommunity"
          />
        </div>
      </GridTwoColumns>
    </div>
    <div class="spacer h-40"></div>
    <!-- Adjust height as needed -->
  </div>
</template>


<script>
export default {
  name: "Get Answers to Your Questions",
  data() {
    return {
      IntroText: {
        Heading:
          "Join the Amerus Financial Community: Building Trust and Confidence in Your Future",
        description:
          "In alignment with our values of trust and integrity, we collaborate with premier industry carriers to provide you with the best-in-class insurance options. By choosing Amerus Financial, you're not just securing your future; you're joining a community built on reliability and dedication. Schedule a consultation with one of our approachable advisors today, and let's design an insurance plan perfectly tailored to your needs. Together, we'll navigate life's uncertainties with confidence and assurance.",
      },
    };
  },
};
</script>