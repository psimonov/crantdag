import { Layout, PageHeader } from 'antd';
import React, { useEffect, useState } from 'react';
import useReactRouter from 'use-react-router';

import { version } from '../../../package.json';
import { getMenu } from '../../services/api';
import Flex from '../Flex';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import styles from './Page.module.sass';

interface IProps {
  title: string;
}

const Page: React.FC<IProps> = (props) => {
  const [menuData, setMenuData] = useState([]);

  const { history } = useReactRouter();

  const { children, title } = props;

  useEffect(() => {
    (async () => {
      const data = await getMenu();

      setMenuData(data);
    })();
  }, []);

  return (
    <Flex>
      <Sidebar menu={menuData} onSelelect={(e) => history.push(e.key)} />
      <Flex vertical={true} style={{ padding: '0 24px' }}>
        <PageHeader title={title} className={styles.root__header} />
        <Layout.Content>{children}</Layout.Content>
        <Footer>
          <Flex>
            <div style={{ width: '50%' }}>
              {new Date().getFullYear()}&nbsp;&copy;&nbsp;Crantdag&nbsp;UI
            </div>
            <div style={{ width: '50%', textAlign: 'right' }}>
              (Version: {version})
            </div>
          </Flex>
        </Footer>
      </Flex>
    </Flex>
  );
};

export default Page;
