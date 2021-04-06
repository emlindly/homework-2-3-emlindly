import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

/* Provides Dropdown Button on Homepage Displaying Even Numbered Pages */
export default function EvenDropdown() {
  return (
    <>
      <div>
        <DropdownButton
          className="even-button"
          id="dropdown-basic-button"
          title="Even Pages"
        >
          <Dropdown.Item href="/page2">Page 2</Dropdown.Item>
          <br />
          <Dropdown.Item href="/page4">Page 4</Dropdown.Item>
        </DropdownButton>
      </div>
    </>
  );
}
