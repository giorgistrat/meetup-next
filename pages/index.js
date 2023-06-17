import { MongoClient } from "mongodb";

import Head from "next/head";

import MeetupList from "../components/meetups/MeetupList";

function HomePage({ meetups }) {
  return (
    <>
      <Head>
        <title>All meetups</title>
        <meta name="description" content="All great meetups for your memories" />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://GiorgiBer:Gberiashvili1.@cluster0.r4blyqz.mongodb.net/"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          title: meetup.title,
          image: meetup.image,
          address: meetup.address,
          id: meetup._id.toString(),
        };
      }),
    },
  };
}

export default HomePage;
