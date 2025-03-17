import MemberCard from "../../components/MemberCard";
import PageBanner from "../../components/PageBanner";
import { Banner3, Avatars } from "../../assets";

const OrganizingCommittee = () => {
  const memberlistClassName =
    "grid grid-cols-3 gap-6 max-sm:grid-cols-2 max-sm:gap-6";

  return (
    <>
      <PageBanner title="Organizing Committee" image={Banner3} />
      <article className="prose w-full">
        <h2>General Co-Chairs</h2>
        <div className={memberlistClassName}>
          <MemberCard
            cover={Avatars.AvatarEePengLim}
            title={
              <>
                <b>Ee-Peng Lim</b>, Singapore Management University, Singapore
              </>
            }
          />
          <MemberCard
            cover={Avatars.AvatarKyuseokShim}
            title={
              <>
                <b>Kyuseok Shim</b>, Seoul National University, Korea
              </>
            }
          />
          <MemberCard
            cover={Avatars.AvatarWeiDing}
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
            cover={Avatars.AvatarBingxueZhang}
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
            cover={Avatars.AvatarPhilipSYu}
            title={
              <>
                <b>Philip S. Yu</b>, University of Illinois at Chicago, USA
              </>
            }
          />
          <MemberCard
            cover={Avatars.AvatarFeidaZhu}
            title={
              <>
                <b>Feida Zhu</b>, Singapore Management University, Singapore
              </>
            }
          />
          <MemberCard
            cover={Avatars.AvatarAkiyoNADAMOTO}
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
            cover={Avatars.AvatarXiaoliLI}
            title={
              <>
                <b>Xiaoli LI</b>, A*Star
              </>
            }
          />
        </div>

        <h2>Panel Chairs</h2>
        <div className={memberlistClassName}>
          <MemberCard
            cover={Avatars.AvatarProfXinWang}
            title={
              <>
                <b>Prof. Xin Wang</b>, Tianjin University
              </>
            }
          />
          <MemberCard
            cover={Avatars.AvatarProfSangWonLee}
            title={
              <>
                <b>Prof. Sang-Won Lee</b>, Seoul National University
              </>
            }
          />
        </div>

        <h2>Workshop Chairs</h2>
        <div className={memberlistClassName}>
          <MemberCard
            cover={Avatars.AvatarXiaochunYang}
            title={
              <>
                <b>Xiaochun Yang</b>, North Eastern University, China
              </>
            }
          />
        </div>

        <h2>Tutorial Chairs</h2>
        <div className={memberlistClassName}>
          <MemberCard
            cover={Avatars.AvatarYiYu}
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
            cover={Avatars.AvatarYuchenLI}
            title={
              <>
                <b>Yuchen LI</b>, Singapore Management University, Singapore
              </>
            }
          />
          <MemberCard
            cover={Avatars.AvatarZeyiWen}
            title={
              <>
                <b>Zeyi Wen</b>, Hong Kong University of Science and Technology,
                Guangzhou
              </>
            }
          />
        </div>

        <h2>Ph.D. Consortium Chairs</h2>
        <h2>Publication Chair</h2>

        <h2>Publicity Chair</h2>
        <div className={memberlistClassName}>
          <MemberCard
            cover={Avatars.AvatarLinheKong}
            title={
              <>
                <b>Linhe KONG</b>, Shanghai Jiaotong University
              </>
            }
          />
        </div>

        <h2>Local Arrangement Chair</h2>
        <h2>Local Arrangement Committee</h2>
        <h2>Registration Chair</h2>

        <h2>Web Co-Chairs</h2>
        <div className={memberlistClassName}>
          <MemberCard
            cover={Avatars.AvatarYangShi}
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
