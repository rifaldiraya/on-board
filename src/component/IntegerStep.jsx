import { Slider, InputNumber, Row, Col } from 'antd';
import React, { Fragment } from 'react'

class IntegerStep extends React.Component {
  state = {
    inputValue: 1,
  };

  onChange = value => {
    this.setState({
      inputValue: value,
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
        <Fragment>
            <Row>
                <Col span={4}>
                <InputNumber
                    min={1}
                    max={100}
                    value={inputValue}
                    style={{padding: '0px'}}
                    onChange={this.onChange}
                />
                </Col>
            </Row>
        </Fragment>
    );
  }
}

export default IntegerStep;