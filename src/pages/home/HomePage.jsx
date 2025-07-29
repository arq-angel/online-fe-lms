import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CustomCarousel } from "../../components/cutomCarousel/CustomCarousel";
import { Recommendation } from "../../components/pageSection/Recommendation";
import { BestRead } from "../../components/pageSection/BestRead";
import { JustInSection } from "../../components/pageSection/JustInSection";

const HomePage = () => {
  return (
    <Container className="mb-4">
      <Row>
        <Col>
          {/* Hero section */}
          <CustomCarousel />

          {/* Just in section */}
          <JustInSection />

          {/* Best read section  */}
          <BestRead />

          {/* Recomendations section */}
          <Recommendation />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
