import { ReactNode } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

interface AuthLayoutProps {
  title?: string;
  subtitle?: ReactNode;
  children: ReactNode;
}

const AuthLayout = ({ title, subtitle, children }: AuthLayoutProps) => {
  return (
    <Container
      fluid
      className="vh-100 d-flex align-items-center justify-content-center"
    >
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <Card className="shadow-sm border-0 p-4">
            <Card.Body>
              <div className="text-center mb-4">
                {title && <h4 className="fw-bold">{title}</h4>}
                {subtitle && (
                  <small className="text-muted d-block">{subtitle}</small>
                )}
              </div>

              {children}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthLayout;
