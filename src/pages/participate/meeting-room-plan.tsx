import PageBanner from "../../components/PageBanner";
import { Banner4 } from "../../assets";
import MeetingRoomPlanImage from "../../assets/meeting-room-plan.jpg";

const MeetingRoomPlan = () => {
  return (
    <>
      <PageBanner title="Meeting Room Plan" image={Banner4} />
      <article className="prose w-full">
        <h2>Carlton Hotel Singapore, Level 2</h2>
        <img src={MeetingRoomPlanImage} className="w-full h-auto" />
      </article>
    </>
  );
};

export default MeetingRoomPlan;
