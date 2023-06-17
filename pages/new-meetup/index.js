import Head from 'next/head'

import { useRouter } from "next/router";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetup() {
  const router = useRouter();

  const meetupFormHandler = async (enteredMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    router.replace("/");
  };

  return (
    <>
      <Head>
        <title>Add new Meetup point</title>
        <meta
          name="description"
          content="Add your own meetup!"
        />
      </Head>
      <NewMeetupForm onAddMeetup={meetupFormHandler} />;
    </>
  );
}

export default NewMeetup;
