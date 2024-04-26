<template>
  <BasicSection class="container mx-auto mt-20">
    <div class="px-4 sm:px-8">
      <HeadlineTwo>Changing the Industry One Agency at a Time</HeadlineTwo>
      <ParagraphDescription>
        Our Mission: To empower our agency partners and their financial
        professionals with industry-leading resources, exclusive tools, and
        decades of expertise so they can help more Americans effectively prepare
        for retirement.
      </ParagraphDescription>
    </div>
    <CardDeckFourColumns class="px-4 sm:px-8">
      <StatsCard
        v-for="Service in Services"
        :key="Service.id"
        :title="Service.title"
        :stat="Service.stat"
      />
    </CardDeckFourColumns>
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
      Services: [
        {
          id: 1,
          title: "Agency Partnerships",
          stat: "100+",
        },
        {
          id: 2,
          title: "Financial Professionals",
          stat: "19,000",
        },
        {
          id: 3,
          title: "Carrier Relationships",
          stat: "50+",
        },
        {
          id: 4,
          title: "Premium",
          stat: "$60 Billion",
        },
      ],
    };
  },
};
</script>