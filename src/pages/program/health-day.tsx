import PageBanner from "../../components/PageBanner/index.tsx";
import { Avatars, Banner4 } from "../../assets/index.ts";
import { BackTop, Table, TableProps } from "antd";
import _data from "../../assets/health-day_data.json";
import LogoSMU from "../../assets/logo-smu.svg";
interface HealthDayItem {
  time: string;
  title: string;
}

const data: HealthDayItem[] = _data as HealthDayItem[];

const columns: TableProps<HealthDayItem>["columns"] = [
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
    width: 200,
    render: (_text, _record) => (
      <div className="whitespace-pre-wrap">{_record.time}</div>
    ),
    onCell: () => ({
      style: {
        background: "#FCE4D6",
      },
    }),
  },
  {
    title: "Content",
    key: "content",
    render: (_text, _record) => (
      <div dangerouslySetInnerHTML={{ __html: _record.title }}></div>
    ),
    onCell: (_, index = 0) => ({
      style: {
        background: [0, 2, 4, 9].includes(index)
          ? "#FCE4D6"
          : index === data.length - 1
            ? "#F8CDAE"
            : "#BDD7EE",
      },
    }),
  },
];
const Figure = ({ src }: { src: string }) => (
  <figure className="float-right ml-8 mb-8">
    <img
      className="rounded-2xl w-[120px] h-[120px] md:w-[180px] md:h-[180px] border"
      src={src}
    />
  </figure>
);

const ProgramHealthDay = () => {
  return (
    <>
      <PageBanner title="Health Day" image={Banner4} />
      <article className="prose w-full">
        <h2>Health Day</h2>
        <h4>Date</h4>
        <p>Thursday 29 May 2025</p>
        {/*<h4>Place</h4>*/}
        {/*<p>Empress 1</p>*/}
        <h4>Program</h4>
        <Table<HealthDayItem>
          className="not-prose ant-table-cell-align-top"
          rowKey="time"
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
        />

        <blockquote>
          <div>
            <b>
              Health Day workshop is supported by Singapore Management
              University.
            </b>
          </div>
          <a
            href="https://www.smu.edu.sg/"
            rel="noreferrer noopener"
            target="_blank"
            className="inline-block"
          >
            <img
              className="m-0 block h-20 max-h-20 min-h-20"
              alt="SMU"
              src={LogoSMU}
            />
          </a>
        </blockquote>

        <h2>Invited Talk I</h2>
        <h3>
          Expediting Next-Generation AI for Health via KG and LLM Co-Learning
        </h3>
        <Figure src={Avatars.AvatarCarlYang} />
        <h4>Speaker</h4>
        <p>Carl Yang (Assistant Professor of Emory University)</p>
        <h4>Abstract</h4>
        <p>
          Large language models (LLM) have brought disruptive progress to
          information technology from accessing data to performing analytical
          tasks. While demonstrating unprecedented capabilities, LLMs have been
          found unreliable in tasks requiring factual knowledge and rigorous
          reasoning, posing critical challenges in domains such as healthcare.
          Knowledge graphs (KG) have been widely used for explicitly organizing
          and indexing biomedical knowledge, but the quality and coverage of KG
          are hard to scale up given the notoriously complex and noisy
          healthcare data with multiple modalities from multiple institutions.
          Existing approaches show promises in combining LLMs and KGs to enhance
          each other, but they do not study the techniques in real healthcare
          contexts and scenarios. In this talk, I will introduce our research
          vision and agenda towards KG-LLM co-learning for healthcare, followed
          by success examples from our recent exploration on LLM-aided KG
          construction, KG-guided LLM enhancement, and federated multi-agent
          systems. I will conclude the talk with discussions on future
          directions that can benefit from further collaborations with
          researchers interested in data mining or biomedical informatics in
          general.
        </p>
        <h4>Biography</h4>
        <p>
          Carl Yang is an Assistant Professor of Computer Science at Emory
          University, jointly appointed at the Department of Biostatistics and
          Bioinformatics in the Rollins School of Public Health and the Center
          for Data Science in the Nell Hodgson Woodruff School of Nursing. He
          received his Ph.D. in Computer Science at University of Illinois,
          Urbana-Champaign in 2020, and B.Eng. in Computer Science and
          Engineering at Zhejiang University in 2014. His research interests
          span graph data mining, applied machine learning, knowledge graphs and
          federated learning, with applications in recommender systems, social
          networks, neuroscience and healthcare. Carl's research results have
          been published in 180+ peer-reviewed papers in top venues across data
          mining and biomedical informatics. He is also a recipient of the
          Dissertation Completion Fellowship of UIUC in 2020, the Best Paper
          Award of ICDM in 2020, the Best Paper Award of KDD Health Day in 2022,
          the Best Paper Award of ML4H in 2022, the Amazon Research Award in
          2022, the Microsoft Accelerating Foundation Models Research Award in
          2023, and multiple Emory and external research awards.
        </p>
        <p>More details coming soon...</p>

        <h2>Invited Talk IV</h2>
        <h3>Happy Ageing with AI</h3>
        <Figure src={Avatars.AvatarKlsiau} />
        <h4>Speaker</h4>
        <p>Keng Leng Siau (Professor of Singapore Management University)</p>
        <h4>Abstract</h4>
        <p>
          Happy Ageing, or Happy and Successful Ageing, emphasizes physical,
          mental, financial, and social well-being throughout the ageing
          process. Happiness is shaped by factors such as individual beliefs,
          cultural norms, and social relationships. This talk will focus on one
          aspect of Happy Ageing, positive social relationships. Maintaining
          strong social relationships is crucial for Happy Ageing. Research has
          shown that positive social relationship is the number one factor for
          happiness. Positive social relationships keep people happier and
          healthier, prevent loneliness and isolation, and improve longevity. AI
          has the potential to enhance and revolutionize the Happy Ageing
          journey. This talk will present ongoing research on employing AI, such
          as GenAI, Agentic AI, and AI-powered humanoid robots, to promote
          positive interpersonal and human-AI relationships in Happy Ageing.
        </p>
        <h4>Biography</h4>
        <p>
          Professor Keng Siau is the Lee Kong Chian Professor of Information
          Systems at the Singapore Management University. He is an AIS Fellow
          and one of the top 2% scientists worldwide according to the Stanford's
          list. Professor Siau received his Ph.D. degree from the University of
          British Columbia. His current research interests are Digital
          Transformation, AI and Machine Learning: Future of Work and Future of
          Humanity, Business Analytics and Data Science, and Human-AI
          Interaction.
        </p>
      </article>
      <BackTop />
    </>
  );
};

export default ProgramHealthDay;
