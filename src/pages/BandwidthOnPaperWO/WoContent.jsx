import React from 'react';
import { Card } from 'antd';
const gridStyle = {
  width: '14.28%',
  textAlign: 'left',
  height: 100,
};

const WoContent = (props) => {
  return (
    <div>
      <div className="card-content">
        <Card.Grid hoverable={false} style={gridStyle}>
          {props.data.no}
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          {props.data.customerID}
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          {props.data.billingName}
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          {props.data.sumOfProduct}
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          {props.data.bop}
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          {props.data.projectID}
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          {props.data.productState}
        </Card.Grid>
      </div>
    </div>
  );
};

export default WoContent;
