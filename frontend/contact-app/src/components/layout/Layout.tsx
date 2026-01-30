import { FC } from "react";
import { Outlet } from "react-router";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Header from "../header/Header";

const Layout: FC = () => {
  return (
    <Container fluid>
      <Col>
        <Row>
          <Header />
        </Row>
        <Row>
          <Outlet />
        </Row>
      </Col>
    </Container>
  );
};

export default Layout;
