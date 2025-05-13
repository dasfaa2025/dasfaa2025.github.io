import PageBanner from "../../components/PageBanner/index.tsx";
import { Banner4 } from "../../assets/index.ts";
import { BackTop, Table, TableProps } from "antd";
import _data from "../../assets/trust-day_data.json";
interface TrustDayItem {
  time: string;
  title: string;
}

const data: TrustDayItem[] = _data as TrustDayItem[];

const columns: TableProps<TrustDayItem>["columns"] = [
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
    width: 200,
    render: (_text, _record) => (
      <div className="whitespace-pre-wrap">{_record.time}</div>
    ),
    onCell: () => ({
      style: {
        background: "#FCE4D6",
      },
    }),
  },
  {
    title: "Content",
    key: "content",
    render: (_text, _record) => (
      <div dangerouslySetInnerHTML={{ __html: _record.title }}></div>
    ),
    onCell: (_, index) => ({
      style: {
        background:
          index === 0
            ? "#FCE4D6"
            : index === data.length - 1
              ? "#F8CDAE"
              : "#BDD7EE",
      },
    }),
  },
];

const ProgramTrustDay = () => {
  return (
    <>
      <PageBanner title="Trust Day" image={Banner4} />
      <article className="prose w-full">
        <h2>Trust Day</h2>
        <h4>Date</h4>
        <p>Thursday 29 May 2025</p>
        {/*<h4>Place</h4>*/}
        {/*<p>Empress 1</p>*/}
        <h4>Program</h4>
        <Table<TrustDayItem>
          className="not-prose"
          rowKey="time"
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
        />
      </article>
      <BackTop />
    </>
  );
};

export default ProgramTrustDay;
