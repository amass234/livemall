import React, { Component } from 'react'
import { Card, Row, Col } from 'antd';

export class CardUser extends Component {
  render() {
    return (
      <div>
        <Card bordered={false} style={{margin: '24px 16px'}}>
          <Row style={{textAlign: 'center'}}>

            <Col sm={8} style={{borderRight: '1px solid #ccc'}}>
              <p>จำนวนผู้ใช้ทั้งหมด</p>
              <h3>300</h3>
            </Col>
            <Col sm={8} style={{borderRight: '1px solid #ccc'}}>
              <p>จำนวนผู้ขาย</p>
              <h3>50</h3>
            </Col>
            <Col sm={8} style={{borderRight: '1px solid #ccc'}}>
              <p>จำนวนผู้ซื้อ</p>
              <h3>250</h3>
            </Col>

          </Row>
        </Card>
      </div>
    )
  }
}

export default CardUser
