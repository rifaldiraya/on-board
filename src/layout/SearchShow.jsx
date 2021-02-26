import React, { Component } from 'react';
import { Input, Space, Card, Row, Col, InputNumber } from 'antd';

const { Search } = Input;
const onSearch = (value) => console.log(value);

class SearchShow extends Component {
  state = {
    inputValue: 1,
  };
  onChange = (value) => {
    this.setState(
      {
        inputValue: value,
      },
      () => {
        console.log(this.state.inputValue);
        console.log('post length: ' + this.state.post.length);
      }
    );
  };
  render() {
    const { inputValue } = this.state;
    return (
      <Row>
        <Col span={12}>
          <Space>
            Show
            <Row>
              <Col span={4}>
                <InputNumber
                  min={1}
                  max={100}
                  value={inputValue}
                  style={{ padding: '0px' }}
                  onChange={this.onChange}
                />
              </Col>
            </Row>
            entries
          </Space>
        </Col>
        <Col span={12}>
          <div className="input-search">
            <Search
              placeholder="input search text"
              enterButton="Search"
              onSearch={onSearch}
              style={{ width: 200 }}
            />
          </div>
        </Col>
      </Row>
    );
  }
}

export default SearchShow;
