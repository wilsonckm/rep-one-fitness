import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function Enter() {
  const { currentUser, logout } = useAuth();
  return <>Welcome {currentUser.email}</>;
}
