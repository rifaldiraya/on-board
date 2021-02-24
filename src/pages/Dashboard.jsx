import React, { Component, Fragment, PureComponent } from 'react'
import Title from 'antd/lib/typography/Title'
import { Row, Col } from 'antd'
import axios from 'axios'
import { LineChart, BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

class Dashboard extends PureComponent {
  state = {
    bopGraf: [],
    bop: 0,
    user: 0,
    traffic: []
  }

  //Get data BOP from BOP (Active), BOP (WO) and BOP (Normal)
  //Add all bop then store it in to this.state.bop
  componentDidMount(){
    axios.get("http://localhost:3004/postActive").then(res => {
      let bopNew = this.state.bop
      for (let index = 0; index < res.data.length; index++) {
        bopNew += res.data[index].bop
      }
      this.setState({
        bop: bopNew,
        user: res.data.length
      }, () => {
        console.log(this.state.user)
      })
    })

    axios.get("http://localhost:3004/postWo").then(res => {
      let bopNew = this.state.bop
      for (let index = 0; index < res.data.length; index++) {
        bopNew += res.data[index].bop
      }
      this.setState({
        bop: bopNew
      })
    })

    axios.get("http://localhost:3004/postNormal").then(res => {
      let bopNew = this.state.bop
      for (let index = 0; index < res.data.length; index++) {
        bopNew += res.data[index].bop
      }
      this.setState({
        bop: bopNew,
        bopGraf: res.data
      })
    })

    //get traffic data for graphic
    axios.get("http://localhost:3004/postTraffic").then(res => {
      this.setState({
        traffic: res.data
      }, () => {
        console.log(res.data)
        console.log(this.state.traffic)
      })
    })
  }

  render(){
    return(
      <Fragment>
        <Title level={1}>Dashboard</Title>
        <div className='user-bop'>
          <Row>
            <Col span={12} sm={24} md={24} lg={12} xl={12}>
              <Title level={3}>User Existing (Hari ini)</Title>
              <Title level={5}>{this.state.user}</Title>
            </Col>
            <Col span={12} sm={24} md={24} lg={12} xl={12}>
              <Title level={3}>Jumlah BOP (Hari ini)</Title>
              <Title level={5}>{this.state.bop}</Title>
            </Col>
          </Row>
        </div>

        <Row>
          <Col span={24} lg={24} md={24}>
            <div className="grafik-traffic">
              <Title level={3}>Grafik Traffic (Hari ini)</Title>
                <LineChart
                  width={1000}
                  height={400}
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
                  <Line type="monotone" dataKey="traffic" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="trafficIn" stroke="#82ca9d" />
                  <Line type="monotone" dataKey="trafficOut" stroke="#f72f36" />
                </LineChart>
              </div>

              <div className="grafik-bop">
                <Title level={3}>Grafik BOP (Hari ini)</Title>
                <BarChart width={1000} height={400} data={this.state.bopGraf}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="customerName" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="bop" fill="#8884d8" />
                  <Bar dataKey="sumOfList" fill="#f72f36" />
                </BarChart>
              </div>
          </Col>
        </Row>
      </Fragment>
    )
  }
}

export default Dashboard