import React from 'react';

import styles from './Footer.module.sass';

const Footer: React.FC = (props) => {
  const { children } = props;

  return <div className={styles.root}>{children}</div>;
};

export default Footer;
