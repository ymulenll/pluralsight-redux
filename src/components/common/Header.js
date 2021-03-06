import React from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import PropTypes from 'prop-types';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {"  |  "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {"  |  "}
      <Link to="/about" activeClassName="active">About</Link>
      {loading && <LoadingDots interval={100} dots={10} />}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool
};

export default Header;