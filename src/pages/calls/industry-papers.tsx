import DateTable from "../../components/DateTable";
import PageBanner from "../../components/PageBanner";
import { Banner2 } from "../../assets";
import Link from "../../components/Link";

const IndustryPapers = () => {
  return (
    <>
      <PageBanner title="Call For Industry Papers" image={Banner2} />
      <article className="prose">
        <p>
          The Industrial & Practitioner Track of the 30th International
          Conference on Database Systems for Advanced Applications (DASFAA-2025)
          seeks submissions covering innovations in data management
          technologies, industrial applications, and experience in applying new
          technologies to real-world data problems. The goal of this track is to
          introduce and discuss emerging trends and challenges with practical
          implications, and to facilitate interactions between academia and
          industry in this area.
        </p>

        <h2>Important Dates</h2>
        <DateTable
          values={[
            {
              label: "Paper submission",
              date: "December 2, 2024",
              oldDate: "November 25, 2024",
            },
            {
              label: "Acceptance Notification",
              date: "January 11, 2025",
            },
            {
              label: "Camera-Ready Version",
              date: "February 8, 2025",
            },
          ]}
        />

        <blockquote>
          * All deadlines are 23:59 Anywhere on Earth (AoE) time
        </blockquote>

        <h2>Topics</h2>
        <p>
          Contributions from both industry R&D groups and academia are welcome.
          Topics of interest include but are not limited to:
        </p>
        <ul>
          <li>Advanced analytics of database systems</li>
          <li>Applications of big data management</li>
          <li>
            Mining and machine learning applied to industrial & business data
          </li>
          <li>Information retrieval and knowledge discovery</li>
          <li>Cloud computing</li>
          <li>Artificial intelligence for data management</li>
          <li>Exploitation of new hardware trends</li>
          <li>Security and privacy issues for database systems</li>
          <li>Explainability, fairness and accountability</li>
        </ul>
        <p>
          Authors should submit papers reporting original work that are
          currently not under review or published elsewhere. We will accept full
          papers (up to 12 pages) and extended abstracts (up to 4 pages) in LNCS
          (Lecture Notes in Computer Science) format. Industrial track
          submissions must be submitted electronically, in PDF format, using the
          same Conference Management Tool as the research track. All papers will
          be single-blind reviewed. All accepted papers will be published in the
          conference proceedings.
        </p>

        <h2>Submission Website</h2>
        <Link href="https://cmt3.research.microsoft.com/DASFAA2025/Submission/Index" />
        <blockquote>
          Please select the appropriate track during your submission.
        </blockquote>

        <h2>Contact information</h2>
        <p>
          For any problems with the submission system, please contact the
          industry co-chair directly.
        </p>

        <h2>Industry Co-Chairs</h2>
        <ul>
          <li>
            <b>Xiaoli LI</b>, A*Star
          </li>
        </ul>
      </article>
    </>
  );
};

export default IndustryPapers;
