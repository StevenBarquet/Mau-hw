import { Input, Row, Col } from "antd";

export default function SerchingImputs() {
  return (
    <Row>
      <Col>
        <Input.Group compact>
          <Input
            style={{ width: "70%" }}
            placeholder="Type in your Website URL"
          />
          <Input style={{ width: "30%" }} placeholder="Your Email" />
        </Input.Group>
      </Col>
    </Row>
  );
}
