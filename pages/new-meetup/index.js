import React from "react";
import axios from "axios";
import { useRouter } from "next/router";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const router = useRouter();
  const addMeetupHandler = (enteredMeetupData) => {
    axios.post("/api/new-meetup", enteredMeetupData).then((response) => {
      const data = response.data;
      console.log(data);
      router.push('/')
    });
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
