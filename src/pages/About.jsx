import { useEffect } from "react";
import { AboutHero } from "../components/about-components/about-hero";
import { AboutHeading } from "../components/about-components/about-heading";
import Layout from "./Layout";
import Navbar from "../components/Navbar";
import AboutMission from "../components/about-components/about-mission";
import AboutTeam from "../components/about-components/about-team";
// import AboutChooseUs from "../components/about-components/about-choose-us";
import Footer from "../components/Footer";
import "locomotive-scroll/dist/locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";
function AboutPage() {
  // useEffect(() => {
  //   const panels = document.querySelectorAll(".about-panel");
  //   const outer = document.querySelectorAll(".outer");
  //   const inner = document.querySelectorAll(".inner");
  //   let currentIndex = -1;
  //   let animating;
  //   const wrap = gsap.utils.wrap(0, panels.length);

  //   gsap.set(outer, { yPercent: 100 });
  //   gsap.set(inner, { yPercent: -100 });

  //   const goToPanel = (index, direction) => {
  //     index = wrap(index);
  //     animating = true;
  //     let fromTop = direction === -1,
  //       dFactor = fromTop ? -1 : 1,
  //       tl = gsap.timeline({
  //         defaults: { duration: 1.25, ease: "power1.inOut" },
  //         onComplete: () => (animating = false),
  //       });
  //     gsap.set(panels[index], { autoAlpha: 1, zIndex: 1 });

  //     tl.fromTo(
  //       [outer[index], inner[index]],
  //       { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
  //       { yPercent: 0, marker: true },
  //       0
  //     );

  //     currentIndex = index;
  //     console.log(100 * dFactor);
  //   };

  //   Observer.create({
  //     type: "wheel,touch,pointer",
  //     wheelSpeed: -1,
  //     onDown: () => !animating && goToPanel(currentIndex - 1, -1),
  //     onUp: () => !animating && goToPanel(currentIndex + 1, 1),
  //     tolerance: 10,
  //     onEnter: () => (animating = false),
  //     onLeave: () => (animating = false),
  //   });

  //   goToPanel(0, 1);
  // }, []);
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector(".about-page"),
      // smooth: true,
      multiplier: 0.5, // 👈 slower scroll speed
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <main className="tertiary-bg about-page" data-scroll-container>
      <div id="about"></div>
      <div className="about-panel">
        <div className="outer">
          <div className="inner">
            <AboutHero />
          </div>
        </div>
      </div>
      <div className="about-panel" data-scroll data-scroll-speed="0.5">
        <div className="outer">
          <div className="inner">
            <AboutHeading />
          </div>
        </div>
      </div>
      <div className="about-panel">
        <div className="outer">
          <div className="inner">
            <AboutMission />
          </div>
        </div>
      </div>
      <div className="about-panel">
        <div className="outer">
          <div className="inner">
            <AboutTeam />
          </div>
        </div>
      </div>
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
        }}
      />
      <AboutPage />
    </Layout>
  );
}
