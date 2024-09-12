import Link from "../../components/Link";
import DateTable from "../../components/DateTable";
import PageBanner from "../../components/PageBanner";
import Banner from "../../assets/singapore-4.jpg";

const PhDConsortiumPaper = () => {
  return (
    <>
      <PageBanner title="Call for PhD Consortium Paper" image={Banner} />
      <article className="prose">
        <p>
          The DASFAA PhD Consortium provides a platform for PhD students to
          present their PhD proposals and to seek comments and suggestions from
          the PhD Consortium Committee, which consists of leading scientists and
          experts in the DASFAA related areas. The PhD students should be in the
          phase of preparing or completing their PhD thesis proposals (or
          similar equivalent phase in the PhD program) at their home
          universities. All the submitted proposals will be reviewed by the
          committee. The accepted proposals will be included in the conference
          proceedings, and the corresponding authors will be invited to attend
          the consortium and interact directly with the committee members at
          DASFAA 2025.
        </p>

        <h2>Important dates</h2>
        <DateTable
          values={[
            {
              label: "Submission",
              date: "January 27, 2025",
            },
            {
              label: "Acceptance notification",
              date: "February 14, 2025",
            },
            {
              label: "Camera-Ready version",
              date: "TBA",
            },
          ]}
        />

        <h2>Submission guidelines</h2>
        <p>
          Interested PhD students should submit a four-page proposal describing
          their PhD research plan and progress using the Springer Lecture Notes
          format (
          <Link href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines" />
          ). The proposal should follow the same outline, details, and format as
          regular DASFAA papers. A proposal must be written in English and
          include:
        </p>
        <ul>
          <li>The title of the PhD proposal and the author name</li>
          <li>The problem definitions, motivations, and novelties</li>
          <li>The current development and related work</li>
          <li>Your proposed approach and methodology, and the significance</li>
          <li>The current results and future work of your research</li>
        </ul>
        <p>
          The proposal should be submitted as a PDF file. DASFAA 2023 uses the
          CMT system for paper submission. Please submit your paper via the
          link:
        </p>

        <h2>Review process</h2>
        <p>
          The submitted PhD proposals will be evaluated based on several
          factors:
        </p>
        <ul>
          <li>The novelty of the problems</li>
          <li>
            The clear understanding of the current development in the related
            areas
          </li>
          <li>The significance of the proposed methodology</li>
          <li>The significance of your contribution</li>
        </ul>
        <p>
          All accepted proposals are required to be presented at the conference.
        </p>

        <h2>Ph.D. Consortium Chairs</h2>
      </article>
    </>
  );
};

export default PhDConsortiumPaper;
