// --- Dependancys
import React from 'react';
import { SyncOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

export default function Icons() {
  return (
    <Row>
      <Col>
        <div className="icons-list">
          <SyncOutlined spin />
        </div>
      </Col>
    </Row>
  );
}
