import React from 'react';
import { useParams } from 'react-router-dom';

import Page from '../../components/Page';

const SimplePageDetail: React.FC = () => {
  const { id } = useParams();

  return <Page title="Simple Page Detail">Simple Page Detail (#{id})</Page>;
};

export default SimplePageDetail;
