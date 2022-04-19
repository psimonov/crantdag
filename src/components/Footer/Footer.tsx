import React from 'react';

import FooterStyled from './style';

interface IProps {
  children: React.ReactNode;
}

const Footer: React.FC<IProps> = (props) => {
  const { children } = props;

  return <FooterStyled>{children}</FooterStyled>;
};

export default Footer;
