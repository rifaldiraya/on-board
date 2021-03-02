import React from 'react';
import axios from 'axios';
import { Typography, Input, Button, Row, Col, List, Card, Space } from 'antd';

import {
  CalendarOutlined,
  CarryOutOutlined,
  LoginOutlined,
  StockOutlined,
} from '@ant-design/icons';
const { Title } = Typography;
const { Search } = Input;
const onSearch = (value) => console.log(value);

const allCardStyle = {
  paddingLeft: '10px',
  borderLeft: '2px solid #0065B3',
  boxShadow: '5px 5px 10px #F4F4F4',
};

const iconStyle = {
  fontSize: '24px',
  color: '#0065B3',
  paddingRight: '5px',
};

const cardStyle = {
  margin: '0px 0px 0px 0px',
  padding: '0px 0px 0px 0px',
  color: '#D2C9CA',
};

const titleCardStyle = {
  color: '#686868',
  fontWeight: 'bold',
  marginBottom: '0px',
  paddingBottom: '0px',
};

class Traffic extends React.Component {
  state = {
    post: [],
  };

  componentDidMount() {
    axios.get('http://localhost:3004/postTraffic').then((res) => {
      this.setState({
        post: res.data,
      });
    });
  }
  render() {
    return (
      <div>
        <div className="order-main">
          <Row style={{ paddingBottom: '10px' }}>
            <Col span={12}>
              <Title style={{ color: '#686868' }} level={4}>
                Traffic - February 22, 2021
              </Title>
            </Col>
            <Col style={{ textAlign: 'right' }} span={12}>
              <Space>
                <div className="input-search">
                  <Search
                    placeholder="input search text"
                    onSearch={onSearch}
                    bordered={false}
                    style={{
                      borderBottom: '2px solid #0065B3',
                      width: 300,
                    }}
                  />
                </div>
                <div className="btn-newOrder">
                  <Button
                    style={{ border: 'none', backgroundColor: '#0065B3' }}
                    type="primary"
                  >
                    New List
                  </Button>
                </div>
              </Space>
            </Col>
          </Row>
          <List
            grid={{ gutter: 0, column: 1 }}
            dataSource={this.state.post}
            renderItem={(item) => (
              <List.Item>
                <Row>
                  <Col span={24}>
                    <Card style={allCardStyle}>
                      <Row>
                        <Col span={4}>
                          <span style={titleCardStyle}>
                            {item.customerName}
                          </span>
                          <p style={cardStyle}>{item.date}</p>
                        </Col>
                        <Col style={{ paddingLeft: '10px' }} span={5}>
                          <Space style={{ height: '100%' }}>
                            <LoginOutlined style={iconStyle} />
                            <div>
                              <span style={cardStyle} level={4}>
                                Traffic In / Traffic Out
                              </span>
                              <p style={titleCardStyle}>
                                {item.trafficIn} / {item.trafficOut}
                              </p>
                            </div>
                          </Space>
                        </Col>
                        <Col style={{ paddingLeft: '50px' }} span={5}>
                          <Space style={{ height: '100%' }}>
                            <StockOutlined style={iconStyle} />
                            <div>
                              <span style={cardStyle}>Traffic</span>
                              <p style={titleCardStyle}>{item.traffic}</p>
                            </div>
                          </Space>
                        </Col>
                        <Col span={5}>
                          <Space style={{ height: '100%' }}>
                            <CalendarOutlined style={iconStyle} />
                            <div>
                              <span style={cardStyle}>Created At</span>
                              <p style={titleCardStyle}>{item.createdAt}</p>
                            </div>
                          </Space>
                        </Col>
                        <Col span={5}>
                          <Space style={{ height: '100%' }}>
                            <CarryOutOutlined style={iconStyle} />
                            <div>
                              <span style={cardStyle}>Update At</span>
                              <p style={titleCardStyle}>{item.updatedAt}</p>
                            </div>
                          </Space>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </List.Item>
            )}
          />
          ,
        </div>
      </div>
    );
  }
}

export default Traffic;
