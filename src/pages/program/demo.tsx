import PageBanner from "../../components/PageBanner";
import { Banner4 } from "../../assets";
import { BackTop, Table, TableProps } from "antd";
import { ProgramPapersData, ProgramPapersItem } from "./index.ts";

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

const ProgramDemo = () => {
  return (
    <>
      <PageBanner title="Demo Papers" image={Banner4} />
      <article className="prose">
        <Table<ProgramPapersItem>
          columns={columns}
          dataSource={ProgramPapersData.demo.Accept}
          pagination={false}
        />
      </article>
      <BackTop />
    </>
  );
};

export default ProgramDemo;
