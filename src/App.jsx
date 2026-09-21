import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Audience from "./components/Audience";
import Curriculum from "./components/Curriculum";
import Mentor from "./components/Mentor";
import SeatIncludes from "./components/SeatIncludes";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import RiskFree from "./components/RiskFree";
import VIPPage from "./pages/Second_vip";

function HomePage() {
  return (
    <>
      <Hero />
      <Audience />
      <Curriculum />
      <Mentor />
      <SeatIncludes />
      <FAQ />
      <FinalCTA />
      <RiskFree />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vip" element={<VIPPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;