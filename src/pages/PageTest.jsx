import React, { Component, Fragment } from 'react'
import { Layout, Menu } from 'antd';
import BandWithOnPaper from './BandwithOnPaper'
import 'antd/dist/antd.css';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  MinusSquareOutlined,
  DashboardOutlined,
  BarChartOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;


class PageTest extends Component {
    state = {
        collapsed: false,
      };
    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };

    render(){
        return(
            <Fragment>
                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <p className="section-title">DASHBOARD</p>
                        <Menu.Item key="1" icon={<DashboardOutlined />}>
                        Dashboard
                        </Menu.Item>
                        <p className="section-title">RAW DATA</p>
                        <SubMenu key="sub1" icon={<MinusSquareOutlined />} title="Bandwith On Paper">
                            <Menu.Item key="2">BOP (Set Active)</Menu.Item>
                            <Menu.Item key="3">BOP (WO)</Menu.Item>
                            <Menu.Item key="4">BOP Summary</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="5" icon={<BarChartOutlined />}>
                        Traffic
                        </Menu.Item>
                    </Menu>
                    </Sider>
                    <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: this.toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        }}
                    >
                        <BandWithOnPaper />
                    </Content>
                    </Layout>
                </Layout>
            </Fragment>
        )
    }
}

export default PageTest