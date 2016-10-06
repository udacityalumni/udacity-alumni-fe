import React, { PropTypes, Component } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Split from 'grommet-udacity/components/Split';
import Sidebar from 'grommet-udacity/components/Sidebar';
import Menu from 'grommet-udacity/components/Menu';
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
    } = this.props;
    return (
      <Sidebar size="medium" colorIndex="neutral-1" fixed seperator="right">
        {/* <AppHeader {...this.props} /> */}
        <Menu primary>
          <IndexLink
            to="/home"
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
      </Sidebar>
    );
  }
  render() {
    const {
      navActive,
      children,
    } = this.props;
    return (
      <Split flex={navActive ? '' : 'right'} priority={navActive ? 'left' : 'right'}>
        {navActive && this.renderMenu()}
        <main>
          {children}
        </main>
      </Split>
    );
  }
}

MobileNav.propTypes = {
  children: PropTypes.node.isRequired,
  navActive: PropTypes.bool.isRequired,
  onToggleNav: PropTypes.func.isRequired,
  navLinks: PropTypes.array.isRequired,
};

export default cssModules(MobileNav, styles);
