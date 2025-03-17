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

const ProgramResearch = () => {
  return (
    <>
      <PageBanner title="Research Papers" image={Banner4} />
      <article className="prose w-full">
        <ul>
          <li>
            <HashLink
              smooth={true}
              className="text-[#936bff]"
              to="#long-papers"
              scroll={(el) => scrollWithOffset(el)}
            >
              Full Papers(L - Long oral presentation, S - Short oral
              presentation)
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth={true}
              className="text-[#936bff]"
              to="#short-papers"
              scroll={(el) => scrollWithOffset(el)}
            >
              Short Papers(Only Poster)
            </HashLink>
          </li>
        </ul>
        <h2 className="mb-0" id="long-papers">
          Full Papers(L - Long oral presentation, S - Short oral presentation)
        </h2>
        <Table<ProgramPapersItem>
          rowKey="id"
          columns={columns}
          dataSource={ProgramPapersData.research.full_long.concat(
            ProgramPapersData.research.full_short,
          )}
          pagination={false}
        />

        <h2 className="mb-0" id="short-papers">
          Short Papers(Only Poster)
        </h2>
        <Table<ProgramPapersItem>
          rowKey="id"
          columns={columns}
          dataSource={ProgramPapersData.research.short}
          pagination={false}
        />
      </article>
      <BackTop />
    </>
  );
};

export default ProgramResearch;
