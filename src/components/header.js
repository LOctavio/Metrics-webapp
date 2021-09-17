import PropTypes from 'prop-types';

const Header = (props) => {
  const { title } = props;
  return (
    <header className="header">
      <button type="button">
        hi
      </button>
      <h2>{title}</h2>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
