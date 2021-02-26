import React, { Component } from 'react';
import { Layout, Menu, Space } from 'antd';
import {
  MinusSquareOutlined,
  DashboardOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BarChartOutlined,
} from '@ant-design/icons';

//pages
import BandwidthOnPaperSetOnActive from './BandwidthOnPaperSetOnActive/BandwidthOnPaperSetOnActive';
import BandwidthOnPaperNormal from './BandwidthOnPaperNormal/BandwidthOnPaperNormal';
import BandwidthOnPaperWO from './BandwidthOnPaperWO/BandwithOnPaperWO';
import Traffic from './Traffic/Traffic';
import Dashboard from './Dashboard';
import MenuItem from 'antd/lib/menu/MenuItem';

const { SubMenu } = Menu;
const { Header, Sider, Content, Footer } = Layout;

class PageTest extends Component {
  state = {
    collapsed: false,
    key: '',
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleClick = (event) => {
    console.log(event.key);
    this.setState({
      key: event.key,
    });
  };

  displayPage = () => {
    switch (this.state.key) {
      case 'dashboard':
        return <Dashboard />;
      case 'traffic':
        return <Traffic />;
      case 'wo':
        return <BandwidthOnPaperWO />;
      case 'normal':
        return <BandwidthOnPaperNormal />;
      case 'active':
        return <BandwidthOnPaperSetOnActive />;
      default:
        return <Dashboard />;
    }
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Space style={{ backgroundColor: '#1A3547' }}>
          <div className="title-bar">
            <p>Re-Order Point</p>
          </div>
          <Header
            className="site-layout-background"
            style={{ padding: 0, background: '#1A3547' }}
          >
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: this.toggle,
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
            collapsed={this.state.collapsed}
          >
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.ItemGroup style={{ fontWeight: 'bold' }} title="DASHBOARD">
                <Menu.Item
                  href="/dashboard"
                  key="dashboard"
                  onClick={this.handleClick}
                  icon={<DashboardOutlined />}
                >
                  Dashboard
                </Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup style={{ fontWeight: 'bold' }} title="RAW DATA">
                <SubMenu
                  key="sub1"
                  icon={<MinusSquareOutlined />}
                  title="Bandwith On Paper"
                >
                  <Menu.Item
                    href="/active"
                    key="active"
                    onClick={this.handleClick}
                  >
                    BOP (Set Active)
                  </Menu.Item>
                  <Menu.Item href="/wo" key="wo" onClick={this.handleClick}>
                    BOP (WO)
                  </Menu.Item>
                  <Menu.Item
                    href="/normal"
                    key="normal"
                    onClick={this.handleClick}
                  >
                    BOP Summary
                  </Menu.Item>
                </SubMenu>
                <Menu.Item
                  href="/traffic"
                  key="traffic"
                  onClick={this.handleClick}
                  icon={<BarChartOutlined />}
                >
                  Traffic
                </Menu.Item>
              </Menu.ItemGroup>
            </Menu>
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
              {this.displayPage()}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default PageTest;
