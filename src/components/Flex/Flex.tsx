import classNames from 'classnames';
import React from 'react';

import styles from './Flex.module.sass';

interface IProps {
  vertical?: boolean;
  style?: { [key: string]: string };
}

const Flex: React.FC<IProps> = (props) => {
  const { children, vertical, style } = props;

  return (
    <div
      className={classNames(
        styles.root,
        vertical ? styles.root__vertical : styles.root__horizontal
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default Flex;
