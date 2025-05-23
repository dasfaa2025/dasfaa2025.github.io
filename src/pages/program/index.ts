import _ProgramPapersData from "../../assets/papers_data.json";

export type ProgramPapersItem = {
  id: number;
  title: string;
  authors: string;
};

export type ProgramPapersDataType = {
  research: Record<string, ProgramPapersItem[]>;
  industry: Record<string, ProgramPapersItem[]>;
  demo: Record<string, ProgramPapersItem[]>;
};

const ProgramPapersData = _ProgramPapersData as ProgramPapersDataType;

const scrollWithOffset = (el: HTMLElement) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -96;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

export { ProgramPapersData, scrollWithOffset };
