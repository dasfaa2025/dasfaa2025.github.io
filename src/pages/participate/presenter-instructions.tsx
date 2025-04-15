import PageBanner from "../../components/PageBanner";
import { Banner4 } from "../../assets";
import Link from "../../components/Link";

const PresenterInstructions = () => {
  return (
    <>
      <PageBanner title="Presenter Instructions" image={Banner4} />
      <article className="prose w-full">
        <h2>Instructions for Research Short Papers</h2>
        <p>
          Research short papers will be presented during the Poster Session on
          Tuesday, 27 May 2025. The schedule is as follows:
        </p>
        <ul>
          <li>17:30 – 18:00: Poster Preparation (Empress Hall 3, 4 & 5)</li>
          <li>
            18:00 – 21:00: Welcome Reception & Poster Presentation (Empress Hall
            3, 4 & 5)
          </li>
        </ul>
        <p>Poster Specifications:</p>
        <ul>
          <li>Size: A0 (841mm × 1189mm)</li>
          <li>Orientation: Portrait (vertical)</li>
        </ul>
        <p>
          Presenters are expected to be available during the session to discuss
          their work with attendees.
        </p>
        <Link href="/DASFAA 2025 Poster Template A0 Portrait.pptx">
          DASFAA 2025 Poster Template
        </Link>
      </article>
    </>
  );
};

export default PresenterInstructions;
