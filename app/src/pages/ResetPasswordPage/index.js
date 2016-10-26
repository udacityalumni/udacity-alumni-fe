import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { ResetPasswordContainer } from 'containers';

const ResetPasswordPage = ({
  params,
}) => (
  <div className={styles.container}>
    <ResetPasswordContainer params={params} />
  </div>
);

export default cssModules(ResetPasswordPage, styles);
