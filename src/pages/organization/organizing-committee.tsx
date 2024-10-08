import MemberCard from "../../components/MemberCard";
import Banner from "../../assets/singapore-3.jpg";
import PageBanner from "../../components/PageBanner";
import AvaterAkiyoNADAMOTO from "../../assets/avatars/Akiyo NADAMOTO.jpg";
import AvaterBingxueZhang from "../../assets/avatars/Bingxue Zhang.jpg";
import AvaterEePengLim from "../../assets/avatars/Ee-Peng Lim.jpg";
import AvaterFeidaZhu from "../../assets/avatars/Feida Zhu.jpg";
import AvaterKyuseokShim from "../../assets/avatars/Kyuseok Shim.jpg";
import AvaterPhilipSYu from "../../assets/avatars/Philip S. Yu.jpg";
import AvaterSouravBhowmick from "../../assets/avatars/Sourav Bhowmick.jpg";
import AvaterWeiDing from "../../assets/avatars/Wei Ding.jpg";
import AvaterXiaoliLI from "../../assets/avatars/Xiaoli LI.jpg";
import AvaterYiYu from "../../assets/avatars/Yi Yu.jpg";
import AvaterYuchenLI from "../../assets/avatars/Yuchen LI.jpg";
import AvaterYangShi from "../../assets/avatars/Yang Shi.jpg";

const OrganizingCommittee = () => {
  const memberlistClassName =
    "grid grid-cols-3 gap-6 max-sm:grid-cols-2 max-sm:gap-6";

  return (
    <>
      <PageBanner title="Organizing Committee" image={Banner} />
      <article className="prose">
        <h2>General Co-Chairs</h2>
        <div className={memberlistClassName}>
          <MemberCard
            cover={AvaterEePengLim}
            title={
              <>
                <b>Ee-Peng Lim</b>, Singapore Management University, Singapore
              </>
            }
          />
          <MemberCard
            cover={AvaterKyuseokShim}
            title={
              <>
                <b>Kyuseok Shim</b>, Seoul National University, Korea
              </>
            }
          />
          <MemberCard
            cover={AvaterWeiDing}
            title={
              <>
                <b>Wei Ding</b>, UMass, USA
              </>
            }
          />
        </div>

        <h2>Associate General Chairs</h2>
        <div className={memberlistClassName}>
          <MemberCard
            cover={AvaterBingxueZhang}
            title={
              <>
                <b>Bingxue Zhang</b>, University of Shanghai for Science and
                Technology, China
              </>
            }
          />
        </div>

        <h2>Program Committee Co-Chairs</h2>
        <div className={memberlistClassName}>
          <MemberCard
            cover={AvaterPhilipSYu}
            title={
              <>
                <b>Philip S. Yu</b>, University of Illinois at Chicago, USA
              </>
            }
          />
          <MemberCard
            cover={AvaterFeidaZhu}
            title={
              <>
                <b>Feida Zhu</b>, Singapore Management University, Singapore
              </>
            }
          />
          <MemberCard
            cover={AvaterAkiyoNADAMOTO}
            title={
              <>
                <b>Akiyo NADAMOTO</b>, Konan University, Japan
              </>
            }
          />
        </div>

        <h2>Industry Program Co-Chairs</h2>
        <div className={memberlistClassName}>
          <MemberCard
            cover={AvaterXiaoliLI}
            title={
              <>
                <b>Xiaoli LI</b>, A*Star
              </>
            }
          />
        </div>

        <h2>Panel Chairs</h2>

        <h2>Workshop Chairs</h2>
        <div className={memberlistClassName}>
          <MemberCard
            cover={AvaterSouravBhowmick}
            title={
              <>
                <b>Sourav Bhowmick</b>, Nanyang Technological University,
                Singapore
              </>
            }
          />
        </div>

        <h2>Tutorial Chairs</h2>
        <div className={memberlistClassName}>
          <MemberCard
            cover={AvaterYiYu}
            title={
              <>
                <b>Yi Yu</b>, Hiroshima University, Japan
              </>
            }
          />
        </div>

        <h2>Demo Chairs</h2>
        <div className={memberlistClassName}>
          <MemberCard
            cover={AvaterYuchenLI}
            title={
              <>
                <b>Yuchen LI</b>, Singapore Management University, Singapore
              </>
            }
          />
        </div>

        <h2>Ph.D. Consortium Chairs</h2>
        <h2>Publication Chair</h2>
        <h2>Local Arrangement Chair</h2>
        <h2>Local Arrangement Committee</h2>
        <h2>Registration Chair</h2>

        <h2>Web Co-Chairs</h2>
        <div className={memberlistClassName}>
          <MemberCard
            cover={AvaterYangShi}
            title={
              <>
                <b>Yang Shi</b>, University of Shanghai for Science and
                Technology, China
              </>
            }
          />
        </div>
      </article>
    </>
  );
};

export default OrganizingCommittee;
