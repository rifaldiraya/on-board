import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Input, Button, Row, Col, List, Card, Space } from 'antd';
import * as STYLE from '../../css/style';
import {
  CalendarOutlined,
  CarryOutOutlined,
  LoginOutlined,
  StockOutlined,
} from '@ant-design/icons';

const { Title } = Typography;
const { Search } = Input;
const onSearch = (value) => console.log(value);

function FunctionTraffic() {
  const [post, setPost] = useState();

  useEffect(() => {
    axios.get('http://localhost:3004/postTraffic').then((res) => {
      setPost(res.data);
    });
  });

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
          dataSource={post}
          renderItem={(item) => (
            <List.Item>
              <Row>
                <Col span={24}>
                  <Card style={STYLE.allCardStyle}>
                    <Row>
                      <Col span={4}>
                        <span style={STYLE.titleCardStyle}>
                          {item.customerName}
                        </span>
                        <p style={STYLE.cardStyle}>{item.date}</p>
                      </Col>
                      <Col style={{ paddingLeft: '10px' }} span={5}>
                        <Space style={{ height: '100%' }}>
                          <LoginOutlined style={STYLE.iconStyle} />
                          <div>
                            <span style={STYLE.cardStyle} level={4}>
                              Traffic In / Traffic Out
                            </span>
                            <p style={STYLE.titleCardStyle}>
                              {item.trafficIn} / {item.trafficOut}
                            </p>
                          </div>
                        </Space>
                      </Col>
                      <Col style={{ paddingLeft: '50px' }} span={5}>
                        <Space style={{ height: '100%' }}>
                          <StockOutlined style={STYLE.iconStyle} />
                          <div>
                            <span style={STYLE.cardStyle}>Traffic</span>
                            <p style={STYLE.titleCardStyle}>{item.traffic}</p>
                          </div>
                        </Space>
                      </Col>
                      <Col span={5}>
                        <Space style={{ height: '100%' }}>
                          <CalendarOutlined style={STYLE.iconStyle} />
                          <div>
                            <span style={STYLE.cardStyle}>Created At</span>
                            <p style={STYLE.titleCardStyle}>{item.createdAt}</p>
                          </div>
                        </Space>
                      </Col>
                      <Col span={5}>
                        <Space style={{ height: '100%' }}>
                          <CarryOutOutlined style={STYLE.iconStyle} />
                          <div>
                            <span style={STYLE.cardStyle}>Update At</span>
                            <p style={STYLE.titleCardStyle}>{item.updatedAt}</p>
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

export default FunctionTraffic;
