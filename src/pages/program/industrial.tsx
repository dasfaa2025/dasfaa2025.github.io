import PageBanner from "../../components/PageBanner";
import { Banner4 } from "../../assets";
import { BackTop, Table, TableProps } from "antd";
import {
  ProgramPapersData,
  ProgramPapersItem,
  scrollWithOffset,
} from "./index.ts";
import { HashLink } from "react-router-hash-link";

const columns: TableProps<ProgramPapersItem>["columns"] = [
  {
    title: "Serial No",
    dataIndex: "index",
    key: "index",
    render: (_text, _record, index) => index + 1,
  },
  {
    title: "Paper ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Authors",
    dataIndex: "authors",
    key: "authors",
  },
];

const ProgramIndustrial = () => {
  return (
    <>
      <PageBanner title="Industrial Papers" image={Banner4} />
      <article className="prose w-full">
        <ul>
          <li>
            <HashLink
              smooth={true}
              className="text-[#936bff]"
              to="#group-1"
              scroll={(el) => scrollWithOffset(el)}
            >
              Group 1: Recommendation Systems and E-commerce
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth={true}
              className="text-[#936bff]"
              to="#group-2"
              scroll={(el) => scrollWithOffset(el)}
            >
              Group 2: LLMs and Knowledge Graphs
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth={true}
              className="text-[#936bff]"
              to="#group-3"
              scroll={(el) => scrollWithOffset(el)}
            >
              Group 3: Distributed Computing and Prediction
            </HashLink>
          </li>
        </ul>
        <h2 className="mb-0" id="group-1">
          Group 1: Recommendation Systems and E-commerce
        </h2>
        <Table<ProgramPapersItem>
          rowKey="id"
          columns={columns}
          dataSource={ProgramPapersData.industry.group1}
          pagination={false}
        />

        <h2 className="mb-0" id="group-2">
          Group 2: LLMs and Knowledge Graphs
        </h2>
        <Table<ProgramPapersItem>
          rowKey="id"
          columns={columns}
          dataSource={ProgramPapersData.industry.group2}
          pagination={false}
        />

        <h2 className="mb-0" id="group-3">
          Group 3: Distributed Computing and Prediction
        </h2>
        <Table<ProgramPapersItem>
          rowKey="id"
          columns={columns}
          dataSource={ProgramPapersData.industry.group3}
          pagination={false}
        />
      </article>
      <BackTop />
    </>
  );
};

export default ProgramIndustrial;
