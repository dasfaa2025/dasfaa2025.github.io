import MemberCard from "../../components/MemberCard";
import PageBanner from "../../components/PageBanner";
import { Banner3, Avatars } from "../../assets";

const OrganizingCommittee = () => {
  const memberlistClassName =
    "grid grid-cols-3 gap-6 max-sm:grid-cols-2 max-sm:gap-6";

  return (
    <>
      <PageBanner title="Organizing Committee" image={Banner3} />
      <article className="prose">
        <h2>General Co-Chairs</h2>
        <div className={memberlistClassName}>
          <MemberCard
            cover={Avatars.AvaterEePengLim}
            title={
              <>
                <b>Ee-Peng Lim</b>, Singapore Management University, Singapore
              </>
            }
          />
          <MemberCard
            cover={Avatars.AvaterKyuseokShim}
            title={
              <>
                <b>Kyuseok Shim</b>, Seoul National University, Korea
              </>
            }
          />
          <MemberCard
            cover={Avatars.AvaterWeiDing}
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
            cover={Avatars.AvaterBingxueZhang}
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
            cover={Avatars.AvaterPhilipSYu}
            title={
              <>
                <b>Philip S. Yu</b>, University of Illinois at Chicago, USA
              </>
            }
          />
          <MemberCard
            cover={Avatars.AvaterFeidaZhu}
            title={
              <>
                <b>Feida Zhu</b>, Singapore Management University, Singapore
              </>
            }
          />
          <MemberCard
            cover={Avatars.AvaterAkiyoNADAMOTO}
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
            cover={Avatars.AvaterXiaoliLI}
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
            cover={Avatars.AvaterSouravBhowmick}
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
            cover={Avatars.AvaterYiYu}
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
            cover={Avatars.AvaterYuchenLI}
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
            cover={Avatars.AvaterYangShi}
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
