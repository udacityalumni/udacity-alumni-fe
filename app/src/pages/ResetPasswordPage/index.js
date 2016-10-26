import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { ResetPasswordContainer } from 'containers';

const ResetPasswordPage = ({
  location,
}) => (
  <div className={styles.container}>
    <ResetPasswordContainer location={location} />
  </div>
);

export default cssModules(ResetPasswordPage, styles);
