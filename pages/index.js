import React from "react";
import MeetupList from "../components/meetups/MeetupList";


const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A Fisrt Meetup",
    image:
      "https://images.indianexpress.com/2021/02/UP-annual-budget-Ayodhya.jpg",
    address: "Ram Janmbhoomi, Ayodhya",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://gumlet.assettype.com/outlooktraveller%2F2023-10%2Fcb184637-74f7-44f7-ac0d-364eadb85887%2FAyodhya.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
    address: "Naya Ghat, Ayodhya",
    description: "This is a second meetup!",
  },
  {
    id: "m3",
    title: "A third Meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoDLm0iuh634ylm1q2CDSX52Oj1bqnbaouhg&usqp=CAU",
    address: "Naya Ghat, Ayodhya",
    address: "Saryu Nadi, Ayodhya",
    description: " This is a third meetup!",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context){
//   const req = context.req;
//   const res= context.res;
//   //fetch data from api
//   return {
//     props:DUMMY_MEETUPS
//   };
// };

export async function getStaticProps() {
  // fetch from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10, //It will re-generate page after 10 seconds
  };
}

export default HomePage;
