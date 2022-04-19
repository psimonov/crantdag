import React, { useEffect, useState } from 'react';

import Page from '../../components/Page';
import Table from '../../components/Table';
import { getPosts } from '../../services/posts';

const Home: React.FC = () => {
  const [columnDefs] = useState([
    {
      headerName: 'UserID',
      field: 'userId',
    },
    {
      headerName: 'ID',
      field: 'id',
    },
    {
      headerName: 'Title',
      field: 'title',
    },
    {
      headerName: 'Body',
      field: 'body',
    },
  ]);

  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getPosts();

      setRowData(data);
    })();
  }, []);

  return (
    <Page title="Home">
      <Table columnDefs={columnDefs} rowData={rowData} />
    </Page>
  );
};

export default Home;
