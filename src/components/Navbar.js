import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  return (
    <nav>
      <span>
        <FontAwesomeIcon icon={faEarthAmericas} size="2x" color="#FFFFFF" />
      </span>
      <span>my travel journal.</span>
    </nav>
  );
}
