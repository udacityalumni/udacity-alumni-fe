import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import moment from 'moment';

const ArticleCalendar = ({
  date,
}) => (
  <div className={styles.articleCalendar}>
    <div className={styles.header}>
      {moment(date, 'YYYY.MM.DD').utc().format('MMM')}
    </div>
    <div className={styles.body}>
      <div className={styles.date}>
        {moment(date, 'YYYY.MM.DD').utc().format('DD')}
      </div>
      <div className={styles.year}>
        {moment(date, 'YYYY.MM.DD').utc().format('YYYY')}
      </div>
    </div>
  </div>
);

ArticleCalendar.propTypes = {
  date: PropTypes.string.isRequired,
};

export default cssModules(ArticleCalendar, styles);
