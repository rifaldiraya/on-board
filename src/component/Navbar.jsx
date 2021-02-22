import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

class Navbar extends Component {

  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

    render(){
        return(
          <Fragment>       
            <div style={{ width: 256 }}>
              <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
              </Button>
              <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}Pz
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
              >
                <p className="section-title">DASHBOARD</p>
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                  Dashboard
                </Menu.Item>
                <p className="section-title">RAW DATA</p>
                <SubMenu key="sub1" icon={<MailOutlined />} title="Bandwith On Paper">
                  <Menu.Item key="2">BOP (Set Active)</Menu.Item>
                  <Menu.Item key="3">BOP (WO)</Menu.Item>
                  <Menu.Item key="4">BOP Summary</Menu.Item>
                </SubMenu>
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                  Traffic
                </Menu.Item>
              </Menu>
            </div>
          </Fragment>
        )
    }
}

export default Navbar;