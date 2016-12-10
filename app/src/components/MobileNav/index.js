import React, { PropTypes, Component } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { AppHeader, SessionMenu } from 'components';
import Split from 'grommet-udacity/components/Split';
import Sidebar from 'grommet-udacity/components/Sidebar';
import Menu from 'grommet-udacity/components/Menu';
import Footer from 'grommet-udacity/components/Footer';
import { Link, IndexLink } from 'react-router';

class MobileNav extends Component {
  constructor() {
    super();
    this.renderMenu = this.renderMenu.bind(this);
  }
  renderMenu() {
    const {
      onToggleNav,
      navLinks,
      user,
    } = this.props;
    return (
      <Sidebar id="mobile-nav" size="medium" colorIndex="neutral-1" fixed seperator="right">
        <AppHeader onToggleNav={onToggleNav} />
        <Menu primary>
          <IndexLink
            to="/"
            activeClassName="active"
            onClick={() => onToggleNav()}
          >
            Home
          </IndexLink>
          {navLinks.map((link, i) =>
            <Link
              key={i}
              to={link.url}
              activeClassName="active"
              onClick={() => onToggleNav()}
            >
              {link.text}
            </Link>
          )}
        </Menu>
        <Footer
          justify="start"
          pad="medium"
          className={styles.navFooter}
        >
          {user ?
            <SessionMenu
              user={user}
            />
          :
            <Menu primary>
              <Link
                to="/login"
                activeClassName="active"
                onClick={() => onToggleNav()}
              >
                Login
              </Link>
              <Link
                to="/signup"
                activeClassName="active"
                onClick={() => onToggleNav()}
              >
                Signup
              </Link>
            </Menu>
          }
        </Footer>
      </Sidebar>
    );
  }
  render() {
    const {
      navActive,
      children,
    } = this.props;
    return (
      <Split
        flex={navActive ? '' : 'right'}
        priority={navActive ? 'left' : 'right'}
      >
        {navActive && this.renderMenu()}
        <div>
          {children}
        </div>
      </Split>
    );
  }
}

MobileNav.propTypes = {
  children: PropTypes.node.isRequired,
  navActive: PropTypes.bool.isRequired,
  onToggleNav: PropTypes.func.isRequired,
  navLinks: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};

export default cssModules(MobileNav, styles);
