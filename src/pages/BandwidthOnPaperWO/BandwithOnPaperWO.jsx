import React, { Component, Fragment } from 'react'
import { Input, Space, Card } from 'antd';
import IntegerStep from '../../component/IntegerStep'
import WoContent from './WoContent'
import axios from 'axios'
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
        post: []
    }

    componentDidMount() {
        axios.get("http://localhost:3004/postWo").then((res) => {
            this.setState({
                post: res.data
            })
        })
    }

    render(){
        return(
            <Fragment>
                <div className="section-title-bandwith">
                    <h2>Bandwidth On Paper (WO)</h2>
                </div>
                <div className="container">
                    <div className="card-content bg-grey">
                        <Card headStyle={{backgroundColor: '#e1e5eb'}}icon={<TableOutlined />} title="Bandwith On Paper: February 22, 2021, 10:41 am">
                            <div className="integer-step">
                                <IntegerStep style={{display: 'inline'}}/>
                            </div>
                            <div className="input-search">
                                <label style={{display: 'inline', paddingBottom: '0px', paddingRight: '5px'}}>Search: </label>
                                <Space direction="vertical">
                                    <Search placeholder="input search text" enterButton="Search" onSearch={onSearch} style={{ width: 200 }} />
                                </Space>
                            </div>
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