import React from "react";
import NavBarGuest from "../../components/NavBar/NavBarGuest";
import Footer from "../../components/Footer/Footer";
import Reviews from "../../components/Reviews/Reviews";
import Careers from "../../components/Careers/Careers";
import AboutContent from "../../components/AboutContent/AboutContent";

export default function About() {
  return (
    <>
      <NavBarGuest />
      <AboutContent />
      <Reviews />
      <Careers />
      <Footer />
    </>
  );
}
