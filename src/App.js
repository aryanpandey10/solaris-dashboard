import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import "./App.css";
import BookingCard from "./components/BookingCard";
import InquiryCard from "./components/InquiryCard";
import InstallationCard from "./components/InstallationCard";
import InquirySource from "./components/InquirySource";
import InqVsBook from "./components/InqVsBook";
import AusState from "./components/AusState";
import InstallationPending from "./components/InstallationPending";
import PaymentPending from "./components/PaymentPending";
import TopPerformer from "./components/TopPerformer";
import AgentBooking from "./components/AgentBooking";
import TotalRevenue from "./components/TotalRevenue";
import TotalProfit from "./components/TotalProfit";

function App() {
  return (
    <Container fluid className="dashboard-container">
      {/* Header */}
      <header
        className="text-center p-3"
        style={{ backgroundColor: "#DFDFDE" }}
      >
        <img
          src="https://solaristech.com.au/img/logo-green.png"
          alt="Solaris Tech Logo"
          style={{ width: "180px" }} // Adjust the logo size and margin as needed
        />
      </header>

      {/* Main Section - Layout based on the provided image */}
      <Row className="main-row">
        {/* First Section (col-lg-4): Three cards stacked vertically */}
        <Col lg="4">
          <Card className="custom-card">
            <CardBody>
              <BookingCard />
            </CardBody>
          </Card>
          <Card className="custom-card">
            <CardBody>
              <InquiryCard />
            </CardBody>
          </Card>
          <Card className="custom-card">
            <CardBody>
              <InstallationCard />
            </CardBody>
          </Card>
        </Col>

        {/* Second Section (col-lg-5): Mixed layout */}
        <Col lg="5">
          <Row>
            <Col lg="6">
              <Card className="custom-card">
                <CardBody>
                  <InquirySource />
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="custom-card">
                <CardBody>
                  <InqVsBook />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <Card className="custom-card">
                <CardBody>
                  <AusState />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Card className="custom-card">
                <CardBody>
                  <InstallationPending pendingInstallations={42} />
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="custom-card">
                <CardBody>
                  <PaymentPending pendingPayment={1502} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>

        {/* Third Section (col-lg-3): Mixed layout */}
        <Col lg="3">
          <Row>
            <Col lg="12">
              <Card className="custom-card">
                <CardBody>
                  <TopPerformer />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <Card className="custom-card">
                <CardBody>
                  <AgentBooking />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Card className="custom-card">
                <CardBody>
                  <TotalRevenue revenueAmount={1502} />
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="custom-card">
                <CardBody>
                  <TotalProfit />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
