import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetup() {
  const meetupFormHandler = (meetup) => console.log(meetup);

  return <NewMeetupForm onAddMeetup={meetupFormHandler} />;
}

export default NewMeetup;
