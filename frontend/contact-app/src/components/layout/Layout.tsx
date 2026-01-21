import { FC } from "react";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Layout: FC = () => {
  return (
    <Container>
      <Col>
        <Row>
          <header>Header</header>
        </Row>
        <Row>
          <Outlet />
        </Row>
      </Col>
    </Container>
  );
};

export default Layout;
