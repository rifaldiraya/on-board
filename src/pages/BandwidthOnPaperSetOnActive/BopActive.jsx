import React from 'react';
import axios from 'axios';
import { Typography, Input, Button, Row, Col, List, Card, Space } from 'antd';

import {
  DatabaseOutlined,
  BookOutlined,
  FileOutlined,
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

class BopActive extends React.Component {
  state = {
    post: [],
    inputValue: 1,
  };

  componentDidMount() {
    axios.get('http://localhost:3004/postActive').then((res) => {
      this.setState({
        post: res.data,
      });
    });
  }

  render() {
    return (
      <div className="order-main">
        <Row style={{ paddingBottom: '10px' }}>
          <Col span={12}>
            <Title style={{ color: '#686868' }} level={4}>
              BOP (Set Active) - February 22, 2021, 10:37 am
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
                        <span style={titleCardStyle}>{item.customerName}</span>
                        <p style={cardStyle}>{item.customerID}</p>
                      </Col>
                      <Col style={{ paddingLeft: '10px' }} span={6}>
                        <Space style={{ height: '100%' }}>
                          <BookOutlined style={iconStyle} />
                          <div>
                            <span style={cardStyle} level={4}>
                              Product
                            </span>
                            <p style={titleCardStyle}>{item.productList}</p>
                          </div>
                        </Space>
                      </Col>
                      <Col style={{ paddingLeft: '50px' }} span={6}>
                        <Space style={{ height: '100%' }}>
                          <FileOutlined style={iconStyle} />
                          <div>
                            <span style={cardStyle} level={4}>
                              Sum of List
                            </span>
                            <p style={titleCardStyle}>{item.sumOfList}</p>
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
                          {/* <div style={{ textAlign: 'right' }}>
                            <RightOutlined
                              style={{
                                textAlign: 'right',
                                color: '#0065B3',
                                marginRight: '0px',
                                fontSize: '24px',
                              }}
                            />
                          </div> */}
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
    );
  }
}

export default BopActive;
