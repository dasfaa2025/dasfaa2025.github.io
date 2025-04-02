import PageBanner from "../../components/PageBanner";
import { Banner4 } from "../../assets";
import SessionDetailsMain from "../../assets/session_details_main.json";
import SessionDetailsIndustry from "../../assets/session_details_industry.json";
import SessionDetailsPoster from "../../assets/session_details_poster.json";
import { scrollWithOffset } from "./index.ts";
import { HashLink } from "react-router-hash-link";
import { BackTop, Table, TableProps } from "antd";

const columns1: TableProps["columns"] = [
  {
    title: "Paper ID",
    dataIndex: "paper_id",
    key: "paper_id",
  },
  {
    title: "Paper Title",
    dataIndex: "paper_title",
    key: "paper_title",
  },
  {
    title: "Presentation Time (Mins)",
    dataIndex: "presentation_time",
    key: "presentation_time",
  },
];

const columns2: TableProps["columns"] = [
  {
    title: "Paper ID",
    dataIndex: "paper_id",
    key: "paper_id",
  },
  {
    title: "Paper Title",
    dataIndex: "paper_title",
    key: "paper_title",
  },
];

const ProgramSessionDetails = () => {
  return (
    <>
      <PageBanner title="Session Details" image={Banner4} />
      <article className="prose w-full">
        <ul>
          <li>
            <HashLink
              smooth={true}
              className="text-[#936bff]"
              to="#main-sessions"
              scroll={(el) => scrollWithOffset(el)}
            >
              Main Sessions
            </HashLink>
            <ul>
              {SessionDetailsMain.map((e, idx) => (
                <li key={`menu-main-session-${idx}`}>
                  <HashLink
                    smooth={true}
                    className="text-[#936bff]"
                    to={`#main-sessions-${idx + 1}`}
                    scroll={(el) => scrollWithOffset(el)}
                  >
                    {e.session}
                  </HashLink>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <HashLink
              smooth={true}
              className="text-[#936bff]"
              to="#industry-sessions"
              scroll={(el) => scrollWithOffset(el)}
            >
              Industry Sessions
            </HashLink>
            <ul>
              {SessionDetailsIndustry.map((e, idx) => (
                <li key={`menu-industry-session-${idx}`}>
                  <HashLink
                    smooth={true}
                    className="text-[#936bff]"
                    to={`#industry-sessions-${idx + 1}`}
                    scroll={(el) => scrollWithOffset(el)}
                  >
                    {e.session}
                  </HashLink>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <HashLink
              smooth={true}
              className="text-[#936bff]"
              to="#poster-sessions"
              scroll={(el) => scrollWithOffset(el)}
            >
              Poster Sessions
            </HashLink>
          </li>
        </ul>

        <h2 id="main-sessions">Main Sessions</h2>
        {SessionDetailsMain.map((e, idx) => (
          <div key={`main-session-${idx}`}>
            <h3 id={`main-sessions-${idx + 1}`}>{e.session}</h3>
            <Table
              className="not-prose"
              rowKey="paper_id"
              columns={columns1}
              dataSource={e.papers}
              pagination={false}
              bordered
            />
          </div>
        ))}

        <h2 id="industry-sessions">Industry Sessions</h2>
        {SessionDetailsIndustry.map((e, idx) => (
          <div key={`industry-session-${idx}`}>
            <h3 id={`industry-sessions-${idx + 1}`}>{e.session}</h3>
            <Table
              className="not-prose"
              rowKey="paper_id"
              columns={columns1}
              dataSource={e.papers}
              pagination={false}
              bordered
            />
          </div>
        ))}

        <h2 id="poster-sessions">Poster Sessions</h2>
        <Table
          className="not-prose"
          rowKey="paper_id"
          columns={columns2}
          dataSource={SessionDetailsPoster}
          pagination={false}
          bordered
        />
      </article>
      <BackTop />
    </>
  );
};

export default ProgramSessionDetails;
