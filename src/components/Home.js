import React from "react";
import Hero from "./Hero";
import Section from "./Section";
import section from "../section";
import LearnMore from "./LearnMore";
import Awards from "./Awards";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      {section.map((item) => (
        <Section text={item.text} image={item.image} button={item.button} />
      ))}
      <LearnMore />
      <Awards />
      <Contact />
    </div>
  );
};

export default Home;
