import React from "react";

import MainLayout from "../../components/MainLayout";
import Articles from "./container/Articles";
import CTA from "./container/CTA";
import Hero from "./container/Hero";
import AIAssistant from '../../components/home/AIAssistant';
const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <AIAssistant/>
      <Articles />
      <CTA />
    </MainLayout>
  );
};

export default HomePage;