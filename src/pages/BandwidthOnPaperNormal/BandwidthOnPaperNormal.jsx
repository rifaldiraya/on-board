import React, { Component, Fragment } from 'react'
import { Card } from 'antd';
import axios from 'axios'
import NormalContent from '../BandwidthOnPaperNormal/NormalContent'

const gridStyle = {
    width: '16.6666%',
    height: 100,
    textAlign: 'center',
  };
  
  const titleGridStyle = {
      width: '16.6666%',
      textAlign: 'center'
  }

class BandwidthOnPaperNormal extends Component {
    state = {
        post: []
    }

    componentDidMount(){
        axios.get("http://localhost:3004/postNormal").then((res) => {
            this.setState({
                post: res.data
            })
        })
    }
    render(){
        return(
            <Fragment>
                <div className="section-title-bandwith">
                    <h2>Bandwith On Paper Normal</h2>
                </div>
                <div className="container">
                    <div className="card-content bg-grey">
                        <Card title="Bandwith On Paper: February 22, 2021, 10:37 am">
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
                                    return <NormalContent key={post.id} data={post}/>
                                })
                            }
                        </Card>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default BandwidthOnPaperNormal;