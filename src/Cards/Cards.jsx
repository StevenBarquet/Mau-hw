import React from 'react';
import {
  Card, Avatar, Button, Row, Col,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default function Cards() {
  return (
    <Row justify="center">
      <Col span={8}>
        <Card
          style={{ width: 300 }}
          actions={[
            <Button type="primary" icon={<SearchOutlined />}>
              Website Desing
            </Button>,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://www.coolweb.design/wp-content/uploads/2018/06/icon-01.png" />
            }
            title="Custom Website Desing"
            description="You'll get a modern website that delivers excellent results for bussines"
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card
          style={{ width: 300 }}
          actions={[
            <Button type="primary" icon={<SearchOutlined />}>
              Website Desing
            </Button>,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://www.coolweb.design/wp-content/uploads/2018/06/Rezdy-icon.jpg" />
            }
            title="Online Tour Bookings"
            description="If you're a tour bussines and not selling your activities online, you're missing out on a ton of easy business"
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card
          style={{ width: 300 }}
          actions={[
            <Button type="primary" icon={<SearchOutlined />}>
              Website Desing
            </Button>,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://www.coolweb.design/wp-content/uploads/2018/06/SSL-2.png" />
            }
            title="Secure SSL Website"
            description="Did you know if your website is not secure with the green padlock then Google and your customers will think it's not safe to visit,"
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card
          style={{ width: 300 }}
          actions={[
            <Button type="primary" icon={<SearchOutlined />}>
              Website Desing
            </Button>,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://www.coolweb.design/wp-content/uploads/2016/12/request.svg" />
            }
            title="Google Analytics"
            description="To help understand how your website is doing you need a good stats report sent out every month."
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card
          style={{ width: 300 }}
          actions={[
            <Button type="primary" icon={<SearchOutlined />}>
              Website Desing
            </Button>,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://www.coolweb.design/wp-content/uploads/2016/11/1456956050_001_036_hot_air_baloon.svg" />
            }
            title="Custom Logo Desing"
            description="Looking to upgrade or need a brand new image? You'll get 3 design options and up to 5 revisions. You own the files."
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card
          style={{ width: 300 }}
          actions={[
            <Button type="primary" icon={<SearchOutlined />}>
              Website Desing
            </Button>,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://www.coolweb.design/wp-content/uploads/2018/06/Dollar-sign.png" />
            }
            title="Secure Shopping"
            description="This is a simple way to increase sales in your business if you aren't selling online."
          />
        </Card>
      </Col>
    </Row>
  );
}
