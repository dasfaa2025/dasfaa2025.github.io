import DateTable from "../../components/DateTable";
import PageBanner from "../../components/PageBanner";
import { Banner2 } from "../../assets";

const DemoPapers = () => {
  return (
    <>
      <PageBanner title="Call for Demo Papers" image={Banner2} />
      <article className="prose">
        <p>
          The Demonstration Track of the 30th International Conference on
          Database Systems for Advanced Applications (DASFAA 2025) provides an
          engaging and highly interactive way to showcase your database
          research. Demo submissions are solicited in all areas of database
          applications, practice, technology, and theory. All demo submissions
          need to:
        </p>
        <ul>
          <li>Motivate the demonstrated concepts</li>
          <li>Describe the system and the technology</li>
          <li>Detail the features and scenarios that will be demonstrated</li>
          <li>Pinpoint the novelty and significance of the contribution</li>
          <li>
            Optional: In the paper, provide URLs of a screencast video (up to 10
            minutes), screenshots, and additional external material (e.g.,
            shared code on GitHub).
          </li>
        </ul>

        <p>
          Demo submissions will be evaluated based on the following criteria:
        </p>
        <ul>
          <li>Potential usefulness</li>
          <li>Functionality</li>
          <li>Potential for engagement with the audience</li>
          <li>Novelty</li>
          <li>Successful use cases</li>
        </ul>

        <h2>Important Dates</h2>
        <DateTable
          values={[
            {
              label: "Submission",
              date: "December 10, 2024",
            },
            {
              label: "Acceptance notification",
              date: "January 13, 2025",
            },
            {
              label: "Camera Ready Deadline",
              date: "February 8, 2025",
            },
          ]}
        />

        <blockquote>
          * All deadlines are 23:59 Anywhere on Earth (AoE) time
        </blockquote>

        <h2>Topics of Interest</h2>
        <p>We welcome submissions on all topics in the general areas of:</p>
        <ul>
          <li>Database core technology</li>
          <li>Domain-specific/advanced database systems</li>
          <li>Cloud data management</li>
          <li>Data science</li>
          <li>Advanced applications</li>
          <li>AI for database and database for AI</li>
        </ul>

        <h2>Submission</h2>
        <p>
          Demo submissions must be in English and prepared in accordance with
          the given submission guidelines for the conference. Demo submissions
          must not exceed 4 pages, in LNCS (Lecture Notes in Computer Science)
          format, including references. Only electronic submissions in PDF
          format will be considered. Please upload your submission to the DASFAA
          2025 Demo Track through the CMT submission. Demo submissions are not
          double-blind reviewed and hence authors do not need anonymizations.
        </p>
        <p>
          Demo submissions must not be under review for any other publishing
          forum or presentation venue (including conferences, workshops, and
          journals) during the time they are being considered for DASFAA 2025.
          Furthermore, after you submit to DASFAA, 2025 you must await our
          response and only resubmit elsewhere if your demo is rejected (or
          withdrawn at your request). This restriction applies to identical
          submissions as well as to submissions with a substantial overlap in
          scientific content and results. Demo submissions will be included in
          the conference proceedings.
        </p>

        <h2>Contact Information</h2>
        <p>
          For any problems with the submission system, please contact the demo
          co-chairs directly.
        </p>

        <h2>Demo Co-Chairs</h2>
        <ul>
          <li>
            <b>Yuchen LI</b>, Singapore Management University, Singapore
          </li>
        </ul>
      </article>
    </>
  );
};

export default DemoPapers;
