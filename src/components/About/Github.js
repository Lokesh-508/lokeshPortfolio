import React from "react";
import LeetcodeCalender from "react-leetcode-calendar";
import { Row } from "react-bootstrap";

function leetcode() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <LeetcodeCalender
        username="20311A0563"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default leetcode;
