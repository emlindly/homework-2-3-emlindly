import React from "react";
import AllButton from "../components/AllDropdown";
import EvenButton from "../components/EvenDropdown";
import OddButton from "../components/OddDropdown";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

/* Homepage Which Displays All Three Button Dropdowns */
export default function Homepage() {
  return (
    <>
      <div>
        <h1>hello, this is the homepage</h1>
        <Button className="page-button"><Link to="/page1">Page 1</Link></Button>
        <Button className="page-button"><Link to="/page2">Page 2</Link></Button>
        <Button className="page-button"><Link to="/page3">Page 3</Link></Button>
        <Button className="page-button"><Link to="/page4">Page 4</Link></Button>
        <AllButton />
        <EvenButton />
        <OddButton />
      </div>
    </>
  );
}
