import { useRouter } from "next/router";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MEETUP_DETAILS_MOCK = {
  image:
    "https://images.unsplash.com/photo-1682687980961-78fa83781450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  title: "A first Meetup",
  address: "Some Address",
  description: "The meetup description",
};

function MeetupDetails() {
  const { query } = useRouter();

  return <MeetupDetail meetupDetails={MEETUP_DETAILS_MOCK} />;
}

export default MeetupDetails;
