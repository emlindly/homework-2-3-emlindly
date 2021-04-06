import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

/* Provides Dropdown Button on Homepage Displaying All Pages */
export default function AllDropdown() {
  return (
    <>
      <div>
        <DropdownButton
          className="all-button"
          id="dropdown-basic-button"
          title="All Pages"
        >
          <Dropdown.Item href="/page1">Page 1</Dropdown.Item>
          <br />
          <Dropdown.Item href="/page2">Page 2</Dropdown.Item>
          <br />
          <Dropdown.Item href="/page3">Page 3</Dropdown.Item>
          <br />
          <Dropdown.Item href="/page4">Page 4</Dropdown.Item>
        </DropdownButton>
      </div>
    </>
  );
}
