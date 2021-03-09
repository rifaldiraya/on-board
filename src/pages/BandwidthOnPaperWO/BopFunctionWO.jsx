import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as STYLE from '../../css/style';
import { Typography, Input, Button, Row, Col, List, Card, Space } from 'antd';
import {
  DatabaseOutlined,
  FileOutlined,
  MoreOutlined,
} from '@ant-design/icons';

const { Title } = Typography;
const { Search } = Input;
const onSearch = (value) => console.log(value);

function BopFunctionWO() {
  const [post, setPost] = useState();

  useEffect(() => {
    axios.get('http://localhost:3004/postWO').then((res) => {
      setPost(res.data);
    });
  });

  const displayButton = (data) => {
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
        dataSource={post}
        renderItem={(item) => (
          <List.Item>
            <Row>
              <Col span={24}>
                <Card style={STYLE.allCardStyle}>
                  <Row>
                    <Col span={6}>
                      <span style={STYLE.titleCardStyle}>
                        {item.billingName}
                      </span>
                      <p style={STYLE.cardStyle}>{item.customerID}</p>
                    </Col>
                    <Col style={{ paddingLeft: '50px' }} span={6}>
                      <Space style={{ height: '100%' }}>
                        <FileOutlined style={STYLE.iconStyle} />
                        <div>
                          <span style={STYLE.cardStyle} level={4}>
                            Sum of Product
                          </span>
                          <p style={STYLE.titleCardStyle}>
                            {item.sumOfProduct}
                          </p>
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
                    <Col span={6}>
                      <div
                        style={{
                          marginRight: '0px',
                          paddingTop: '10px',
                          textAlign: 'right',
                        }}
                      >
                        {displayButton(item.productState)}
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

export default BopFunctionWO;
