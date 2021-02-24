import React, { Component, Fragment } from 'react'
import { Input, Space, Card, Row, Col, InputNumber } from 'antd';
import IntegerStep from '../../component/IntegerStep'
import WoContent from './WoContent'
import axios from 'axios'
import Title from 'antd/lib/typography/Title'
import {TableOutlined} from '@ant-design/icons'

const { Search } = Input;
const onSearch = value => console.log(value);

const titleGridStyle = {
    width: '14.28%',
    textAlign: 'center',
    fontWeight: 'bold',
    height: 80
}

class BandwidthOnPaperWO extends Component {
    state ={
        post: [],
        inputValue: 1
    }

    componentDidMount() {
        axios.get("http://localhost:3004/postWo").then((res) => {
            this.setState({
                post: res.data
            })
        })
    }

    onChange = value => {
        this.setState({
          inputValue: value,
        }, () => {
            console.log(this.state.inputValue)
            console.log("post length: "+ this.state.post.length)
        });
      };

      displayEntries = () => {
          for (let index = 0; index < this.state.inputValue; index++) {
            return <WoContent key={index} data={index}/>
          }
      }

    render(){
        const { inputValue } = this.state;
        return(
            <Fragment>
                <div className="section-title-bandwith">
                    <Title level={1}>Bandwidth On Paper (WO)</Title>
                </div>
                <div className="container">
                    <div className="card-content bg-grey">
                    <Card headStyle={{backgroundColor: '#e1e5eb'}} icon={<TableOutlined />} title="Bandwith On Paper: February 22, 2021, 10:41 am">
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
                                                style={{padding: '0px'}}
                                                onChange={this.onChange}
                                            />
                                            </Col>
                                        </Row> 
                                        entries
                                    </Space>
                                </Col>
                                <Col span={12}>
                                    <div className="input-search">
                                        <Search placeholder="input search text" enterButton="Search" onSearch={onSearch} style={{ width: 200 }} />
                                    </div>
                                </Col>
                            </Row>
                            <div className="card-title">
                                <Card.Grid hoverable={false} style={titleGridStyle}>No.</Card.Grid>
                                <Card.Grid hoverable={false} style={titleGridStyle}>Customer ID</Card.Grid>
                                <Card.Grid hoverable={false} style={titleGridStyle}>Billing Name</Card.Grid>
                                <Card.Grid hoverable={false} style={titleGridStyle}>Sum of Product</Card.Grid>
                                <Card.Grid hoverable={false} style={titleGridStyle}>BOP (Mbps)</Card.Grid>
                                <Card.Grid hoverable={false} style={titleGridStyle}>Project ID</Card.Grid>
                                <Card.Grid hoverable={false} style={titleGridStyle}>Product State</Card.Grid>
                            </div>
                            {
                                this.state.post.map(post => {
                                    return <WoContent key={post.id} data={post}/>
                                })
                            }
                        </Card>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default BandwidthOnPaperWO;