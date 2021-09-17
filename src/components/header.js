import PropTypes from 'prop-types';
import { BsFillMicFill, BsFillGearFill, BsChevronLeft } from 'react-icons/bs';
import { Container, Row, Col } from 'react-bootstrap';

const Header = (props) => {
  const { title } = props;
  return (
    <Container className="header">
      <Row className="justify-content-md-center">
        <Col className="d-flex align-items-center">
          <button type="button" className="back-button">
            <BsChevronLeft />
          </button>
        </Col>
        <Col xs={6} className="title">
          <span>{title}</span>
        </Col>
        <Col className="d-flex justify-content-end align-items-center icons">
          <Col>
            <BsFillMicFill />
          </Col>
          <Col>
            <BsFillGearFill />
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
