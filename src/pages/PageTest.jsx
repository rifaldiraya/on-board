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
import Dashboard from './Dashboard';

//new Pages
import BopActive from './BandwidthOnPaperSetOnActive/BopActive';
import BopWO from './BandwidthOnPaperWO/BopWO';
import BopNormal from './BandwidthOnPaperNormal/BopNormal';
import Traffic from './Traffic/Traffic';

const { SubMenu } = Menu;
const { Header, Sider, Content, Footer } = Layout;

class PageTest extends Component {
  state = {
    collapsed: false,
    key: '',
    display: '',
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

  displayFooter = () => {
    switch (this.state.collapsed) {
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

  displayPage = () => {
    switch (this.state.key) {
      case 'dashboard':
        return <Dashboard />;
      case 'traffic':
        return <Traffic />;
      case 'wo':
        return <BopWO />;
      case 'normal':
        return <BopNormal />;
      case 'active':
        return <BopActive />;
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
            style={{ padding: 0, background: 'transparent' }}
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
              <Menu.ItemGroup title="DASHBOARD">
                <Menu.Item
                  href="/dashboard"
                  key="dashboard"
                  onClick={this.handleClick}
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
                    BOP (Normal)
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
            {this.displayFooter()}
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
