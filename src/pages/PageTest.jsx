import React, { Component, Fragment } from 'react'
import { Layout, Menu } from 'antd';
import Title from 'antd/lib/typography/Title'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    MinusSquareOutlined,
    DashboardOutlined,
    MenuOutlined,
    BarChartOutlined,
} from '@ant-design/icons';

//pages
import BandwidthOnPaperSetOnActive from './BandwidthOnPaperSetOnActive/BandwidthOnPaperSetOnActive'
import BandwidthOnPaperNormal from './BandwidthOnPaperNormal/BandwidthOnPaperNormal'
import BandwidthOnPaperWO from './BandwidthOnPaperWO/BandwithOnPaperWO'
import Traffic from './Traffic/Traffic'

const { SubMenu } = Menu;
const { Header, Sider, Content, Footer } = Layout;

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
                    <Header>
                    <Title style={{color:'white', paddingTop:'15px', maxWidth: 200}} level={4}>Re-Order Point</Title>
                    {React.createElement(this.state.collapsed ? MenuOutlined : MenuOutlined, {
                        className: 'trigger',
                        onClick: this.toggle,
                        })}
                    </Header>          
                    <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <p className="section-title">DASHBOARD</p>
                        <Menu.Item href="/dashboard" key="dashboard" icon={<DashboardOutlined />}>
                        Dashboard
                        </Menu.Item>
                        <p className="section-title">RAW DATA</p>
                        <SubMenu key="sub1" icon={<MinusSquareOutlined />} title="Bandwith On Paper">
                            <Menu.Item href="/active" key="active">BOP (Set Active)</Menu.Item>
                            <Menu.Item href="/wo" key="wo">BOP (WO)</Menu.Item>
                            <Menu.Item href="/normal" key="normal">BOP Summary</Menu.Item>
                        </SubMenu>
                        <Menu.Item href="/traffic" key="traffic" icon={<BarChartOutlined />}>
                        Traffic
                        </Menu.Item>
                    </Menu>
                    <div className="footer-sider">
                        <Footer style={{ textAlign: 'left', color: 'grey'}}>Logged in as:<br /> Affendi</Footer>
                    </div>
                    </Sider>
                    <Content
                        className="site-layout-background"
                        style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        }}
                    >
                    <BandwidthOnPaperWO />
                    </Content>
                    </Layout>
                </Layout>
            </Fragment>
        )
    }
}

export default PageTest;