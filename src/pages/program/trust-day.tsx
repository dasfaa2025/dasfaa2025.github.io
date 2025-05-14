import PageBanner from "../../components/PageBanner/index.tsx";
import { Banner4 } from "../../assets/index.ts";
import { BackTop, Table, TableProps } from "antd";
import _data from "../../assets/trust-day_data.json";
import LogoBLOCKSEC from "../../assets/logo-blocksec.svg";

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
    onCell: (_, index = 0) => ({
      style: {
        background: [0, 2, 4, 9].includes(index) ? "#FCE4D6" : "#BDD7EE",
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
          className="not-prose ant-table-cell-align-top"
          rowKey="time"
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
        />

        <blockquote>
          <div>
            <b>Trust Day workshop is supported by BlockSec.</b>
          </div>
          <a
            href="https://blocksec.com/"
            rel="noreferrer noopener"
            target="_blank"
            className="inline-block mt-2"
          >
            <img
              className="m-0 block h-10 max-h-10 min-h-10"
              alt="SMU"
              src={LogoBLOCKSEC}
            />
          </a>
        </blockquote>
      </article>
      <BackTop />
    </>
  );
};

export default ProgramTrustDay;
