import React, { Component, Fragment } from 'react'
import { Card } from 'antd';
import ActiveContent from '../BandwidthOnPaperSetOnActive/ActiveContent'
import axios from 'axios';
import Title from 'antd/lib/typography/Title'

const titleGridStyle = {
    width: '16.666%',
    textAlign: 'center',
    fontWeight: 'bold',
    height: 80
  };


class BandwidthOnPaperSetOnActive extends Component {
    state = {
        post: []
    }

    componentDidMount(){
        axios.get("http://localhost:3004/postActive").then(res => {
            this.setState({
                post: res.data
            })
        })
    }

    render(){
        return(
            <Fragment>
                <div className="section-title-bandwidth">
                    <Title level={1}>Bandwidth On Paper (Set Active)</Title>
                </div>
                <div className="container">
                    <div className="card-content bg-grey">
                        <Card headStyle={{backgroundColor: '#e1e5eb'}} title="Bandwith On Paper: February 22, 2021, 10:37 am">
                            <div className="card-title">
                                <Card.Grid hoverable={false} style={titleGridStyle}>No.</Card.Grid>
                                <Card.Grid hoverable={false} style={titleGridStyle}>Customer ID</Card.Grid>
                                <Card.Grid hoverable={false} style={titleGridStyle}>Customer Name</Card.Grid>
                                <Card.Grid hoverable={false} style={titleGridStyle}>Product List</Card.Grid>
                                <Card.Grid hoverable={false} style={titleGridStyle}>Sum Of List</Card.Grid>
                                <Card.Grid hoverable={false} style={titleGridStyle}>BOP (Mbps)</Card.Grid>
                            </div>
                            {
                                this.state.post.map(post => {
                                    return <ActiveContent key={post.id} data={post}/>
                                })
                            }
                        </Card>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default BandwidthOnPaperSetOnActive;