import React from "react";
import NavBarGuest from "../../components/NavBar/NavBarGuest";
import Footer from "../../components/Footer/Footer";
import Careers from "../../components/Careers/Careers";
import ContactContent from "../../components/Contact/ContactContent";

export default function Contact() {
  return (
    <>
      <NavBarGuest />
      <ContactContent />
      <Careers />
      <Footer />
    </>
  );
}
