import PageBanner from "../../components/PageBanner";
import { Banner4 } from "../../assets";
import { BackTop, Table, TableProps } from "antd";
import { ProgramPapersData, ProgramPapersItem } from "./index.ts";

const columns: TableProps<ProgramPapersItem>["columns"] = [
  {
    title: "Serial No",
    dataIndex: "index",
    key: "index",
    render: (_text, _record, index) => <span>{index + 1}</span>,
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

const ProgramDemo = () => {
  return (
    <>
      <PageBanner title="Demo Papers" image={Banner4} />
      <article className="prose">
        <Table<ProgramPapersItem>
          rowKey="id"
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
