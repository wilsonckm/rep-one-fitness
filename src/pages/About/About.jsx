import React from "react";
import NavBarGuest from "../../components/NavBar/NavBarGuest";
import Footer from "../../components/Footer/Footer";
import Reviews from "../../components/Reviews/Reviews";

export default function About() {
  return (
    <>
      <NavBarGuest />
      <div>About Page</div>
      <Reviews />
      <Footer />
    </>
  );
}
