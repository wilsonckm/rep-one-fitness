import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import NavBarUser from "../../components/NavBar/NavBarUser";

export default function Enter() {
  const { currentUser, logout } = useAuth();
  return (
    <>
      <NavBarUser />
      Welcome {currentUser.email}
    </>
  );
}
