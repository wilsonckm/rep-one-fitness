import React from "react";
import NavBarGuest from "../../components/NavBar/NavBarGuest";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import HeroTitle from "../../components/HeroTitle.jsx/HeroTitle";
import HowItWorks from "../../components/HowItWorks/HowItWorks";

export default function Home() {
  return (
    <>
      <NavBarGuest />
      <HeroTitle />
      <HeroBanner />
      <HowItWorks />
      <Footer />
    </>
  );
}
