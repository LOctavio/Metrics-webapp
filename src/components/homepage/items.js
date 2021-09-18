import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const Items = (props) => {
  const { country, confirmedCases, visibility } = props;
  const history = useHistory();
  return (
    <button type="button" onClick={() => history.push(`/details/${country}`)} className={`${visibility ? '' : 'hide'}`}>
      <p>
        {country}
      </p>
      <p>
        {'Confirmed cases: '}
        {confirmedCases}
      </p>
    </button>
  );
};

Items.defaultProps = {
  visibility: true,
};

Items.propTypes = {
  country: PropTypes.string.isRequired,
  confirmedCases: PropTypes.number.isRequired,
  visibility: PropTypes.bool,
};

export default Items;
