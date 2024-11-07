import { HeroSection } from "@/components/HeroSection";
import React from "react";
import heroimage from "../assets/heroimg.jpg";
import { ArticleSection } from "@/components/ArticleSection";
function Home() {
  return (
    <>
      <HeroSection heroimage={heroimage} />
      <ArticleSection />
    </>
  );
}

export default Home;
