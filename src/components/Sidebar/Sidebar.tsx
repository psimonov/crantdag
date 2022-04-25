import Icon from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';
import { useLocation } from 'react-router-dom';

interface IMenuItem {
  title: string;
  key: string;
  icon?: string;
  children?: IMenuItem[];
}

interface IProps {
  menu: IMenuItem[];
  onSelelect: (e: any) => void;
}

const Sidebar: React.FC<IProps> = (props) => {
  const { menu, onSelelect } = props;

  const location = useLocation();

  const getMenuItem = (item: IMenuItem, parentItem?: IMenuItem) => {
    return (
      <Menu.Item key={parentItem ? parentItem.key + item.key : item.key}>
        {item.icon && <Icon type={item.icon} />}
        {item.title}
      </Menu.Item>
    );
  };

  const getPaths = () => {
    return location.pathname.split('/').filter((it) => !it.startsWith(':'));
  };

  const getSelectedKeys = () => {
    const paths = getPaths();

    return [paths.join('/')];
  };

  const getOpenedKeys = () => {
    const paths = getPaths();

    return ['/' + paths.slice(-2)[0]];
  };

  return (
    <Layout.Sider width={300} style={{ background: '#fff' }}>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={getSelectedKeys()}
        defaultOpenKeys={getOpenedKeys()}
        style={{ height: '100%', borderRight: 0 }}
        onSelect={onSelelect}
      >
        {menu.map((item) => {
          if (item.children) {
            return (
              <Menu.SubMenu
                key={item.key}
                title={
                  <span>
                    {item.icon && <Icon type={item.icon} />}
                    {item.title}
                  </span>
                }
              >
                {item.children.map((it) => {
                  return getMenuItem(it, item);
                })}
              </Menu.SubMenu>
            );
          }

          return getMenuItem(item);
        })}
      </Menu>
    </Layout.Sider>
  );
};

export default Sidebar;
