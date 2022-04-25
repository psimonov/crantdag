import React from 'react';

import FlexStyled from './style';

interface IProps {
  children: React.ReactNode;
  vertical?: boolean;
  style?: React.CSSProperties;
}

const Flex: React.FC<IProps> = (props) => {
  const { children, vertical, style } = props;

  return (
    <FlexStyled vertical={vertical} style={style}>
      {children}
    </FlexStyled>
  );
};

export default Flex;
