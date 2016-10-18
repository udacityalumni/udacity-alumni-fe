import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { CarouselWidgetContainer } from 'containers';

const CarouselWidgetPage = () => (
  <div className={styles.container}>
    <CarouselWidgetContainer />
  </div>
);

export default cssModules(CarouselWidgetPage, styles);
