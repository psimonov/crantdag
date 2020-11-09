import React from 'react';
import useReactRouter from 'use-react-router';

import Page from '../../components/Page';

interface IMatchParams {
  id: string;
}

const SimplePageDetail: React.FC = () => {
  const { match } = useReactRouter();

  const params = match.params as IMatchParams;

  return (
    <Page title="Simple Page Detail">Simple Page Detail (#{params.id})</Page>
  );
};

export default SimplePageDetail;
