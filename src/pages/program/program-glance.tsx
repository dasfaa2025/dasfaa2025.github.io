import PageBanner from "../../components/PageBanner";
import { Banner4 } from "../../assets";
import { HashLink } from "react-router-hash-link";
import { scrollWithOffset } from "./index.ts";
import { BackTop, Table, TableProps } from "antd";
import ProgramGlanceData from "../../assets/program_glance.json";

const CELL_YELLOW = "#ffffb8";
const CELL_GREEN = "#d9f7be";
const CELL_LIME = "#eaff8f";
const CELL_PURPLE = "#efdbff";
const CELL_MAGENTA = "#ffd6e7";
const CELL_BLUE = "#bae0ff";
const CELL_GEEK_BLUE = "#d6e4ff";
// const CELL_ORANGE = "#ffe7ba";
const CELL_RED = "#ffccc7";
const CELL_GREY = "#f5f5f5";
const CELL_CYAN = "#b5f5ec";

const columns1: TableProps["columns"] = [
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
    align: "center",
  },
  {
    title: "Empress 1",
    dataIndex: "empress_1",
    key: "empress_1",
    align: "center",
    onCell: (_, index = 0) => ({
      colSpan: index % 2 === 0 ? 3 : 1,
      style: {
        background: [2, 4, 6].includes(index)
          ? CELL_YELLOW
          : [1, 3, 5, 7].includes(index)
            ? CELL_GREEN
            : CELL_GREY,
      },
    }),
  },
  {
    title: "Empress 2",
    dataIndex: "empress_2",
    key: "empress_2",
    align: "center",
    onCell: (_, index = 0) => ({
      colSpan: index % 2 === 0 ? 0 : 1,
      style: {
        background: CELL_PURPLE,
      },
    }),
  },
  {
    title: "Empress 3",
    dataIndex: "empress_3",
    key: "empress_3",
    align: "center",
    onCell: (_, index = 0) => ({
      colSpan: index % 2 === 0 ? 0 : 1,
      style: {
        background: CELL_MAGENTA,
      },
    }),
  },
];

const columns2: TableProps["columns"] = [
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
    align: "center",
    width: 140,
  },
  {
    title: "Empress Hall 4 & 5",
    dataIndex: "empress_hall",
    key: "empress_hall",
    align: "center",
    onCell: (_, index = 0) => ({
      colSpan: [0, 1, 2, 3, 5, 7, 9, 10].includes(index) ? 6 : 1,
      style: {
        background: [
          CELL_GREY,
          CELL_BLUE,
          CELL_GREEN,
          CELL_YELLOW,
          CELL_PURPLE,
          CELL_YELLOW,
          "none",
          CELL_YELLOW,
          "none",
          CELL_MAGENTA,
          CELL_GEEK_BLUE,
        ][index],
      },
    }),
  },
  {
    title: "Empress 3",
    dataIndex: "empress_3",
    key: "empress_3",
    align: "center",
    onCell: (_, index = 0) => ({
      colSpan: [0, 1, 2, 3, 5, 7, 9, 10].includes(index) ? 0 : 1,
      style: {
        background: index === 4 ? CELL_PURPLE : "none",
      },
    }),
  },
  {
    title: "Empress 1",
    dataIndex: "empress_1",
    key: "empress_1",
    align: "center",
    onCell: (_, index = 0) => ({
      colSpan: [0, 1, 2, 3, 5, 7, 9, 10].includes(index) ? 0 : 1,
      style: {
        background: CELL_PURPLE,
      },
    }),
  },
  {
    title: "Empress 2",
    dataIndex: "empress_2",
    key: "empress_2",
    align: "center",
    onCell: (_, index = 0) => ({
      colSpan: [0, 1, 2, 3, 5, 7, 9, 10].includes(index) ? 0 : 1,
      style: {
        background: CELL_PURPLE,
      },
    }),
  },
  {
    title: "Istana 2 & 3",
    dataIndex: "istana",
    key: "istana",
    align: "center",
    onCell: (_, index = 0) => ({
      colSpan: [0, 1, 2, 3, 5, 7, 9, 10].includes(index) ? 0 : 1,
      style: {
        background: index === 6 ? CELL_RED : CELL_PURPLE,
      },
    }),
  },
  {
    title: "Connaught",
    dataIndex: "connaught",
    key: "connaught",
    align: "center",
    onCell: (_, index = 0) => ({
      colSpan: [0, 1, 2, 3, 5, 7, 9, 10].includes(index) ? 0 : 1,
      style: {
        background: index === 4 ? "none" : CELL_PURPLE,
      },
    }),
  },
];

const columns3: TableProps["columns"] = [
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
    align: "center",
    width: 140,
  },
  {
    title: "Empress Hall 4 & 5",
    dataIndex: "empress_hall",
    key: "empress_hall",
    align: "center",
    // width: 140,
    render: (_text) => (
      <div
        className="text-center"
        dangerouslySetInnerHTML={{ __html: _text }}
      />
    ),
    onCell: (_, index = 0) => ({
      colSpan: [0, 1, 2, 3, 5, 7, 9].includes(index) ? 6 : 1,
      style: {
        background: [
          CELL_GREY,
          CELL_BLUE,
          CELL_GREEN,
          CELL_YELLOW,
          CELL_RED,
          CELL_YELLOW,
          CELL_PURPLE,
          CELL_YELLOW,
          "none",
          CELL_GEEK_BLUE,
        ][index],
      },
    }),
  },
  {
    title: "Empress 3",
    dataIndex: "empress_3",
    key: "empress_3",
    align: "center",
    render: (_text) => (
      <div
        className="text-center"
        dangerouslySetInnerHTML={{ __html: _text }}
      />
    ),
    onCell: (_, index = 0) => ({
      colSpan: [0, 1, 2, 3, 5, 7, 9].includes(index) ? 0 : 1,
      style: {
        background: index === 8 ? "none" : CELL_PURPLE,
      },
    }),
  },
  {
    title: "Empress 1",
    dataIndex: "empress_1",
    key: "empress_1",
    align: "center",
    render: (_text) => (
      <div
        className="text-center"
        dangerouslySetInnerHTML={{ __html: _text }}
      />
    ),
    onCell: (_, index = 0) => ({
      colSpan: [0, 1, 2, 3, 5, 7, 9].includes(index) ? 0 : 1,
      style: {
        background: CELL_PURPLE,
      },
    }),
  },
  {
    title: "Empress 2",
    dataIndex: "empress_2",
    key: "empress_2",
    align: "center",
    render: (_text) => (
      <div
        className="text-center"
        dangerouslySetInnerHTML={{ __html: _text }}
      />
    ),
    onCell: (_, index = 0) => ({
      colSpan: [0, 1, 2, 3, 5, 7, 9].includes(index) ? 0 : 1,
      style: {
        background: index === 6 ? "none" : CELL_PURPLE,
      },
    }),
  },
  {
    title: "Istana 2 & 3",
    dataIndex: "istana",
    key: "istana",
    align: "center",
    render: (_text) => (
      <div
        className="text-center"
        dangerouslySetInnerHTML={{ __html: _text }}
      />
    ),
    onCell: (_, index = 0) => ({
      colSpan: [0, 1, 2, 3, 5, 7, 9].includes(index) ? 0 : 1,
      style: {
        background: CELL_PURPLE,
      },
    }),
  },
  {
    title: "Connaught Room",
    dataIndex: "connaught",
    key: "connaught",
    align: "center",
    onCell: (_, index = 0) => ({
      colSpan: [0, 1, 2, 3, 5, 7, 9].includes(index) ? 0 : 1,
      style: {
        background: index === 8 ? CELL_PURPLE : "none",
      },
    }),
  },
];

const columns4: TableProps["columns"] = [
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
    align: "center",
    width: 140,
  },
  {
    title: "Empress Hall 4 & 5",
    dataIndex: "empress_hall",
    key: "empress_hall",
    align: "center",
    onCell: (_, index = 0) => ({
      colSpan: [0, 1, 2, 3, 5, 7].includes(index) ? 6 : 1,
      style: {
        background: [
          CELL_GREY,
          CELL_BLUE,
          CELL_GREEN,
          CELL_YELLOW,
          CELL_CYAN,
          CELL_YELLOW,
          CELL_LIME,
          CELL_YELLOW,
          CELL_LIME,
        ][index],
      },
    }),
  },
  {
    title: "Empress 3",
    dataIndex: "empress_3",
    key: "empress_3",
    align: "center",
    onCell: (_, index = 0) => ({
      colSpan: [0, 1, 2, 3, 5, 7].includes(index) ? 0 : 1,
      style: {
        background: index === 4 ? CELL_CYAN : CELL_PURPLE,
      },
    }),
  },
  {
    title: "Empress 1",
    dataIndex: "empress_1",
    key: "empress_1",
    align: "center",
    onCell: (_, index = 0) => ({
      colSpan: [0, 1, 2, 3, 5, 7].includes(index) ? 0 : 1,
      style: {
        background: index === 6 ? CELL_PURPLE : index === 8 ? CELL_RED : "none",
      },
    }),
  },
  {
    title: "Empress 2",
    dataIndex: "empress_2",
    key: "empress_2",
    align: "center",
    onCell: (_, index = 0) => ({
      colSpan: [0, 1, 2, 3, 5, 7].includes(index) ? 0 : 1,
      style: {
        background: index === 4 ? CELL_CYAN : "none",
      },
    }),
  },
];

const ProgramGlance = () => {
  return (
    <>
      <PageBanner title="Program at a Glance" image={Banner4} />
      <article className="prose w-full max-w-[90ch]">
        <ul>
          <li>
            <HashLink
              smooth={true}
              className="text-[#936bff]"
              to="#2025-05-26"
              scroll={(el) => scrollWithOffset(el)}
            >
              Monday 26 May 2025
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth={true}
              className="text-[#936bff]"
              to="#2025-05-27"
              scroll={(el) => scrollWithOffset(el)}
            >
              Tuesday 27 May 2025
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth={true}
              className="text-[#936bff]"
              to="#2025-05-28"
              scroll={(el) => scrollWithOffset(el)}
            >
              Wednesday 28 May 2025
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth={true}
              className="text-[#936bff]"
              to="#2025-05-29"
              scroll={(el) => scrollWithOffset(el)}
            >
              Thursday 29 May 2025
            </HashLink>
          </li>
        </ul>

        <h2 id="2025-05-26">Monday 26 May 2025</h2>
        <Table
          className="not-prose"
          rowKey="time"
          columns={columns1}
          dataSource={ProgramGlanceData[0].data}
          pagination={false}
          bordered
        />

        <h2 id="2025-05-27">Tuesday 27 May 2025</h2>
        <Table
          className="not-prose"
          rowKey="time"
          columns={columns2}
          dataSource={ProgramGlanceData[1].data}
          pagination={false}
          bordered
        />

        <h2 id="2025-05-28">Wednesday 28 May 2025</h2>
        <Table
          className="not-prose"
          rowKey="time"
          columns={columns3}
          dataSource={ProgramGlanceData[2].data}
          pagination={false}
          bordered
        />

        <h2 id="2025-05-29">Thursday 29 May 2025</h2>
        <Table
          className="not-prose"
          rowKey="time"
          columns={columns4}
          dataSource={ProgramGlanceData[3].data}
          pagination={false}
          bordered
        />
      </article>
      <BackTop />
    </>
  );
};

export default ProgramGlance;
