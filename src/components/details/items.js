import PropTypes from 'prop-types';

const Items = (props) => {
  const { region, confirmedCases } = props;
  return (
    <li>
      <p>
        {region}
        {' - '}
        {confirmedCases}
      </p>
    </li>
  );
};

Items.propTypes = {
  region: PropTypes.string.isRequired,
  confirmedCases: PropTypes.number.isRequired,
};

export default Items;
