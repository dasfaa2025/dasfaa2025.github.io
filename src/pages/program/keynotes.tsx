import { Banner4 } from "../../assets";
import PageBanner from "../../components/PageBanner";
import { Avatars } from "../../assets";

const Figure = ({ src }: { src: string }) => (
  <figure className="float-right ml-8 mb-8">
    <img
      className="rounded-2xl w-[120px] h-[120px] md:w-[180px] md:h-[180px] border"
      src={src}
    />
  </figure>
);

const ProgramKeynotes = () => {
  return (
    <>
      <PageBanner title="Keynotes" image={Banner4} />
      <article className="prose w-full">
        <h2>Keynote 1</h2>
        <h3></h3>
        <Figure src={Avatars.AvatarJianPei} />
        <h4>Speaker</h4>
        <p>
          Jian Pei (Arthur S. Pearse Distinguished Professor of Computer
          Science, Duke University)
        </p>
        <h4>Place</h4>
        <p></p>
        <h4>Date and Time</h4>
        <p></p>
        <h4>Abstract</h4>
        <p></p>
        <h4>Bio</h4>
        <p>
          <b>Professor and Chair, Duke University</b> Department of Computer
          Science, Trinity College of Arts & Sciences; Professor, Duke
          University Department of Biostatistics and Bioinformatics, School of
          Medicine; Professor of Electrical and Computer Engineering, Pratt
          School of Engineering.
        </p>
        <p>
          <b>Fellow,</b> The Royal Society of Canada (FRSC), The Canadian
          Academy of Engineering (CAE), ACM, and IEEE.
        </p>
        <p>
          <b>Research Areas:</b> data science, big data, data mining, database
          systems, and enterprise data strategies.
        </p>

        <h2>Keynote 2</h2>
        <h3></h3>
        <Figure src={Avatars.AvatarMeeyoungCha} />
        <h4>Speaker</h4>
        <p>
          Meeyoung Cha (Scientific Director of Max Planck Institute for Security
          and Privacy & Professor at the Korea Advanced Institute of Science and
          Technology)
        </p>
        <h4>Place</h4>
        <p></p>
        <h4>Date and Time</h4>
        <p></p>
        <h4>Abstract</h4>
        <p></p>
        <h4>Bio</h4>
        <p>
          Meeyoung Cha is a Scientific Director of MPI-SP in Bochum, Germany,
          and holds a joint position as a Professor at the Korea Advanced
          Institute of Science and Technology (KAIST). Her interests include
          data science and computational social science, with a focus on
          understanding social information and human-machine interactions.
          Meeyoung’s research on misinformation, poverty mapping, fraud
          detection, and long-tail content has received wide citations and best
          paper awards. She is the recipient of the Hong Jin-Ki Creator Award
          (2024), the Korean Young Information Scientist Award (2019), and two
          Test-of-Time Awards (ACM IMC 2022, AAAI ICWSM 2020). Prior to joining
          MPI, Meeyoung was a Chief Investigator at the Institute for Basic
          Science in Korea and a Visiting Professor at Facebook. She received
          her Ph.D. in Computer Science from KAIST in 2008.
        </p>

        <h2>Keynote 3</h2>
        <h3></h3>
        <Figure src={Avatars.AvatarXingXie} />
        <h4>Speaker</h4>
        <p>Xing Xie (Partner Research Manager, Microsoft Research Asia)</p>
        <h4>Place</h4>
        <p></p>
        <h4>Date and Time</h4>
        <p></p>
        <h4>Abstract</h4>
        <p></p>
        <h4>Bio</h4>
        <p>
          Dr. Xing Xie is a partner research manager at Microsoft Research Asia.
          He received his B.S. and Ph.D. in Computer Science from the University
          of Science and Technology of China in 1996 and 2001, respectively.
          Since joining Microsoft Research Asia in July 2001, Dr. Xie has
          focused on data mining, social computing, and responsible AI. His work
          has been recognized with several prestigious awards, including the
          IEEE MDM 2023 Test-of-Time Award, ACM SIGKDD 2022 Test-of-Time Award,
          ACM SIGKDD China 2021 Test-of-Time Award, ACM SIGSPATIAL 2020 10-Year
          Impact Award Honorable Mention, and ACM SIGSPATIAL 2019 10-Year Impact
          Award. He has delivered keynote speeches at notable conferences such
          as MDM 2019, ASONAM 2017, and W2GIS 2011. Dr. Xie serves on the
          editorial boards of ACM Transactions on Social Computing, ACM
          Transactions on Intelligent Systems and Technology, and CCF
          Transactions on Pervasive Computing and Interaction. He served as
          program co-chair of ACM Ubicomp 2011, PCC 2012, UIC 2015, SMP 2017,
          ACM SIGSPATIAL 2021, ACM SIGSPATIAL 2022, IEEE MDM 2022, and PAKDD
          2024. Dr. Xie is a Fellow of the ACM, IEEE, and China Computer
          Federation.
        </p>
      </article>
    </>
  );
};

export default ProgramKeynotes;
