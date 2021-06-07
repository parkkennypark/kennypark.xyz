import "../../style sheets/timeline.css";

import BackHeader from "../BackHeader";
import Image from "../Image";

import timeline from "../../assets/database/timeline.json";

const Timeline = () => {
  const events = timeline.map((timelineYear) => {
    return timelineYear.events.map((event, index) => {
      return (
        <div key={index} className="timeline-container">
          <h3 className="text-center">
            {event.date} <span className="text-red">{timelineYear.year}</span>
          </h3>
          <div className="horizontal-layout">
            <Image
              className="timeline-image"
              src={event.img}
              alt={"Img not found"}
            />
            {/* <img className="timeline-image" src={event.img} alt={event.img} /> */}
            <p className="p2 timeline-text text-center">{event.text}</p>
          </div>
        </div>
      );
    });

    /* <p>{data.events[0].text}</p> */
  });

  return (
    <div className="centered-div">
      <div className="timeline-container">
        <BackHeader link="" />
        <h1 className="text-center">TIMELINE</h1>
        <p className="p1 text-center">
          All the important(?) events in my life, to this point and beyond.
        </p>
        <p className="p2 text-center">
          (Definitely not just an excuse to share pictures I like.)
        </p>
      </div>
      {events}
    </div>
  );
};
export default Timeline;
