import { Banner4 } from "../../assets";
import PageBanner from "../../components/PageBanner";
import { HashLink } from "react-router-hash-link";
import { FloatButton } from "antd";
import { useEffect } from "react";
import { scrollWithOffset } from "./index.ts";

const tutorials = [
  "Social Media Data Analytics for Disaster Management",
  "How Database Technologies Benefit Transportation Infrastructure Monitoring? Approaches and Open Problems",
  "Information and Knowledge Discovery on Cryptocurrency: A Security Perspective",
  "Logic-based Natural Language Generation",
  "Data Preparation for Large Language Models",
  "Neural Network Reprogrammability: A Unified Theme for Parameter-Efficient Model Adaptation",
  "AI for Database Optimization: Cardinality Estimation, Learned Query Execution, and Indexing",
];

const ProgramTutorials = () => {
  useEffect(() => {
    setTimeout(() => {
      const { hash } = window.location;
      if (hash) {
        const hashes = hash.split("#");
        const id = hashes[hashes.length - 1];
        if (!id.startsWith("tutorial")) return;

        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ block: "start", behavior: "instant" });
            window.scrollBy(0, -96);
          }, 0);
        }
      }
    }, 0);
  }, []);

  return (
    <>
      <PageBanner title="Tutorials" image={Banner4} />
      <article className="prose w-full">
        <h2>Selected Tutorials</h2>
        <ul>
          {tutorials.map((e, index) => (
            <li key={`tutorial-${index + 1}`}>
              <div className="flex gap-1">
                <b className="select-none whitespace-nowrap">
                  Tutorial {index + 1}.
                </b>
                <HashLink
                  smooth={true}
                  className="text-[#936bff]"
                  to={`#tutorial-${index + 1}`}
                  scroll={(el) => scrollWithOffset(el)}
                >
                  {e}
                </HashLink>
              </div>
            </li>
          ))}
        </ul>

        <h2 id="tutorial-1">Tutorial 1</h2>
        <h3>Social Media Data Analytics for Disaster Management</h3>
        <h4>Speaker</h4>
        <p>Sanjay K. Madria (Missouri University of Science and Technology)</p>
        <h4>Brief Outline of the Tutorial</h4>
        <p>
          A disaster can refer to an effect and result of natural hazards like
          the hurricane, flood, earthquake, tornado, heatwave, etc. Every
          activity of a disaster management such as taking precautions, managing
          evacuation, running rescue missions demands accurate and up-to-date
          information to allow a quick, easy and cost-effective process and
          hence reduce the loss of lives and properties. Social media has
          emerged as a valuable supplementary tool in this context, providing
          real-time data that can assist authorities in developing prompt and
          effective response strategies. However, despite its potential,
          utilizing social media data for disaster management presents several
          challenges. It needs a multi-faceted approach that leverages deep
          learning and natural language processing (NLP) techniques tackling the
          complexities of contextual information and the relevance of social
          media content. The tutorial will offer actionable insights that
          significantly enhance situational awareness information,
          decision-making, and resource allocation during disasters.
        </p>
        <h4>Bio</h4>
        <p>
          <b>Sanjay K Madria</b> is a Curators’ Distinguished Professor in the
          Department of Computer Science at the Missouri University of Science
          and Technology (formerly, University of Missouri-Rolla, USA). He has
          published over 300 Journal and conference papers in the areas of
          mobile and sensor computing, big data and cloud computing, data
          analytics and cybersecurity. He won five IEEE best papers awards in
          conferences such as IEEE MDM and IEEE SRDS. He is a co-author of a
          book (published with his two PhD graduates) on Secure Sensor Cloud
          published by Morgan and Claypool in Dec. 2018. He has graduated 20
          PhDs and 34 MS thesis students, with 12 current PhDs. NSF, NIST, ARL,
          ARO, AFRL, DOE, Boeing, CDC-NIOSH, ORNL, Honeywell, and others have
          funded his research projects of over $25M. He has been awarded JSPS
          (Japanese Society for Promotion of Science) invitational visiting
          scientist fellowship, and ASEE (American Society of Engineering
          Education) fellowship. In 2012 and in 2019, he was awarded NRC
          Fellowship by National Academies, US. He is ACM Distinguished
          Scientist and served as an ACM and IEEE Distinguished Speaker He is an
          IEEE Senior Member and IEEE Golden Core Awardee.
        </p>

        <h2 id="tutorial-2">Tutorial 2</h2>
        <h3>
          How Database Technologies Benefit Transportation Infrastructure
          Monitoring? Approaches and Open Problems
        </h3>
        <h4>Speakers</h4>
        <ul>
          <li>Zhixin Qi (Harbin Institute of Technology)</li>
          <li>Zemin Chao (Harbin Institute of Technology)</li>
          <li>Hongzhi Wang (Harbin Institute of Technology)</li>
        </ul>
        <h4>Brief Outline of the Tutorial</h4>
        <p>
          With the advancement of transportation infrastructure intelligence, it
          is a crucial task to monitor the long-term performance of
          infrastructure service for structural health evaluation and
          maintenance making. The sensors that are used to collect
          transportation infrastructure monitoring data are built within the
          structure and generate data continuously. To obtain the transient
          information of structure under the high-speed vehicle loads, the
          collection frequency of monitoring data is required to 1000Hz. Such
          high frequency makes the data size reach 2 to 3TB per month, which
          brings a heavy burden on data management and analysis. Since
          monitoring data is a kind of time series data, database technologies
          are naturally required to be applied on processing transportation
          infrastructure monitoring data. However, database techniques for
          traditional time series data management and analysis are quite
          different from those for transportation infrastructure monitoring
          data, which are the major topics of this tutorial. Transportation
          infrastructure monitoring data are more complex than traditional time
          series data and there are a lot of open problems and challenges.
          Motivated by this, some studies start to focus on database
          technologies for transportation infrastructure monitoring data,
          including data compression, storage design, and feature extraction.
          Even though some pretty techniques and tools have been proposed, many
          open problem and challenges are left unsolved.
        </p>
        <p>
          Thus, this tutorial aims to highlight the significance of database
          technologies for transportation infrastructure monitoring data and
          pays attention on the existing methods, research opportunities, and
          challenges. It consists of three main parts: transportation
          infrastructure monitoring data compression, storage design for
          transportation infrastructure monitoring data, and feature extraction
          for transportation infrastructure monitoring data.
        </p>
        <h4>Bio</h4>
        <p>
          <b>Zhixin Qi</b> is currently an associate researcher of Harbin
          Institute of Technology, corresponding member of CCF database
          specialized committee. She received her Ph.D. degree from Harbin
          Institute of Technology in 2022. She was awarded ACM Harbin honored
          doctoral dissertation. Her research interests include monitoring data
          management, data compression, and physical design tuning. She has
          published more than 20 papers in international journals and
          conferences, including TKDE, KAIS, KBS, Neurocomputing, JCST, CIKM,
          and DASFAA.
        </p>
        <p>
          <b>Zemin Chao</b> is currently an associate researcher of Harbin
          Institute of Technology, executive member of CCF database specialized
          committee. He received his Ph.D. degree from Harbin Institute of
          Technology in 2023. He was awarded the first prize of computer
          application innovation technology. His research interests include time
          series data, big data management, and data mining. He has published
          many papers in international journals and conferences, including VLDB,
          FGCS, and WWWJ.
        </p>
        <p>
          <b>Hongzhi Wang</b> is a professor and PhD supervisor of Harbin
          Institute of Technology, the secretary general of ACM SIGMOD China,
          CCF outstanding member. Research fields include big data management
          and analysis, database, knowledge engineering, and data quality. He
          was “starring track” visiting professor at MSRA and postdoctoral
          fellow at University of California, Irvine. Prof. Wang has been PI for
          more than 10 national or international projects including NSFC key
          project, NSFC projects and National technical support project, and
          co-PI for more than 10 national projects include 973 project, 863
          project and NSFC key projects. He also serves as a member of ACM Data
          Science Task Force. He won first natural science prize of Heilongjiang
          Province, Microsoft Fellowship, IBM PhD Fellowship and Chinese
          excellent database engineer. His publications include over 300 papers
          including VLDB, SIGMOD, SIGIR papers, 6 books and 3 book chapters. His
          PhD thesis was selected to be outstanding PhD dissertation of CCF and
          Harbin Institute of Technology.
        </p>

        <h2 id="tutorial-3">Tutorial 3</h2>
        <h3>
          Information and Knowledge Discovery on Cryptocurrency: A Security
          Perspective
        </h3>
        <h4>Speakers</h4>
        <ul>
          <li>Ling Cheng (Singapore Management University)</li>
          <li>Feida Zhu (Singapore Management University)</li>
        </ul>
        <h4>Brief Outline of the Tutorial</h4>
        <p>
          Cryptocurrencies are a fundamental part of Web3, bringing native
          digital payments and serving as tokens programmed to play various
          roles in digital economic systems. However, the industry is chaotic
          and has been criticized for facilitating cybercrime due to its
          anonymity. Detecting and preventing fraudulent behaviors and malicious
          addresses has become a major field research area. This tutorial
          introduces mainstream cryptocurrency data processing and
          network-building tools to extract the most effective feature
          representation in this environment. Using these features, we built a
          real-time monitoring system to detect and prevent abnormalities. Given
          cryptocurrency’s unfamiliarity, this survey and hands-on exercise are
          crucial for data scientists and the general public to explore its
          potential while using it safely. Despite the challenges, a wealth of
          transparent information on the cryptocurrency network can provide many
          exciting topics. By outlining these investigations, we hope attendees
          gain a better understanding of cryptocurrency and feel more confident
          using it safely and responsibly.
        </p>
        <h4>Bio</h4>
        <p>
          <b>Ling Cheng</b> is currently a Ph.D. student at Singapore Management
          University. He has worked extensively on designing realtime fraud
          detection system in various cryptocurrency platforms with different
          graininess. His research interests are designing multi-grained malice
          detection models for cryptocurrency environments.
        </p>
        <p>
          <b>Feida Zhu</b> is currently a tenured associate professor at
          Singapore Management University. His research interests include
          large-scale data mining and machine learning, blockchain and data
          asset, text mining, graph/network mining and social network analysis,
          with emphasis on their application to business, financial and consumer
          innovation. Prof. ZHU has over 100 peer-reviewed research publications
          at top international venues, including ICDE, VLDB, SIGMOD, KDD, WWW,
          JMLR, TODS, TKDE, etc. His work on large-scale frequent pattern mining
          has won the Best Student Paper Awards at ICDE’07 and PAKDD’07. He also
          received the Best Paper Award at DASFAA’16 and the Best Demo Paper
          Award on WAIM’16. He won the Early Career Award of PAKDD’19 and is the
          General Co-Chair of ICDM’18 and KDD’21. Prof. ZHU obtained his Ph.D.
          in Computer Science from the University of Illinois at
          Urbana-Champaign (UIUC) in 2009.
        </p>

        <h2 id="tutorial-4">Tutorial 4</h2>
        <h3>Logic-based Natural Language Generation</h3>
        <h4>Speakers</h4>
        <ul>
          <li>Yi Cai (South China University of Technology)</li>
          <li>Xin Wu (South China University of Technology)</li>
        </ul>
        <h4>Brief Outline of the Tutorial</h4>
        <p>
          Natural Language Processing (NLP) is a key branch of artificial
          intelligence that enables computers to understand, generate, and
          process human language. It powers applications like machine
          translation, sentiment analysis, and intelligent customer service,
          driving AI's integration into society. Within NLP, Natural Language
          Generation (NLG) focuses on creating coherent and contextually
          appropriate text, enhancing human-computer interaction and enabling
          data visualization, automated reporting, and intelligent content
          creation. Data-driven approaches, such as Pre-trained Language Models
          (PLMs) and Large Language Models (LLMs), have revolutionized NLG by
          learning from massive text datasets and achieving breakthroughs in
          fluency and diversity through models like GPT and BERT. However,
          current NLG systems often lack deep logical reasoning, which is
          essential for high-stakes applications. Future advancements should
          focus on improving models' ability to understand and apply human
          logic, enhance interpretability, and integrate logical reasoning tools
          to ensure precision and coherence in generated content.
        </p>
        <p>
          To address the above issues, this tutorial will introduce a series of
          logical, highly credible, controllable, and generalizable natural
          language generation methods. On one hand, this tutorial will provide
          innovative ideas and technical breakthroughs for the field of natural
          language generation, offering important references and technical
          support for relevant researchers. On the other hand, the tutorial has
          broad application prospects, as it can provide theoretical foundations
          and technical support for specific applications such as intelligent
          question answering, automated reasoning, and legal document analysis.
          Therefore, it is a topic of significant academic value and practical
          significance.
        </p>
        <h4>Bio</h4>
        <p>
          <b>Yi Cai</b> is currently a professor in South China University of
          Technology (SCUT). He received the PhD degree in computer science from
          the Chinese University of Hong Kong. His research interests include
          recommendation system, personalized search, semantic web and data
          mining. His research works are published on many conferences and
          journals, such as IEEE Transactions on Knowledge and Data Engineering
          (TKDE), Neural Networks, Knowledge-based Systems, EAAI and
          Neurocomputing, as well as AAAI, COLING, CIKM, AAMAS, DASFAA and other
          international conferences about perspective mining, cognitive
          modeling, information retrieval and semantic analysis.
        </p>
        <p>
          <b>Xin Wu</b> received the B.S. degree from the School of Software
          Engineering, South China University of Technology, Guangdong, China,
          where he is currently working toward the Ph.D. degree. His research
          interests include logical reasoning, text generation, large language
          model editing. His research works are published on many conferences
          and journals, such as IEEE/ACM transactions on audio, speech, and
          language processing, EMNLP, COLING, AAAI.
        </p>

        <h2 id="tutorial-5">Tutorial 5</h2>
        <h3>Data Preparation for Large Language Models</h3>
        <h4>Speakers</h4>
        <ul>
          <li>Wentao Zhang (Peking University)</li>
          <li>Conghui He (Shanghai Artificial Intelligence Laboratory)</li>
          <li>Bin Cui (Peking University)</li>
        </ul>
        <h4>Brief Outline of the Tutorial</h4>
        <p>
          High-quality data is the cornerstone of the performance and
          generalization capabilities of large language models (LLMs) and
          multimodal LLMs, serving as the foundation for their training and
          optimization. This tutorial offers a comprehensive exploration of the
          data lifecycle, from acquisition to utilization, providing essential
          insights for enhancing these models. We will begin with data
          acquisition, discussing key techniques such as data annotation,
          parsing, and synthesis. Following this, we will delve into data
          selection methods, including filtering and deduplication. The tutorial
          will then shift focus to data quality assessment, introducing
          evaluation metrics for both text and multimodal data to ensure
          robustness and reliability. We will also cover advanced methods for
          data storage, retrieval, and utilization, with a particular emphasis
          on techniques like Retrieval-Augmented Generation (RAG), dynamic data
          selection, and data composition. Additionally, we will introduce
          DataFlow, an efficient and automated system designed to streamline the
          data preparation pipeline for LLMs. Finally, we will address the key
          challenges and emerging directions in data-centric LLMs.
        </p>
        <h4>Bio</h4>
        <p>
          <b>Wentao Zhang</b> is an Assistant Professor at Peking University’s
          Center for Machine Learning Research, specializing in Data-centric ML
          and ML systems. With over 60 publications in top-tier venues like
          SIGMOD, KDD, and ICML, he has contributed to impactful systems like
          Angel and DataFlow. His work powers billion-scale applications at
          Tencent and has earned accolades such as the Best Paper Runner Up at
          APWeb-WAIM 2023 and the Best Student Paper at WWW 2022 and CIKM 2024.
        </p>
        <p>
          <b>Conghui He</b> is a Research Director at SenseTime and a PI at the
          Shanghai AI Laboratory. Previously at WeChat, he developed the Plato
          graph computing framework. A Tsinghua University PhD graduate, he won
          the Gordon Bell Prize (2017) for high-performance computing. He leads
          OpenDataLab and MinerU, focusing on open datasets and tools for AGI
          development, while supporting InternLM and InternVL with high-quality
          data. His expertise spans HPC, computer vision, and large language
          models.
        </p>
        <p>
          <b>Bin Cui</b> is a Professor at Peking University and an IEEE Fellow
          (2024). A Cheung Kong Distinguished Professor (2016), his research
          spans database systems, big data analytics, and ML/DL systems. With
          100+ publications, he has held leadership roles in conferences like
          VLDB 2024 and DASFAA 2020. Recognized with awards such as the CCF
          Young Scientist Award (2009) and the MOE Natural Science Second Prize
          (2014).
        </p>

        <h2 id="tutorial-6">Tutorial 6</h2>
        <h3>
          Neural Network Reprogrammability: A Unified Theme for
          Parameter-Efficient Model Adaptation
        </h3>
        <h4>Speakers</h4>
        <ul>
          <li>
            Feng Liu (University of Melbourne, RIKEN Center for Advanced
            Intelligence Project)
          </li>
          <li>Zesheng Ye (The University of Melbourne)</li>
        </ul>
        <h4>Brief Outline of the Tutorial</h4>
        <p>
          Modern foundation models, e.g., vision-language models (VLMs) and
          large-language models (LLMs), have become prohibitively expensive to
          fine-tune, creating accessibility barriers for researchers and
          practitioners with limited resources. While research on
          parameter-efficient model adaptation has been conducted, existing
          studies are scattered across different communities–they share the same
          underlying principle though. This tutorial unifies three emerging
          areas–model reprogramming, prompt tuning, and in-context
          learning–through the lens of neural network reprogrammability. Namely,
          by strategically modifying inputs or contexts provided to the model
          rather than model parameters, we can repurpose pre-trained models for
          new tasks without incurring high costs of retraining.
        </p>
        <h4>Bio</h4>
        <p>
          <b>Feng Liu</b> is a machine learning researcher with interests in
          hypothesis testing and trustworthy machine learning. He is currently
          an ARC DECRA Fellow, an Assistant Professor in Machine Learning, a
          Director of Trustworthy Machine Learning and Reasoning Lab at The
          University of Melbourne, and a Visiting Scientist at RIKEN Center for
          Advanced Intelligence Project (RIKEN AIP). He was an Australian
          Laureate Postdoc Fellow at the Australian Artificial Intelligence
          Institute (2020-2022). He received his Ph.D. degree in Computer
          Science from the University of Technology Sydney (2016-2020). He has
          served as an area chair for ICML, NeurIPS, ICLR, and AISTATS. He has
          also served as an editor of ACM Transactions on Probabilistic Machine
          Learning, an action editor of Neural Networks and Transactions on
          Machine Learning Research, and an associate editor of the
          International Journal of Machine Learning and Cybernetics. He received
          the NeurIPS 2022 Outstanding Paper Award, the ICLR 2022 Outstanding
          Reviewer Award, and the NeurIPS 2021 Outstanding Reviewer Award.
        </p>
        <p>
          <b>Zesheng Ye</b> is a Postdoctoral Research Fellow at The University
          of Melbourne, where he focuses on developing trustworthy machine
          learning systems. His research addresses challenges in deploying
          efficient pretrained models, ensuring robustness against adversarial
          attacks and distribution shifts, and enhancing privacy awareness, with
          a particular emphasis on adversarial reprogrammability in deep
          learning recently. He completed his Ph.D. at the University of New
          South Wales (2020–2024) and actively contributes to the academic
          community as an Area Chair/PC Member for conferences such as
          TheWebConf, IJCNN, and CIKM. He also serves as a reviewer for leading
          venues such as ICML, NeurIPS, ICLR, and CVPR.
        </p>

        <h2 id="tutorial-7">Tutorial 7</h2>
        <h3>
          AI for Database Optimization: Cardinality Estimation, Learned Query
          Execution, and Indexing
        </h3>
        <h4>Speakers</h4>
        <ul>
          <li>Hai Lan (RMIT University)</li>
          <li>Songsong Mo (Nanyang Technological University)</li>
          <li>Zhifeng Bao (RMIT University)</li>
          <li>Gao Cong (Nanyang Technological University)</li>
        </ul>
        <h4>Brief Outline of the Tutorial</h4>
        <p>
          Database systems serve as the backbone of modern data-driven
          applications, supporting a wide range of workloads from transactional
          processing to analytical queries. However, traditional query
          optimizers, static indexing structures, and handcrafted cost models
          struggle to adapt to dynamic and complex query workloads. These
          limitations lead to suboptimal query execution, inefficient index
          selection, and inaccurate cardinality estimates, ultimately impacting
          database performance and scalability.
        </p>
        <p>
          The emergence of machine learning-driven approaches presents a
          promising alternative to enhance query optimization, index selection,
          and cardinality estimation. Learned cardinality estimation models have
          demonstrated superior accuracy over traditional methods, while
          AI-driven indexing techniques enable databases to efficiently adapt to
          workloads. Additionally, ML-based query optimization methods, such as
          deep learning-enhanced optimizers, offer self-adaptive, workload-aware
          query execution strategies that significantly improve efficiency.
        </p>
        <p>
          Integrating AI into database systems can achieve higher query
          execution efficiency, better indexing strategies, and more accurate
          cost estimations, ultimately reducing query latency and improving
          overall system performance. This tutorial is motivated by the need to
          bridge the gap between traditional database optimization techniques
          and modern AI-driven approaches, equipping researchers and
          practitioners with the knowledge to design and implement
          next-generation database optimization methods.
        </p>
        <h4>Bio</h4>
        <p>
          <b>Hai Lan</b> is currently a Ph.D. student at RMIT University under
          the supervision of Prof. Zhifeng Bao. His research interests include
          data management, machine learning for databases, and AI-driven query
          optimization. He has published in top-tier venues such as SIGMOD,
          VLDB, ICDE.
        </p>
        <p>
          <b>Songsong Mo</b> is a Ph.D. student in Computer Science at Nanyang
          Technological University advised by Prof. Gao Cong. He received his
          Bachelor’s and Master’s degrees from Wuhan University. His research
          interests focus on ML for databases. He has published in top-tier
          venues such as SIGMOD, VLDB.
        </p>
        <p>
          <b>Zhifeng Bao</b> is a full professor in the School of Computing
          Technologies at RMIT University, Australia. He is generally interested
          in data (lake) management and governance, particularly in the areas of
          AI4DB and DB4AI. On the AI4DB side, he explores how machine learning
          techniques can optimize core database operations on both
          low-dimensional and high-dimensional data, including index selection,
          learned indexes, query optimization, and cardinality estimation. On
          the DB4AI side, he focuses on identifying suitable datasets,
          discovering hidden relationships among datasets, addressing various
          data quality challenges, and assembling them to fulfill diverse user
          requirements within specified constraints. He has also served as an
          Associate Editor for PVLDB and SIGMOD, and area chair for KDD and
          ICDE.
        </p>
        <p>
          <b>Gao Cong</b> is a full Professor in the School of Computer Science
          and Engineering at Nanyang Technological University. He is an ACM
          distinguished member. His general research interests are in Data
          Science. In particular, his research focuses on geospatial data
          management, spatio-temporal data mining, recommendation, mining social
          media data, AI4DB, and DB4AI. Two research papers presented at WSDM
          2020 and WSDM 2022 were awarded the Best Paper Runner-Up Award. His
          work has been cited over 20,000 times on Google Scholar, with an
          H-index of 72. He has served as the PC Co-Chair of ICDE 2022, Vice
          Chair of KDD 2021, PC Co-Chair of the VLDB 2014 E&A Track, and PC Vice
          Chair of ICDE 2018.
        </p>
      </article>
      <FloatButton.BackTop />
    </>
  );
};

export default ProgramTutorials;
