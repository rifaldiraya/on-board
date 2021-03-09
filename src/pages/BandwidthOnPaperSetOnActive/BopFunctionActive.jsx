import * as STYLE from '../../css/style';
import React, { useState, useEffect } from 'react';
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

function BopActive() {
  const [post, setPost] = useState();

  useEffect(() => {
    axios.get('http://localhost:3004/postActive').then((res) => {
      setPost(res.data);
    });
  });

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
        dataSource={post}
        renderItem={(item) => (
          <List.Item>
            <Row>
              <Col span={24}>
                <Card style={STYLE.allCardStyle}>
                  <Row>
                    <Col span={6}>
                      <span style={STYLE.titleCardStyle}>
                        {item.customerName}
                      </span>
                      <p style={STYLE.cardStyle}>{item.customerID}</p>
                    </Col>
                    <Col style={{ paddingLeft: '10px' }} span={6}>
                      <Space style={{ height: '100%' }}>
                        <BookOutlined style={STYLE.iconStyle} />
                        <div>
                          <span style={STYLE.cardStyle} level={4}>
                            Product
                          </span>
                          <p style={STYLE.titleCardStyle}>{item.productList}</p>
                        </div>
                      </Space>
                    </Col>
                    <Col style={{ paddingLeft: '50px' }} span={6}>
                      <Space style={{ height: '100%' }}>
                        <FileOutlined style={STYLE.iconStyle} />
                        <div>
                          <span style={STYLE.cardStyle} level={4}>
                            Sum of List
                          </span>
                          <p style={STYLE.titleCardStyle}>{item.sumOfList}</p>
                        </div>
                      </Space>
                    </Col>
                    <Col span={6}>
                      <Space style={{ height: '100%' }}>
                        <DatabaseOutlined style={STYLE.iconStyle} />
                        <div>
                          <span style={STYLE.cardStyle} level={4}>
                            BOP (Mbps)
                          </span>
                          <p style={STYLE.titleCardStyle}>{item.bop}</p>
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
  );
}

export default BopActive;
