import React, { PropTypes } from 'react';
import Footer from 'grommet-udacity/components/Footer';
import Anchor from 'grommet-udacity/components/Anchor';

const AuthFormFooter = ({
  link,
  text,
}) => (
  <Footer align="center" justify="center">
    <span>{`${text}${"\u00a0"}`}</span>
    <Anchor href={link}>
      {`  ${link.charAt(1).toUpperCase()}${link.slice(2)}`}
    </Anchor>
  </Footer>
);

AuthFormFooter.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AuthFormFooter;
