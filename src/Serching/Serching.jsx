import { Row, Col, Button } from "antd";
import SerchingImputs from "./SerchingImputs";

export default function Serching() {
  return (
    <Row justify="center">
      <Col span={24}>
        <div className="Serching">
          <h7>Your Website Score?</h7>
          <SerchingImputs />
          <Button type="primary">Check Up!</Button>
        </div>
      </Col>
    </Row>
  );
}
