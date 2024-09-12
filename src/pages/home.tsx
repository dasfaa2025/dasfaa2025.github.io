import Link from "../components/Link";
import LogoSMU from "../assets/logo-smu.svg";
import { FadeText } from "../components/Effect/FadeText.tsx";

const Home = () => {
  return (
    <>
      <div className="banner py-48">
        <div className="home-banner-background" />
        <div className="home-banner-background" />
        <div className="home-banner-background" />
        <div className="home-banner-background" />
        <div className="banner-content w-[650px]">
          <FadeText
            className="text-[80px] font-bold"
            text="DASFAA 2025"
            direction="down"
            framerProps={{
              show: { transition: { delay: 0.2, duration: 0.8 } },
            }}
          />
          <div className="mb-4">
            <FadeText
              className="text-2xl font-bold"
              text="DASFAA 2025: The 30th International Conference on Database Systems
            for Advanced Applications"
              direction="down"
              framerProps={{
                show: { transition: { delay: 0.4, duration: 0.8 } },
              }}
            />
          </div>
          <FadeText
            className="text-lg font-medium"
            text="May 25-28, 2025 Singapore"
            direction="down"
            framerProps={{
              show: { transition: { delay: 0.6, duration: 0.8 } },
            }}
          />
          <FadeText
            className="text-lg font-medium"
            text="Convention Center @Resort World Sentosa, Singapore"
            direction="down"
            framerProps={{
              show: { transition: { delay: 0.6, duration: 0.8 } },
            }}
          />
        </div>
      </div>
      <article className="prose">
        <h2 className="text-justify">
          <FadeText
            text="Welcome to the 30th International Conference on Database Systems for
          Advanced Applications (DASFAA 2025), May 25-28, 2025, Singapore"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.4, duration: 0.8 } },
            }}
          />
        </h2>
        <p>
          <FadeText
            text="It is our great pleasure to present the 30th International Conference
          on Database Systems for Advanced Applications (DASFAA 2025). DASFAA
          provides a leading international forum for discussing the latest
          research on database systems and advanced applications. DASFAA is a
          well-established international conference series that provides a forum
          for technical presentations and discussions among database
          researchers, developers, and users from academia, business, and
          industry, which showcases state-of-the-art R&D activities in the
          general areas of database systems, Web information systems, and their
          applications. The conference's long history has established the event
          as the premier research conference in the database area."
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.6, duration: 0.8 } },
            }}
          />
        </p>

        <h2>Host Institution</h2>
        <div>
          <a
            href="https://www.smu.edu.sg/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img className="m-0 block h-28" alt="SMU" src={LogoSMU} />
          </a>
        </div>

        <h2>Contact us</h2>
        <Link href="mailto:dasfaa2025@gmail.com">dasfaa2025@gmail.com</Link>
      </article>
    </>
  );
};

export default Home;
