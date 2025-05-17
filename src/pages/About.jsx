import React from "react";
import { AboutHero } from "../components/about-components/about-hero";
import { AboutHeading } from "../components/about-components/about-heading";
import Layout from "./Layout";
import Navbar from "../components/Navbar";
import AboutMission from "../components/about-components/about-mission";
import AboutTeam from "../components/about-components/about-team";
import AboutChooseUs from "../components/about-components/about-choose-us";
import Footer from "../components/Footer";
function AboutPage() {
  return (
    <main className="tertiary-bg">
      <AboutHero />
      <AboutHeading />
      <AboutMission />
      <AboutTeam />
      <AboutChooseUs />
      <Footer className={"tertiary-bg"} />
    </main>
  );
}
export default function About() {
  return (
    <Layout>
      <Navbar
        style={{
          position: "absolute",
          zIndex: "9999",
          color: "black",
          background: "linear-gradient(180deg, #bababa, transparent)",
          filter: "invert(1)",
        }}
      />
      <AboutPage />
    </Layout>
  );
}
