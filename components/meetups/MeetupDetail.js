import styles from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  const { image, title, address } = props.meetupDetails;

  return (
    <section className={styles.detail}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
    </section>
  );
}

export default MeetupDetail;
