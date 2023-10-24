import React from "react";
import MeetupDetail from "../../components/meetups/meetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://images.indianexpress.com/2021/02/UP-annual-budget-Ayodhya.jpg"
      title="A First Meetup"
      address="Ram Janmbhoomi, Ayodhya"
      description="The Meetup description"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://images.indianexpress.com/2021/02/UP-annual-budget-Ayodhya.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "Ram Janmbhoomi, Ayodhya",
        description: "The Meetup description",
      },
    },
  };
}

export default MeetupDetails;
