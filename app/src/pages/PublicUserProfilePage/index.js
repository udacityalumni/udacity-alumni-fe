import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { PublicUserProfileContainer } from 'containers';

const PublicUserProfilePage = ({ params }) => (
  <div className={styles.container}>
    <PublicUserProfileContainer params={params} />
  </div>
);

PublicUserProfilePage.propTypes = {
  params: PropTypes.object.isRequired,
};

export default cssModules(PublicUserProfilePage, styles);
