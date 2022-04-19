import { Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import packageInfo from '../../../package.json';
import { getMenu } from '../../services/posts';
import Flex from '../Flex';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import { PageHeaderStyled } from './style';

interface IProps {
  children: React.ReactNode;
  title: string;
}

const Page: React.FC<IProps> = (props) => {
  const { children, title } = props;

  const [menuData, setMenuData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const data = await getMenu();

      setMenuData(data);
    })();
  }, [title]);

  return (
    <Flex>
      <Sidebar menu={menuData} onSelelect={(e) => navigate(e.key)} />
      <Flex vertical={true} style={{ padding: '0 24px' }}>
        <PageHeaderStyled title={title} />
        <Layout.Content>{children}</Layout.Content>
        <Footer>
          <Flex>
            <div style={{ width: '50%' }}>
              {new Date().getFullYear()}&nbsp;&copy;&nbsp;Crantdag&nbsp;UI
            </div>
            <div style={{ width: '50%', textAlign: 'right' }}>
              (Version: {packageInfo.version})
            </div>
          </Flex>
        </Footer>
      </Flex>
    </Flex>
  );
};

export default Page;
