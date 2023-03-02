import { useState } from 'react';
import { Layout, Menu } from '@arco-design/web-react';
import { IconHome, IconCalendar } from '@arco-design/web-react/icon';
import "@arco-design/web-react/dist/css/arco.css";
import styles from './index.less';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Sider = Layout.Sider;
const Content = Layout.Content;
const collapsedWidth = 60;
const normalWidth = 220;

function MenuLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [siderWidth, setSiderWidth] = useState(normalWidth);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
    setSiderWidth(collapsed ? collapsedWidth : normalWidth);
  };

  const handleMoving = (_, { width }) => {
    if (width > collapsedWidth) {
      setSiderWidth(width);
      setCollapsed(!(width > collapsedWidth + 20));
    } else {
      setSiderWidth(collapsedWidth);
      setCollapsed(true);
    }
  };

  return (
    <Layout className={`${styles.wrapper} byte-layout-collapse-demo`}>
      <Sider
        collapsible
        theme='dark'
        onCollapse={onCollapse}
        collapsed={collapsed}
        width={siderWidth}
        resizeBoxProps={{
          directions: ['right'],
          onMoving: handleMoving,
        }}
      >
        <div className='logo' />
        <Menu theme='dark' autoOpen style={{ width: '100%' }}>
          <MenuItem key='1' disabled>
            <IconHome />
            设计指南
          </MenuItem>
          <MenuItem key='2'>
            <IconCalendar />
            区块
          </MenuItem>
          <MenuItem key='3'>
            <IconCalendar />
            模块
          </MenuItem>
          <SubMenu
            key='layout'
            title={
              <span>
                <IconCalendar /> 布局组件
              </span>
            }
          >
            <MenuItem key='11'>栅格</MenuItem>
            <MenuItem key='12'>分隔符</MenuItem>
            <MenuItem key='13'>布局</MenuItem>
          </SubMenu>
        </Menu>
      </Sider>
      <Content style={{ background: 'rgb(240,255,255)', textAlign: 'center', padding: '30px' }}>
        <div style={{ width: '100%', height: '100%' }}>Content</div>
      </Content>
    </Layout>
  );
}

export default MenuLayout;
