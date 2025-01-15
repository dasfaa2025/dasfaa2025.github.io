import DateTable from "../../components/DateTable";
import Link from "../../components/Link";
import PageBanner from "../../components/PageBanner";
import { Banner2 } from "../../assets";

const ResearchPapers = () => {
  return (
    <>
      <PageBanner title="Call for research papers" image={Banner2} />
      <article className="prose">
        <p>
          The International Conference on Database Systems for Advanced
          Applications (DASFAA) is a leading international forum for discussing
          the latest research on database systems and advanced applications.
          DASFAA, a well-established international conference series that
          provides a forum for technical presentations and discussions among
          database researchers, developers, and users from academia, business,
          and industry, showcases state-of-the-art R&D activities in the general
          areas of database systems and their applications.
        </p>

        <h2>Important dates</h2>
        <DateTable
          values={[
            {
              label: "Full paper submission",
              date: "November 25, 2024",
            },
            {
              label: "Acceptance notification",
              date: "January 23, 2025",
              oldDate: "January 16, 2025",
            },
            {
              label: "Camera ready",
              date: "February 8, 2025",
            },
          ]}
        />

        <blockquote>
          * All deadlines are 23:59 Anywhere on Earth (AoE) time
        </blockquote>

        <h2>Topics</h2>
        <p>
          DASFAA-2025 welcomes high-quality, original, and previously
          unpublished submissions in database theory, technology, and practice.
          Topics of interests for the conference include, but not limited to,
          the following:
        </p>

        <h3>Database systems</h3>
        <h4>Database core technology</h4>
        <ul>
          <li>Query processing and optimization</li>
          <li>Index and storage systems</li>
          <li>Data model and query language</li>
          <li>Databases for emerging hardware</li>
          <li>Machine learning for database</li>
          <li>Data warehouse and OLAP</li>
          <li>Transaction management</li>
        </ul>

        <h4>Domain-specific/advanced database systems</h4>
        <ul>
          <li>Data processing in VR/AR/MR</li>
          <li>Graph data management</li>
          <li>Data management in social networks</li>
          <li>Embedded and mobile databases</li>
          <li>Temporal and spatial databases</li>
          <li>Data streams and time-series data</li>
          <li>Knowledge management</li>
          <li>Text databases</li>
          <li>Multimedia databases</li>
          <li>HCI for modern information systems</li>
          <li>Natural language query interface</li>
          <li>Probabilistic and uncertain data</li>
          <li>Sensor data management</li>
          <li>Statistical and scientific databases</li>
        </ul>

        <h4>Cloud data management</h4>
        <ul>
          <li>Cloud data management</li>
          <li>Big Data data management (e.g, MapReduce, Spark)</li>
          <li>Parallel database systems</li>
          <li>Data semantics and data integration</li>
          <li>Information integration</li>
        </ul>

        <h4>Distributed ledger and Blockchain</h4>
        <ul>
          <li>Distributed ledgers</li>
          <li>Data mining in a distributed ledger setting</li>
          <li>
            Secure data sharing and collaborative intelligence through
            blockchain
          </li>
          <li>
            Algorithm design, complexity analysis, implementation for blockchain
          </li>
          <li>Benchmarking and performance study</li>
          <li>Data analytics on blockchain</li>
          <li>Data provenance, data governance, especially with AI</li>
          <li>Data asset management</li>
          <li>Data store for blockchain</li>
          <li>Applications and use cases of blockchain</li>
        </ul>

        <h3>Data science and advanced applications</h3>
        <h4>Data science</h4>
        <ul>
          <li>Data-driven AI technology</li>
          <li>Data mining and knowledge discovery</li>
          <li>Neural network</li>
          <li>Graph and social network analysis</li>
          <li>RDF and knowledge graphs</li>
          <li>Text and data mining</li>
        </ul>

        <h4>Advanced applications</h4>
        <ul>
          <li>Search and recommendation technology</li>
          <li>Security, privacy, and trust</li>
          <li>Data quality and credibility</li>
          <li>Bio and health informatics</li>
          <li>Semantic Web and knowledge management</li>
          <li>Crowd-sourcing</li>
          <li>Data archive and digital library</li>
          <li>Web information systems</li>
          <li>Information extraction and summarization</li>
        </ul>

        <h2>Paper Submission</h2>
        <p>
          Paper submission must be in English. All papers will be double-blind
          reviewed by the Program Committee based on technical quality,
          relevance to DASFAA, originality, significance, and clarity. All paper
          submissions will be handled electronically. Any submitted paper
          violating the length, file type, or formatting requirements will be
          rejected without review. Each submitted paper should include an
          abstract up to 200 words and be no longer than 16 pages (including
          references, appendices, etc.) in LNCS (Lecture Notes in Computer
          Science) format. We encourage authors to cite related work
          comprehensively. When citing conference papers, please also consider
          citing their extended journal versions if applicable. All papers must
          be submitted electronically through the paper submission system in PDF
          only.
        </p>
        <p>
          The submitted papers must not be previously published in a refereed
          journal or conference and must not be under consideration by any other
          conference or journal during the DASFAA review process. If the paper
          is accepted, at least one author must complete the regular
          registration and attend the conference to present the paper. For
          no-show authors, their papers will not be included in the proceedings.
          Accepted papers will be published in the conference proceedings.
        </p>

        <h2>Double-Blind Review</h2>
        <p>
          DASFAA-2025 will employ a double-blind reviewing process, i.e., the PC
          members and referees who review the paper will not know the identity
          of the authors. To ensure the anonymity of authorship, authors must
          prepare their manuscript as follows:
        </p>
        <ul>
          <li>
            Author’s names and affiliations must not appear on the title page or
            elsewhere in the paper
          </li>
          <li>
            Funding sources must not be acknowledged on the title page or
            elsewhere in the paper
          </li>
          <li>
            Research group members, or other colleagues or collaborators, must
            not be acknowledged anywhere in the paper
          </li>
          <li>
            Source file naming must also be done with care, to avoid identifying
            the author’s names in the paper’s associated metadata. For example,
            if your name is Jane Smith and you submit a PDF file generated from
            a .dvi file called Jane-Smith.dvi, your authorship could be inferred
            by looking into the PDF file. Submissions must have all details
            identifying the author(s) removed from the original manuscript
            (including the supplementary files, if any), and the author(s)
            should refer to their prior work in the third person and include all
            relevant citations
          </li>
          <li>
            Submissions having unrefereed pre-prints such as arXiv are allowed.
            Authors should make every effort to anonymize their work and, hence,
            cannot cite their own arXiv work.
          </li>
        </ul>
        <p>
          Reviewers will be requested to not try and break the anonymity. Papers
          that do not follow the guidelines mentioned above, or otherwise
          potentially reveal the identity of the authors, are subject to
          immediate rejection. Because of the double-blind review policy, the
          submission of an extended version of a short paper that has been
          published elsewhere is strongly discouraged in DASFAA-2025.
        </p>

        <h2>Conflicts of Interest</h2>
        <p>
          We use CMT’s conflict management system, through which authors should
          flag conflicts with members of the Program Committee. X and Y have a
          conflict of interest if any of the following applies:
        </p>
        <ul>
          <li>
            X and Y have worked in the same university or company in the past
            two years, or will be doing so in the next six months on account of
            an accepted job offer. Different campuses within the same university
            system do not count as the same university for this purpose - UC
            Berkeley does not have a conflict with UC Santa Barbara.
          </li>
          <li>
            X has been a co-author of a paper with Y in the last three years.
          </li>
          <li>
            X has been a collaborator within the past two years, as evidenced in
            a joint publication (subsumed by the stricter rule on co-authorship
            above), joint research project, or co-organizing events (e.g.,
            co-chairs of conferences), or are collaborating now (including
            co-authorship on papers not resulted in final publication yet).
          </li>
          <li>
            X is the master’s/PhD thesis advisor of Y or vice versa,
            irrespective of how long ago this was.
          </li>
          <li>X is a relative or close personal friend of Y.</li>
        </ul>
        <p>
          It is the full responsibility of all authors of a paper to identify
          and declare all COIs with members of the Program Committee (reviewers,
          meta-reviewers, and PC chairs) prior to the submission deadline.
          Submissions with undeclared conflicts or spurious conflicts will be
          desk-rejected.
        </p>

        <h2>Paper Acceptance</h2>
        <p>
          A paper can be accepted as either a full research paper or a short
          research paper. The authors of full research papers are given the
          opportunity to present their work in oral sessions, and they also have
          the option to present in poster sessions. On the other hand, the
          authors of short research papers exclusively present their work in
          poster sessions. Additionally, the accepted short research papers
          should be revised to a maximum of 10 pages in the camera-ready
          version.
        </p>

        <h2>Formatting Template</h2>
        <p>
          Please use one of the following templates for the LNCS (Lecture Notes
          in Computer Science) format:
          <Link
            margin={true}
            href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
          />
        </p>

        <h2>Submission Website</h2>
        <Link href="https://cmt3.research.microsoft.com/DASFAA2025/Submission/Index" />
        <blockquote>
          Please select the appropriate track during your submission.
        </blockquote>

        <h2>Contact Information</h2>
        <p>
          If you have any questions, please feel free to contact us at{" "}
          <Link target="_self" href="mailto:fdzhu@smu.edu.sg">
            fdzhu@smu.edu.sg
          </Link>
        </p>

        <h2>Program Committee Co-Chairs</h2>
        <ul>
          <li>
            <b>Philip S. Yu</b>, University of Illinois at Chicago, USA
          </li>
          <li>
            <b>Feida Zhu</b>, Singapore Management University, Singapore
          </li>
          <li>
            <b>Akiyo NADAMOTO</b>, Konan University, Japan
          </li>
        </ul>
      </article>
    </>
  );
};

export default ResearchPapers;
