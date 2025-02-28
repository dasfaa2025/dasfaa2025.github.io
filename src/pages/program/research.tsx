import PageBanner from "../../components/PageBanner";
import { Banner4 } from "../../assets";
import {
  ProgramPapersData,
  ProgramPapersItem,
  scrollWithOffset,
} from "./index";
import { BackTop, Table, TableProps } from "antd";
import { HashLink } from "react-router-hash-link";

const columns: TableProps<ProgramPapersItem>["columns"] = [
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

const ProgramResearch = () => {
  return (
    <>
      <PageBanner title="Research Papers" image={Banner4} />
      <article className="prose">
        <ul>
          <li>
            <HashLink
              smooth={true}
              className="text-[#936bff]"
              to="#long-papers"
              scroll={(el) => scrollWithOffset(el)}
            >
              Long Papers
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth={true}
              className="text-[#936bff]"
              to="#short-papers"
              scroll={(el) => scrollWithOffset(el)}
            >
              Short Papers
            </HashLink>
          </li>
        </ul>
        <h2 className="mb-0" id="long-papers">
          Long Papers
        </h2>
        <Table<ProgramPapersItem>
          columns={columns}
          dataSource={ProgramPapersData.research["Long Papers"]}
          pagination={false}
        />

        <h2 className="mb-0" id="short-papers">
          Short Papers
        </h2>
        <Table<ProgramPapersItem>
          columns={columns}
          dataSource={ProgramPapersData.research["Short Papers"]}
          pagination={false}
        />
      </article>
      <BackTop />
    </>
  );
};

export default ProgramResearch;
