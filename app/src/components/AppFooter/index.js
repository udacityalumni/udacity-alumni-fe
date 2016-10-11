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

const socialIcons = [
  {
    id: 0,
    type: 'twitter',
    url: 'http://twitter.com',
  },
  {
    id: 1,
    type: 'facebook',
    url: 'http://facebook.com',
  },
  {
    id: 2,
    type: 'google',
    url: 'http://google.com',
  },
  {
    id: 3,
    type: 'linkedin',
    url: 'http://linkedin.com',
  },
];

const SocialIcon = ({
  type,
}) => (
  <span className={styles.socialIcon}>
    {(() => {
      switch (type) {
        case 'twitter':
          return <SocialTwitterIcon colorIndex="grey-3-a" size="small" />;
        case 'facebook':
          return <SocialFacebookOptionIcon size="small" colorIndex="grey-3-a" />;
        case 'google':
          return <SocialGooglePlusIcon size="small" colorIndex="grey-3-a" />;
        case 'linkedin':
          return <SocialLinkedinOptionIcon size="small" colorIndex="grey-3-a" />;
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
      <Menu inline responsive direction="row">
        {socialIcons.map((icon, index) =>
          <Anchor href={icon.url} key={index}>
            <SocialIcon type={icon.type} />
          </Anchor>
        )}
      </Menu>
      <Heading tag="h3">
        <Anchor href="http://www.udacity.com">
          Udacity Alumni Web App
        </Anchor>
      </Heading>
      <Heading tag="h5">
        Made with <span className={styles.heart}>♥️</span>{' '} by
        <Anchor href="http://www.udacity.com">
          {' Udacity Alumni'}
        </Anchor>
      </Heading>
    </Box>
  </Footer>
);

export default cssModules(AppFooter, styles);
