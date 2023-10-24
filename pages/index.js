import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A Fisrt Meetup",
    image:
      "https://images.indianexpress.com/2021/02/UP-annual-budget-Ayodhya.jpg",
    address: "Ram Janmbhoomi, Ayodhya",
    description: "This is a second meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://gumlet.assettype.com/outlooktraveller%2F2023-10%2Fcb184637-74f7-44f7-ac0d-364eadb85887%2FAyodhya.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
    address: "Naya Ghat, Ayodhya",
    description: "This is a second meetup!",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
