import MemberCard from "../../components/MemberCard";
import Banner from "../../assets/singapore-3.jpg";
import PageBanner from "../../components/PageBanner";

const OrganizingCommittee = () => {
  return (
    <>
      <PageBanner
        title="Steering Committee Members (May 1, 2023 - April 30, 2025)"
        image={Banner}
      />
      <article className="prose">
        <h1>Organizing Committee</h1>

        <h2>General Co-Chairs</h2>
        <div className="grid grid-cols-3 gap-8">
          <MemberCard
            cover=""
            title={
              <>
                <b>Ee-Peng Lim</b>, Singapore Management University, Singapore
              </>
            }
          />
          <MemberCard
            cover=""
            title={
              <>
                <b>Kyuseok Shim</b>, Seoul National University, Korea
              </>
            }
          />
          <MemberCard
            cover=""
            title={
              <>
                <b>Wei Ding</b>, UMass, USA
              </>
            }
          />
        </div>

        <h2>Associate General Chairs</h2>
        <div className="grid grid-cols-3 gap-8">
          <MemberCard
            cover=""
            title={
              <>
                <b>Bingxue Zhang</b>, University of Shanghai for Science and
                Technology, China
              </>
            }
          />
        </div>

        <h2>Program Committee Co-Chairs</h2>
        <div className="grid grid-cols-3 gap-8">
          <MemberCard
            cover=""
            title={
              <>
                <b>Philip S. Yu</b>, University of Illinois at Chicago, USA
              </>
            }
          />
          <MemberCard
            cover=""
            title={
              <>
                <b>Akiyo NADAMOTO</b>, Konan University, Japan
              </>
            }
          />
        </div>

        <h2>Industry Program Co-Chairs</h2>
        <div className="grid grid-cols-3 gap-8">
          <MemberCard
            cover=""
            title={
              <>
                <b>Xiaoli LI</b>, A*Star
              </>
            }
          />
        </div>

        <h2>Panel Chairs</h2>

        <h2>Workshop Chairs</h2>
        <div className="grid grid-cols-3 gap-8">
          <MemberCard
            cover=""
            title={
              <>
                <b>Sourav Bhowmick</b>, Nanyang Technological University,
                Singapore
              </>
            }
          />
        </div>

        <h2>Tutorial Chairs</h2>
        <div className="grid grid-cols-3 gap-8">
          <MemberCard
            cover=""
            title={
              <>
                <b>Yi Yu</b>, Hiroshima University, Japan
              </>
            }
          />
        </div>

        <h2>Demo Chairs</h2>
        <div className="grid grid-cols-3 gap-8">
          <MemberCard
            cover=""
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
      </article>
    </>
  );
};

export default OrganizingCommittee;
