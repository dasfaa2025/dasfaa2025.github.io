import DateTable from "../../components/DateTable";
import PageBanner from "../../components/PageBanner";
import Banner from "../../assets/singapore-4.jpg";

const TutorialProposal = () => {
  return (
    <>
      <PageBanner
        title="Steering Committee Members (May 1, 2023 - April 30, 2025)"
        image={Banner}
      />
      <article className="prose">
        <h1>Call for Tutorial Proposal</h1>

        <p>
          The goal of the DASFAA 2025 tutorial track is to offer the conference
          attendees an introduction to the state-of-the-art topics in research,
          development and applications in database technologies and advanced
          data management, processing and analysis systems. We invite tutorial
          proposals from active researchers, engineers, and practitioners on
          topics (such as big data etc.) of potential interest to the attendees
          of the main conference. We note that a tutorial should not only focus
          on the presenters’ previous work, but also present a good review of
          all significant work in the area of the topic. Each tutorial will have
          a length of 1.5 hours.
        </p>

        <h2>Important Dates</h2>
        <DateTable
          values={[
            {
              label: "Proposal Submission",
              date: "January 15, 2025",
            },
            {
              label: "Acceptance Notification",
              date: "January 18, 2025",
            },
          ]}
        />

        <blockquote>
          * All deadlines are 23:59 Anywhere on Earth (AoE) time
        </blockquote>

        <h2>Submission</h2>
        <p>
          Tutorial proposals should be handled electronically, in PDF format
          (Max 4 pages, LNCS style), through the CMT system. Each tutorial
          proposal should include the following information:
        </p>
        <ul>
          <li>Tutorial title</li>
          <li>
            Contact information of the presenters: names, affiliations,
            addresses, and email addresses
          </li>
          <li>Motivation for the tutorial</li>
          <li>Brief outline of the tutorial content</li>
          <li>
            Whether the tutorial was presented elsewhere in the past (and if so)
            what was the attendance
          </li>
          <li>Significant references of the tutorial</li>
          <li>Short biographies of the presenters</li>
        </ul>
        <p>
          The received tutorial proposals will be reviewed by the organizers
          based on the importance of the topic of the proposal and the balance
          of coverage and depth of contents. Acceptance notifications will be
          sent. Tutorials will be presented during the main DASFAA 2025
          conference as parallel sessions. The tutorial slides will be made
          available on the conference website. The conference registration fee
          will be waived for tutorial speakers. An honorarium will also be paid
          for the tutorial presenter(s). The topics of accepted tutorials and
          the names of the presenters will be included in the conference
          proceedings.
        </p>

        <h2>Tutorial Chairs</h2>
        <ul>
          <li>
            <b>Yi Yu</b>, Hiroshima University, Japan
          </li>
        </ul>
      </article>
    </>
  );
};

export default TutorialProposal;
