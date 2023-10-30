import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";



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

  const client = new MongoClient(
    "mongodb+srv://shivam18557:Shivam@cluster0.njwclar.mongodb.net/meetups?retryWrites=true&w=majority",
  );

  await client.connect();

  const db = client.db("meetups");

  const meetupCollection = db.collection("meetups"); 

  const meetups= await meetupCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map(meetup=>({
        title:meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()

      })) ,
    },
    revalidate: 10, //It will re-generate page after 10 seconds
  };
}

export default HomePage;
