//--- Dependancys
import React from "react";
import { Button, Menu, Dropdown } from "antd";
import { Row, Col } from "antd";
import { DownOutlined } from "@ant-design/icons";
//----Components
// import Iconitos from "../Icons/Iconitos"

const menu = (
  <Menu>
    <Menu.ItemGroup title="List of products">
      <Menu.Item>Web Hosting</Menu.Item>
      <Menu.Item>Logo Desing</Menu.Item>
      <Menu.Item>Website Desing</Menu.Item>
    </Menu.ItemGroup>
  </Menu>
);

const menu2 = (
  <Menu>
    <Menu.ItemGroup title="List of services">
      <Menu.Item>Web Desing</Menu.Item>
      <Menu.Item>Online Tour Bookings</Menu.Item>
      <Menu.Item>logo & Business Card Desing</Menu.Item>
    </Menu.ItemGroup>
  </Menu>
);

export default function Navegacion() {
  return (
    <Row justify="end">
      <Col>
        <img
          src="//www.coolweb.design/wp-content/uploads/2018/06/Cool-Web-Design-01-1-e1528272124388.png"
          alt="Cool"
        />
      </Col>
      <Col>
        <Button type="text">Home</Button>
        <Dropdown overlay={menu2}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Services <DownOutlined />
          </a>
        </Dropdown>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Shop <DownOutlined />
          </a>
        </Dropdown>
        <Button type="text">Case Studies</Button>
        <Button type="text">Our Agency</Button>
        <Button type="text">contacts</Button>
      </Col>
      {/* <Row>
     <Col><Iconitos /></Col>
      </Row>     */}
    </Row>
  );
}
