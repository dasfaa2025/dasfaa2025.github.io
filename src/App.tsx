import "./App.css";
import Header from "./components/Header";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home.tsx";
import SteeringCommittee from "./pages/organization/steering-committee.tsx";
import OrganizingCommittee from "./pages/organization/organizing-committee.tsx";
import ResearchPapers from "./pages/calls/research-papers.tsx";
import IndustryPapers from "./pages/calls/industry-papers.tsx";
import Workshops from "./pages/calls/workshops.tsx";
import DemoPapers from "./pages/calls/demo-papers.tsx";
import TutorialProposal from "./pages/calls/tutorial-proposal.tsx";
import PhDConsortiumPaper from "./pages/calls/hpd-consortium-paper.tsx";
import ImportantDates from "./pages/important-dates.tsx";
import ProgramTutorials from "./pages/program/tutorials.tsx";
import ProgramResearch from "./pages/program/research.tsx";
import ProgramIndustrial from "./pages/program/industrial.tsx";
import ProgramDemo from "./pages/program/demo.tsx";
import ProgramKeynotes from "./pages/program/keynotes.tsx";
import HotelInformation from "./pages/participate/hotel-information.tsx";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/organization"
            element={<Navigate to="/organization/steering-committee" replace />}
          />
          <Route
            path="/organization/steering-committee"
            element={<SteeringCommittee />}
          />
          <Route
            path="/organization/organizing-committee"
            element={<OrganizingCommittee />}
          />
          <Route
            path="/calls"
            element={<Navigate to="/calls/research-papers" replace />}
          />
          <Route path="/calls/research-papers" element={<ResearchPapers />} />
          <Route path="/calls/industry-papers" element={<IndustryPapers />} />
          <Route path="/calls/workshops" element={<Workshops />} />
          <Route path="/calls/demo-papers" element={<DemoPapers />} />
          <Route
            path="/calls/tutorial-proposal"
            element={<TutorialProposal />}
          />
          <Route
            path="/calls/hpd-consortium-paper"
            element={<PhDConsortiumPaper />}
          />
          <Route path="/program/keynotes" element={<ProgramKeynotes />} />
          <Route path="/program/tutorials" element={<ProgramTutorials />} />
          <Route path="/program/research" element={<ProgramResearch />} />
          <Route path="/program/industrial" element={<ProgramIndustrial />} />
          <Route path="/program/demo" element={<ProgramDemo />} />
          <Route path="/important-dates" element={<ImportantDates />} />
          <Route
            path="/participate/hotel-information"
            element={<HotelInformation />}
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
