<template>
  <BasicSection class="container mx-auto mt-20 px-4 sm:px-8">
    <!-- <ParagraphSubHeading> {{ IntroText.SubHeading }} </ParagraphSubHeading> -->
    <HeadlineTwo>
      {{ IntroText.Heading }}
    </HeadlineTwo>
    <ParagraphDescription>
      {{ IntroText.description }}
    </ParagraphDescription>
  </BasicSection>
  <CardDeckFourColumns class="px-4 sm:px-8">
    <IndustryCard
      v-for="Service in Services"
      :key="Service.id"
      :title="Service.title"
      :image="Service.image"
    />
  </CardDeckFourColumns>
</template>

<script>
export default {
  name: "Industries We Serve",
  data() {
    return {
      IntroText: {
        SubHeading: "",
        Heading: "Navigate Your Journeys with Precision",
        description:
          "Discover a range of tailored transportation solutions to suit your every need. Whether you're heading to the airport or a cruise port, embarking on a long-distance trip, attending a corporate event, or arranging transportation for college-related activities, our reliable services ensure you reach your destination safely, comfortably, and on time.",
      },
      Services: [
        {
          id: 1,
          title: "Airport And Cruise Ports",
          image: "/img/Airport-Transfers.jpg",
        },
        {
          id: 2,
          title: "Long Distance Trips",
          image: "/img/Long-Distance-Charter-Bus.jpg",
        },
        {
          id: 3,
          title: "Corporate Events",
          image: "/img/Corporate-Event.jpg",
        },
        {
          id: 4,
          title: "College Transportation",
          image: "/img/ClemsonStudents.jpg",
        },
      ],
    };
  },
};
</script>