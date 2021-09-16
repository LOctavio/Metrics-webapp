import PropTypes from 'prop-types';

const Items = (props) => {
  const { country, confirmedCases } = props;
  return (
    <li>
      <p>
        {country}
        {' - '}
        {confirmedCases}
      </p>
    </li>
  );
};

Items.propTypes = {
  country: PropTypes.string.isRequired,
  confirmedCases: PropTypes.number.isRequired,
};

export default Items;
