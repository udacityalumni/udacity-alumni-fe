import React from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Footer from 'grommet-udacity/components/Footer';
import Box from 'grommet-udacity/components/Box';
import Heading from 'grommet-udacity/components/Heading';
import Anchor from 'grommet-udacity/components/Anchor';
import Menu from 'grommet-udacity/components/Menu';
import SocialFacebookOptionIcon from 'grommet-udacity/components/icons/base/SocialFacebook';
import SocialGooglePlusIcon from 'grommet-udacity/components/icons/base/SocialGoogle';
import SocialLinkedinOptionIcon from 'grommet-udacity/components/icons/base/SocialLinkedin';
import SocialTwitterIcon from 'grommet-udacity/components/icons/base/SocialTwitter';
import ComplianceIcon from 'grommet-udacity/components/icons/base/Compliance';
import ShieldIcon from 'grommet-udacity/components/icons/base/Shield';
import GroupIcon from 'grommet-udacity/components/icons/base/Group';
import HelpIcon from 'grommet-udacity/components/icons/base/Help';

const socialIcons = [
  {
    id: 0,
    type: 'twitter',
    url: 'https://twitter.com/udacity',
  },
  {
    id: 1,
    type: 'facebook',
    url: 'https://www.facebook.com/Udacity',
  },
  {
    id: 2,
    type: 'linkedin',
    url: 'https://www.linkedin.com/company/udacity',
  },
  {
    id: 3,
    type: 'google',
    url: 'https://plus.google.com/+Udacity',
  },
];

const SocialIcon = ({
  type,
}) => (
  <span className={styles.socialIcon}>
    {(() => { // eslint-disable-line
      switch (type) {
        case 'twitter':
          return <SocialTwitterIcon size="small" />;
        case 'facebook':
          return <SocialFacebookOptionIcon size="small" />;
        case 'linkedin':
          return <SocialLinkedinOptionIcon size="small" />;
        case 'google':
          return <SocialGooglePlusIcon size="small" />;
        default:
          break;
      }
    })()}
  </span>
);

const AppFooter = () => (
  <Footer className={styles.appFooter}>
    <Box
      direction="column"
      align="center"
      pad={{ vertical: 'large' }}
      responsive
      className={styles.flexOne}
    >
      <Heading tag="h3">
      <Anchor href="http://www.udacity.com">
        Udacity Alumni Web App
      </Anchor>
      </Heading>
      <Heading tag="h5">
        Made with <span className={styles.heart}>♥️</span> by
        <Anchor href="http://www.udacity.com">
          {' Udacity Alumni'}
        </Anchor>
      </Heading>
      <Box className={styles.footerAnchor} direction="row">
        <Anchor
          href="/members"
          label="Our Members"
          icon={<GroupIcon />}
          colorIndex="brand"
        />
        <span className={styles.seperator}>{'  |  '}</span>
        <Anchor
          href="/about"
          label="About Us"
          icon={<HelpIcon />}
          colorIndex="brand"
        />
      </Box>
      <Box className={styles.footerAnchor} direction="row">
        <Anchor
          href="/terms"
          label="Terms of Service"
          icon={<ComplianceIcon />}
          colorIndex="brand"
        />
        <span className={styles.seperator}>{'  |  '}</span>
        <Anchor
          href="/privacy"
          label="Privacy Policy"
          icon={<ShieldIcon />}
          colorIndex="brand"
        />
      </Box>
      <Menu
        inline
        responsive={false}
        closeOnClick={false}
        direction="row"
      >
        {socialIcons.map((icon, index) =>
          <Anchor href={icon.url} key={index}>
            <SocialIcon type={icon.type} />
          </Anchor>
        )}
      </Menu>
    </Box>
  </Footer>
);

export default cssModules(AppFooter, styles);
