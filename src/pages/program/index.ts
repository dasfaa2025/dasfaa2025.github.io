import _ProgramPapersData from "../../assets/papers_data.json";

export type ProgramPapersItem = {
  title: string;
  authors: string;
};

type ProgramPapersItemStatus = "Long Papers" | "Short Papers" | "Accept";

export type ProgramPapersDataType = {
  research: Record<ProgramPapersItemStatus, ProgramPapersItem[]>;
  industry: Record<ProgramPapersItemStatus, ProgramPapersItem[]>;
  demo: Record<ProgramPapersItemStatus, ProgramPapersItem[]>;
};

const ProgramPapersData = _ProgramPapersData as ProgramPapersDataType;

const scrollWithOffset = (el: HTMLElement) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -96;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

export { ProgramPapersData, scrollWithOffset };
