import PageBanner from "../../components/PageBanner";
import { Banner4 } from "../../assets";
import MeetingRoomPlanImage from "../../assets/meeting-room-plan.jpg";

const MeetingRoomPlan = () => {
  return (
    <>
      <PageBanner title="Presenter Instructions" image={Banner4} />
      <article className="prose w-full">
        <img src={MeetingRoomPlanImage} className="w-full h-auto" />
      </article>
    </>
  );
};

export default MeetingRoomPlan;
