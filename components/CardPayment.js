import React, { Component } from 'react'
import { Card, Row, Col } from 'antd';

export class CardPayment extends Component {
  render() {
    return (
      <div>
        <div style={{background: '#fff', padding: '1em 2em'}}>
          <h5>รายการแจ้งชำระเงิน</h5>
        </div>
        <Card bordered={false} style={{margin: '24px 16px'}}>
          <Row style={{textAlign: 'center'}}>

            <Col sm={8} style={{borderRight: '1px solid #ccc'}}>
              <p>จำนวนเงินฝากรวม</p>
              <h3>180000</h3>
            </Col>
            <Col sm={8} style={{borderRight: '1px solid #ccc'}}>
              <p>อนุมัติแล้ว</p>
              <h3>149</h3>
            </Col>
            <Col sm={8} style={{borderRight: '1px solid #ccc'}}>
              <p>ยังไม่ได้อนุมัติ</p>
              <h3>16</h3>
            </Col>

          </Row>
        </Card>
      </div>
    )
  }
}

export default CardPayment
