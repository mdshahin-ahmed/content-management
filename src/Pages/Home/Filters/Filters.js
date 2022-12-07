import React from "react";
import { Button } from "react-bootstrap";
import "./Filters.css";

const Filters = () => {
  return (
    <div className="filtersWrap container my-5 text-end">
      <Button className="mx-2">Last Upload</Button>
      <Button className="mx-2">First Upload</Button>
    </div>
  );
};

export default Filters;
