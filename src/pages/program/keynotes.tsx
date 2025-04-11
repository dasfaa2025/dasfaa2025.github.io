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
        <h3>
          Data and AI Markets: Transforming AI Economies, Technology, and
          Entrepreneurship
        </h3>
        <Figure src={Avatars.AvatarJianPei} />
        <h4>Speaker</h4>
        <p>
          Jian Pei (Arthur S. Pearse Distinguished Professor of Computer
          Science, Duke University)
        </p>
        <h4>Place</h4>
        <p>Empress Hall 4 & 5</p>
        <h4>Date and Time</h4>
        <p>9:30 a.m. – 10:30 a.m. on Tuesday, May 27th, 2025</p>
        <h4>Abstract</h4>
        <p>
          With the rapid advancement and pervasive impact of AI and machine
          learning, the ability to share, discover, and integrate data and AI
          models at scale has become a defining challenge—and opportunity—of the
          AI-driven economy. As AI adoption accelerates, markets for data and AI
          models are emerging as critical infrastructures, transforming how
          knowledge, technology, and economic value are exchanged. These markets
          present complex, interdisciplinary challenges, drawing insights from
          e-commerce, economics, machine learning, and data management. In this
          talk, I will outline the evolving landscape of data and AI markets
          through the lenses of economics, data science, and system
          technologies, with references to the latest industry trends. I will
          analyze the core building blocks of these markets, including the
          nature of traded assets (data vs. models), the structure of platforms,
          and the dynamics of key participants. Furthermore, I will explore
          pressing research questions and interdisciplinary opportunities that
          arise at this frontier, from designing fair and efficient market
          mechanisms to ensuring trust, security, and scalability. Finally, I
          will discuss the entrepreneurial potential in this rapidly growing
          domain, highlighting how innovators can shape the future of AI-driven
          economies.
        </p>
        <h4>Bio</h4>
        <p>
          Dr. Jian Pei is the Arthur S. Pearse Distinguished Professor at Duke
          University, specializing in data science, applied machine learning,
          big data, data mining, and database systems. Renowned for developing
          effective and scalable data analysis techniques, his research has had
          a profound impact on both academia and industry. A Fellow of the Royal
          Society of Canada, the Canadian Academy of Engineering, ACM, and IEEE,
          Dr. Pei is a prolific scholar with over 300 publications and a
          textbook, amassing more than 135,000 citations. His algorithms are
          widely adopted in production systems and open-source software, and he
          has led the development of groundbreaking commercial systems. In
          addition to his academic excellence, he is the Chair of the Computer
          Science Department at Duke University and has served in many
          leadership roles across professional communities. His contributions
          have earned him numerous prestigious honors, including the ACM SIGKDD
          Innovation Award, the ACM SIGKDD Service Award, and multiple best
          paper and test-of-time awards.
        </p>

        <h2>Keynote 2</h2>
        <h3>
          AI, Society, and Computing: Leveraging Global Data While Tackling
          Ethical Challenges
        </h3>
        <Figure src={Avatars.AvatarMeeyoungCha} />
        <h4>Speaker</h4>
        <p>
          Meeyoung Cha (Scientific Director of Max Planck Institute for Security
          and Privacy & Professor at the Korea Advanced Institute of Science and
          Technology)
        </p>
        <h4>Place</h4>
        <p>Empress Hall 4 & 5</p>
        <h4>Date and Time</h4>
        <p>9:30 a.m. – 10:30 a.m. on Wednesday, May 28th, 2025</p>
        <h4>Abstract</h4>
        <p>
          AI agents powered by individuals' data are reshaping everyday
          interactions on social platforms and marketplaces. At a planetary
          scale, the aggregation of multi-modal data enables transformative
          applications such as poverty mapping, socioeconomic predictions, and
          disaster assessments. However, these advancements also bring systemic
          risks, including biases, misinformation, and threats to democratic
          institutions. This talk explores how thoughtful design in database
          systems and AI can mitigate these challenges, foster sustainable
          development, and uphold human-centered values. It further advocates
          for the vigilant oversight of societal-scale AI applications to
          prevent dual-use and other ethical concerns and instead promote the
          benefit for humanity.
        </p>
        <h4>Bio</h4>
        <p>
          Meeyoung (Mia) Cha is a leading AI and data science researcher
          dedicated to applying technology for societal benefit. She is a
          Scientific Director at the Max Planck Institute for Security and
          Privacy (MPI-SP) in Bochum, Germany, and also is a Professor at the
          Korea Advanced Institute of Science and Technology (KAIST) in South
          Korea, and an Adjunct Faculty at Ruhr University Bochum (RUB) in
          Germany.
        </p>
        <p>
          Her research focuses on data science and computational social science,
          particularly in areas such as misinformation, poverty mapping, fraud
          detection, and human-machine interactions. Her work has earned
          widespread recognition, including Best Paper Awards, Test-of-Time
          Awards, the Hong Jin-Ki Creator Award, the Korean Young Information
          Scientist Award, and the ACM Distinguished Member status.
        </p>

        <h2>Keynote 3</h2>
        <h3>Societal AI: Research Challenges and Opportunities</h3>
        <Figure src={Avatars.AvatarXingXie} />
        <h4>Speaker</h4>
        <p>Xing Xie (Partner Research Manager, Microsoft Research Asia)</p>
        <h4>Place</h4>
        <p>Empress Hall 4 & 5</p>
        <h4>Date and Time</h4>
        <p>9:30 a.m. – 10:30 a.m. on Thursday, May 29th, 2025</p>
        <h4>Abstract</h4>
        <p>
          Artificial intelligence is reshaping society at an unprecedented
          scale, influencing key domains such as education, labor, governance,
          and scientific discovery. As AI models, particularly large language
          models, become more capable and autonomous, their societal impact
          raises urgent questions regarding fairness, interpretability,
          alignment with human values, and regulatory governance. In this talk,
          I will introduce Societal AI — a multidisciplinary research agenda
          that examines the intersection of AI and societal well-being. By
          integrating insights from computer science, psychology, law,
          sociology, and philosophy, we identify ten critical research questions
          that address AI’s ethical, technical, and social implications. These
          challenges include ensuring AI safety and reliability, optimizing
          human-AI collaboration, evaluating AI’s cognitive and creative
          potential, and establishing robust regulatory frameworks. Through
          interdisciplinary collaboration, we aim to develop AI systems that are
          not only powerful but also aligned with societal values, fostering a
          future where AI serves as a trusted and beneficial partner to
          humanity.
        </p>
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
