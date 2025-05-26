import PageBanner from "../../components/PageBanner";
import { Banner4 } from "../../assets";
import Link from "../../components/Link";

const PresenterInstructions = () => {
  return (
    <>
      <PageBanner title="Presenter Instructions" image={Banner4} />
      <article className="prose w-full">
        <h2>Instructions for Research Long Papers & Industry Papers</h2>
        <p>
          Please refer to the following instructions to prepare your
          presentations:
        </p>
        <ol>
          <li>
            Check out your presentation timeslots at the DASFAA2025 website.
          </li>
          <li>
            Report to your session chair 5 mins before the session begins. Copy
            your slides to the laptop in the session room.
          </li>
          <li>
            For research paper sessions, long and short oral presentations are
            given 15 and 10 minutes respectively EXCLUDING QA time. We expect
            each presentation to have 3-5 minutes for QA.
          </li>
          <li>
            For industry paper sessions, long and short presentations are given
            20 and 12 minutes respectively EXCLUDING QA time. We expect each
            presentation to have 3-5 minutes for QA.
          </li>
        </ol>
        <p>
          If you have special requests, please email{" "}
          <Link target="_self" href="mailto:dasfaa2025@gmail.com">
            dasfaa2025@gmail.com
          </Link>{" "}
          before 26 May 2025.
        </p>

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
