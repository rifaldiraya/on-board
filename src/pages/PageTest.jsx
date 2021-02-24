import React, { Component, Fragment } from 'react'
import { Layout, Menu } from 'antd';
import Title from 'antd/lib/typography/Title'
import {
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
import Dashboard from './Dashboard'

const { SubMenu } = Menu;
const { Header, Sider, Content, Footer } = Layout;

class PageTest extends Component {
    state = {
        collapsed: false,
        key: ""
      };
    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };

    handleClick = (event) => {
        console.log(event.key);
        this.setState({
            key: event.key
        })
    }

    displayPage = () => {
       switch (this.state.key) {
            case 'dashboard':
               return <Dashboard />
            case 'traffic':
                return <Traffic />    
            case 'wo':
                return <BandwidthOnPaperWO />    
            case 'normal':
                return <BandwidthOnPaperNormal />    
            case 'active':
                return <BandwidthOnPaperSetOnActive />    
            default:
                return <Dashboard />
       }
    }

    render(){
        return(
            <Layout>
                <Header style={{backgroundColor: "rgba(0, 0, 0, 0.70)"}}>
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
                    <Menu.Item href="/dashboard" key="dashboard" onClick={this.handleClick} icon={<DashboardOutlined />}>
                    Dashboard
                    </Menu.Item>
                    <p className="section-title">RAW DATA</p>
                    <SubMenu key="sub1" icon={<MinusSquareOutlined />} title="Bandwith On Paper">
                        <Menu.Item href="/active" key="active" onClick={this.handleClick}>BOP (Set Active)</Menu.Item>
                        <Menu.Item href="/wo" key="wo" onClick={this.handleClick}>BOP (WO)</Menu.Item>
                        <Menu.Item href="/normal" key="normal" onClick={this.handleClick}>BOP Summary</Menu.Item>
                    </SubMenu>
                    <Menu.Item href="/traffic" key="traffic" onClick={this.handleClick} icon={<BarChartOutlined />}>
                    Traffic
                    </Menu.Item>
                </Menu>
                <div className="footer-sider">
                    <Title style={{color: 'gray', marginTop: '10px'}} level={5}>Logged in as: <br/> Affendi</Title>
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
                    {this.displayPage()}
                </Content>
                </Layout>
            </Layout>
        )
    }
}

export default PageTest;