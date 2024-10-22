import DateTable from "../../components/DateTable";
import PageBanner from "../../components/PageBanner";
import { Banner2 } from "../../assets";

const Workshops = () => {
  return (
    <>
      <PageBanner title="Call for Workshops" image={Banner2} />
      <article className="prose">
        <p>
          We invite workshop proposals on topics related to database systems and
          their applications. We solicit proposals for workshops that explore
          novel research areas in databases and data management systems,
          including, data pre-processing, data quality, privacy, provenance,
          systems, etc. Of particular interest is in the applications of data
          management techniques in non-computer science domains, such as
          bioinformatics, urban computing, agriculture, epidemiology, health
          informatics, etc.
        </p>

        <p>
          The duration of each workshop is either one full day or half a day.
          Accepted papers are published in a separate proceedings by LNCS/LNAI.
          All workshops will benefit from the registration process of
          DASFAA-2025 (we will have a single registration for conferences,
          workshops and tutorials).
        </p>

        <h2>Important Dates</h2>
        <h3>Workshop Proposal</h3>
        <DateTable
          values={[
            {
              label: "Proposal submission",
              date: "November 1, 2024",
            },
            {
              label: "Acceptance notification",
              date: "November 10, 2024",
            },
          ]}
        />

        <h3>Workshop Papers</h3>
        <DateTable
          values={[
            {
              label: "Paper submission",
              date: "Please see the workshop webpage",
            },
            {
              label: "Acceptance notification",
              date: "Please see the workshop webpage",
            },
            {
              label: "Camera Ready",
              date: "Please see the workshop webpage",
            },
          ]}
        />

        <blockquote>
          * All deadlines are 23:59 Anywhere on Earth (AoE) time
        </blockquote>

        <h2>Submission Guidelines for Workshop Proposals</h2>
        <p>
          Workshop proposals should be handled electronically, in PDF format
          (LNCS style), through the CMT system. Each workshop proposal must
          contain all pertinent information, including the following:
        </p>
        <ul>
          <li>Workshop title and acronym</li>
          <li>
            Short description about the workshop, including the list of topics
          </li>
          <li>Name and contact information of the organizer(s)</li>
          <li>Preferred duration of the workshop (half or full day)</li>
          <li>Potential PC members of the workshop</li>
          <li>
            Important dates (paper submission deadline, notification deadline,
            etc.)
          </li>
          <li>Expected number of participants</li>
          <li>
            In case of previous instances of the workshop, the historical
            numbers of participants
          </li>
        </ul>

        <h2>Publication</h2>
        <p>
          The papers accepted by DASFAA 2025 workshop will be published in a
          combined volume of Lecture Notes in Computer Science series published
          by Springer, and indexed by both LNCS and DBLP.
        </p>

        <h2>Contact information</h2>
        <p>
          For any problems with the submission system, please contact the
          workshop chairs directly.
        </p>

        <h2>Workshop Charis</h2>
        <p>
          <b>Sourav Bhowmick</b>, Nanyang Technological University, Singapore
        </p>
      </article>
    </>
  );
};

export default Workshops;
