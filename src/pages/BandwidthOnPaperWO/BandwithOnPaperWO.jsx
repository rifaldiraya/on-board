import React, { Component, Fragment } from 'react';
import { Card } from 'antd';
import WoContent from './WoContent';
import axios from 'axios';
import Title from 'antd/lib/typography/Title';
import { TableOutlined } from '@ant-design/icons';
import SearchShow from '../../layout/SearchShow'


const titleGridStyle = {
  width: '14.28%',
  textAlign: 'center',
  fontWeight: 'bold',
  height: 80,
};

class BandwidthOnPaperWO extends Component {
  state = {
    post: [],
  };

  componentDidMount() {
    axios.get('http://localhost:3004/postWo').then((res) => {
      this.setState({
        post: res.data,
      });
    });
  }

  render() {
    return (
      <Fragment>
        <div className="section-title-bandwith">
          <Title level={1}>Bandwidth On Paper (WO)</Title>
        </div>
        <div className="container">
          <div className="card-content bg-grey">
            <Card
              headStyle={{ backgroundColor: '#e1e5eb' }}
              icon={<TableOutlined />}
              title="Bandwith On Paper: February 22, 2021, 10:41 am"
            >
              <SearchShow />
              <div className="card-title">
                <Card.Grid hoverable={false} style={titleGridStyle}>
                  No.
                </Card.Grid>
                <Card.Grid hoverable={false} style={titleGridStyle}>
                  Customer ID
                </Card.Grid>
                <Card.Grid hoverable={false} style={titleGridStyle}>
                  Billing Name
                </Card.Grid>
                <Card.Grid hoverable={false} style={titleGridStyle}>
                  Sum of Product
                </Card.Grid>
                <Card.Grid hoverable={false} style={titleGridStyle}>
                  BOP (Mbps)
                </Card.Grid>
                <Card.Grid hoverable={false} style={titleGridStyle}>
                  Project ID
                </Card.Grid>
                <Card.Grid hoverable={false} style={titleGridStyle}>
                  Product State
                </Card.Grid>
              </div>
              {this.state.post.map((post) => {
                return <WoContent key={post.id} data={post} />;
              })}
            </Card>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BandwidthOnPaperWO;
