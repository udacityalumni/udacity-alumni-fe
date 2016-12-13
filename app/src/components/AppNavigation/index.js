import React, { PropTypes } from 'react';
import { MobileNav, LogoImage, Navbar } from 'components';
import Title from 'grommet-udacity/components/Title';
import Anchor from 'grommet-udacity/components/Anchor';
import MenuIcon from 'grommet-udacity/components/icons/base/Menu';
import { StyledHeader } from './styles';

const AppNavigation = ({
  isMobile,
  children,
  user,
  handleSearch,
  navIsActive,
  navLinks,
  onToggleNav,
  pathname,
}) => (
  <div>
    {!isMobile &&
      <Navbar
        pathname={pathname}
        user={user}
        onSearch={handleSearch}
      />
    }
    {!isMobile && children}
    {isMobile &&
      <MobileNav
        pathname={pathname}
        user={user}
        navActive={navIsActive}
        onToggleNav={onToggleNav}
        navLinks={navLinks}
      >
        <StyledHeader
          direction="row"
          justify="between"
          large
          pad={{ horizontal: 'medium', between: 'small' }}
        >
          {!navIsActive &&
            <Title a11yTitle="Go Home">
              <Anchor href="/">
                <LogoImage />
              </Anchor>
            </Title>
          }
          <Title s
            tyle={navIsActive && { display: 'none' }}
            onClick={onToggleNav}
            a11yTitle="Open Menu Right"
          >
            <MenuIcon
              colorIndex="brand"
              size="medium"
              type="control"
            />
          </Title>
        </StyledHeader>
        {children}
      </MobileNav>
    }
  </div>
);

AppNavigation.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  user: PropTypes.object.isRequired,
  handleSearch: PropTypes.func.isRequired,
  navIsActive: PropTypes.bool.isRequired,
  navLinks: PropTypes.array.isRequired,
  onToggleNav: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default AppNavigation;
