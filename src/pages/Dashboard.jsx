import React, { Fragment, PureComponent } from 'react';
import Title from 'antd/lib/typography/Title';
import { Row, Col, Card, Divider, Space } from 'antd';
import axios from 'axios';
import {
  LineChart,
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

class Dashboard extends PureComponent {
  state = {
    bopGraf: [],
    bop: 0,
    user: 0,
    traffic: [],
  };

  //Get data BOP from BOP (Active), BOP (WO) and BOP (Normal)
  //Add all bop then store it in to this.state.bop
  componentDidMount() {
    axios.get('http://localhost:3004/postActive').then((res) => {
      let bopNew = this.state.bop;
      for (let index = 0; index < res.data.length; index++) {
        bopNew += res.data[index].bop;
      }
      this.setState(
        {
          bop: bopNew,
          user: res.data.length,
        },
        () => {
          console.log(this.state.user);
        }
      );
    });

    axios.get('http://localhost:3004/postWo').then((res) => {
      let bopNew = this.state.bop;
      for (let index = 0; index < res.data.length; index++) {
        bopNew += res.data[index].bop;
      }
      this.setState({
        bop: bopNew,
      });
    });

    axios.get('http://localhost:3004/postNormal').then((res) => {
      let bopNew = this.state.bop;
      for (let index = 0; index < res.data.length; index++) {
        bopNew += res.data[index].bop;
      }
      this.setState({
        bop: bopNew,
        bopGraf: res.data,
      });
    });

    //get traffic data for graphic
    axios.get('http://localhost:3004/postTraffic').then((res) => {
      this.setState(
        {
          traffic: res.data,
        },
        () => {
          console.log(res.data);
          console.log(this.state.traffic);
        }
      );
    });
  }

  render() {
    return (
      <Fragment>
        <Title style={{ color: '#686868' }} level={4}>
          Dashboard
        </Title>
        <Divider orientation="left" plain>
          Grafik Traffic (Hari ini)
        </Divider>
        <ResponsiveContainer width="100%" height="30%">
          <LineChart
            width={750}
            height={300}
            data={this.state.traffic}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="customerName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="traffic"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="trafficIn" stroke="#82ca9d" />
            <Line type="monotone" dataKey="trafficOut" stroke="#f72f36" />
          </LineChart>
        </ResponsiveContainer>
        <div className="user-bop">
          <Space direction="vertical">
            <span
              style={{ fontSize: '14px', fontWeight: 'bold', color: '#686868' }}
            >
              User Existing (Hari ini)
            </span>
            <span style={{ fontSize: '14px', color: '#686868' }}>
              {this.state.user}
            </span>
          </Space>
        </div>

        <Divider orientation="left" style={{ paddingTop: '20px' }} plain>
          Grafik BOP (Hari ini)
        </Divider>
        <ResponsiveContainer width="100%" height="30%">
          <BarChart width={750} height={300} data={this.state.bopGraf}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="customerName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="bop" fill="#8884d8" />
            <Bar dataKey="sumOfList" fill="#f72f36" />
          </BarChart>
        </ResponsiveContainer>
        <div className="user-bop">
          <Space direction="vertical">
            <span
              style={{ fontSize: '14px', fontWeight: 'bold', color: '#686868' }}
            >
              Jumlah BOP (Hari ini)
            </span>
            <span style={{ fontSize: '14px', color: '#686868' }}>
              {this.state.bop}
            </span>
          </Space>
        </div>
        <Row>
          <Col span={24}></Col>
        </Row>
      </Fragment>
    );
  }
}

export default Dashboard;
