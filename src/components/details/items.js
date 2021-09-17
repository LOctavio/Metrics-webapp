import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const Items = (props) => {
  const { region, confirmedCases } = props;
  return (
    <Row>
      <Col xs={7}>
        <span className="region">
          {region}
        </span>
      </Col>
      <Col>
        <span className="region-cases">
          {'Confirmed cases: '}
          {confirmedCases}
        </span>
      </Col>
    </Row>
  );
};

Items.propTypes = {
  region: PropTypes.string.isRequired,
  confirmedCases: PropTypes.number.isRequired,
};

export default Items;
