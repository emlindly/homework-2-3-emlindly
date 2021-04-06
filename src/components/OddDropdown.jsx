import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

/* Provides Dropdown Button on Homepage Displaying Odd Numbered Pages */
export default function OddDropdown() {
  return (
    <>
      <div>
        <DropdownButton
          className="odd-button"
          id="dropdown-basic-button"
          title="Odd Pages"
        >
          <Dropdown.Item href="/page1">Page 1</Dropdown.Item>
          <br />
          <Dropdown.Item href="/page3">Page 3</Dropdown.Item>
        </DropdownButton>
      </div>
    </>
  );
}
