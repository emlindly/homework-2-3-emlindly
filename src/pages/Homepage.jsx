import React from "react";
import AllButton from "../components/AllDropdown";
import EvenButton from "../components/EvenDropdown";
import OddButton from "../components/OddDropdown";

/* Homepage Which Displays All Three Button Dropdowns */
export default function Homepage() {
  return (
    <>
      <div>
        <h1>hello, this is the homepage</h1>
        <AllButton />
        <EvenButton />
        <OddButton />
      </div>
    </>
  );
}
