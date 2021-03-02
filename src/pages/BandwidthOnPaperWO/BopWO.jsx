import React, { Component } from 'react';
import axios from 'axios';
import { Typography, Input, Button, Row, Col, List, Card, Space } from 'antd';

import {
  DatabaseOutlined,
  FileOutlined,
  MoreOutlined,
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

class BopWO extends Component {
  state = {
    post: [],
    inputValue: 1,
  };

  componentDidMount() {
    axios.get('http://localhost:3004/postWO').then((res) => {
      this.setState({
        post: res.data,
      });
    });
  }

  displayButton = (data) => {
    switch (data) {
      case 'Normal':
        return (
            <Button
              shape="round"
              style={{
                color: '#5DE0A1',
                border: '1px solid #5DE0A1',
                backgroundColor: 'transparent',
              }}
              type="primary"
            >
              {data}
            </Button>
        );
      case 'Temporary Installation':
        return (
            <Button
              shape="round"
              style={{
                color: '#D2C9CA',
                border: '1px solid #D2C9CA',
                backgroundColor: 'transparent',
              }}
              type="primary"
            >
              {data}
            </Button>
        );
      default:
        break;
    }
  };

  render() {
    return (
      <div className="order-main">
        <Row style={{ paddingBottom: '10px' }}>
          <Col span={12}>
            <Title style={{ color: '#686868' }} level={4}>
              BOP (WO) - February 22, 2021, 10:41 am
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
                      <Col span={6}>
                        <span style={titleCardStyle}>{item.billingName}</span>
                        <p style={cardStyle}>{item.customerID}</p>
                      </Col>
                      <Col style={{ paddingLeft: '50px' }} span={6}>
                        <Space style={{ height: '100%' }}>
                          <FileOutlined style={iconStyle} />
                          <div>
                            <span style={cardStyle} level={4}>
                              Sum of Product
                            </span>
                            <p style={titleCardStyle}>{item.sumOfProduct}</p>
                          </div>
                        </Space>
                      </Col>
                      <Col span={6}>
                        <Space style={{ height: '100%' }}>
                          <DatabaseOutlined style={iconStyle} />
                          <div>
                            <span style={cardStyle} level={4}>
                              BOP (Mbps)
                            </span>
                            <p style={titleCardStyle}>{item.bop}</p>
                          </div>
                        </Space>
                      </Col>
                      <Col span={6}>
                        <div
                          style={{
                            marginRight: '0px',
                            paddingTop: '10px',
                            textAlign: 'right',
                          }}
                        >
                          {this.displayButton(item.productState)}
                          <MoreOutlined
                            style={{ color: '#686868', paddingLeft: '15px' }}
                          />
                        </div>
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
    );
  }
}

export default BopWO;
