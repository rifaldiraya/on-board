import React, { useState, useEffect } from 'react';
import { Layout, Menu, Space } from 'antd';
import {
  MinusSquareOutlined,
  DashboardOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BarChartOutlined,
} from '@ant-design/icons';

//pages
import Dashboard from './Dashboard';

//new Pages
import BopFunctionActive from './BandwidthOnPaperSetOnActive/BopFunctionActive';
import BopFunctionWO from './BandwidthOnPaperWO/BopFunctionWO';
import FunctionTraffic from './Traffic/FunctionTraffic';
import BopFunctionNormal from './BandwidthOnPaperNormal/BopFunctionNormal';

const { SubMenu } = Menu;
const { Header, Sider, Content, Footer } = Layout;

function FunctionPageTest() {
  const [collapsed, setCollapsed] = useState(false);
  const [key, setKey] = useState('');

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const handleClick = (event) => {
    console.log(event);
    setKey(event.key);
  };

  const displayFooter = () => {
    switch (collapsed) {
      case false:
        return (
          <div className="footer-sider">
            <Footer
              style={{
                backgroundColor: '#1A3547',
                textAlign: 'left',
                color: 'gray',
                paddingLeft: '20px',
              }}
            >
              Logged in as: <br /> Affendi
            </Footer>
          </div>
        );
      case true:
        return <div></div>;
      default:
        break;
    }
  };

  const displayPage = () => {
    switch (key) {
      case 'dashboard':
        return <Dashboard />;
      case 'traffic':
        return <FunctionTraffic />;
      case 'wo':
        return <BopFunctionWO />;
      case 'normal':
        return <BopFunctionNormal />;
      case 'active':
        return <BopFunctionActive />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Space style={{ backgroundColor: '#1A3547' }}>
        <div className="title-bar">
          <p>Re-Order Point</p>
        </div>
        <Header
          className="site-layout-background"
          style={{ padding: 0, background: 'transparent' }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: toggle(),
            }
          )}
        </Header>
      </Space>
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: 'static',
          }}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.ItemGroup title="DASHBOARD">
              <Menu.Item
                href="/dashboard"
                key="dashboard"
                onClick={handleClick}
                icon={<DashboardOutlined />}
              >
                Dashboard
              </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="RAW DATA">
              <SubMenu
                key="sub1"
                icon={<MinusSquareOutlined />}
                title="Bandwith On Paper"
              >
                <Menu.Item href="/active" key="active" onClick={handleClick}>
                  BOP (Set Active)
                </Menu.Item>
                <Menu.Item href="/wo" key="wo" onClick={handleClick}>
                  BOP (WO)
                </Menu.Item>
                <Menu.Item href="/normal" key="normal" onClick={handleClick}>
                  BOP (Normal)
                </Menu.Item>
              </SubMenu>
              <Menu.Item
                href="/traffic"
                key="traffic"
                onClick={handleClick}
                icon={<BarChartOutlined />}
              >
                Traffic
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu>
          {displayFooter()}
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {displayPage()}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default FunctionPageTest;
