import React, { Component } from 'react'
import Link from 'next/link'
import { List, Avatar, Form, Button, Modal, Tag, Input } from 'antd'
import { Col, Row } from 'reactstrap'
import LayoutBase from './LayoutBase';

const FormItem = Form.Item;

const data = [
    {
        title: 'แพจเกจทดลองขาย 15 วัน',
        description: 'จำนวนครั้งที่ซื้อ : 42 ครั้ง',
        price: '99',
        active: true,
    },
    {
        title: 'แพจเกจทดลองขาย 30 วัน',
        description: 'จำนวนครั้งที่ซื้อ : 42 ครั้ง',
        price: '199',
        active: true,
    },
    {
        title: 'แพจเกจทดลองขาย 2 เดือน',
        description: 'จำนวนครั้งที่ซื้อ : 42 ครั้ง',
        price: '399',
        active: true,
    },
];

export class PackageList extends Component {
    state = {
        loading: false,
        visible: false,
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        return (
            <LayoutBase>
                <h6 style={{ marginBottom: '2em', fontSize: 15 }}>แพคเกจ</h6>
                <Button onClick={this.showModal} type="dashed" icon="plus" block>เพิ่มข้อมูล</Button>
                <div style={{ margin: '1em 0 1em 0' }}>
                    <List
                        size="large"
                        bordered
                        pagination={{
                            onChange: (page) => {
                                console.log(page);
                            },
                            pageSize: 4,
                        }}
                        dataSource={data}
                        renderItem={item => (
                            <List.Item key={item.title}>
                                <Row style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                                    <Col sm="4">
                                        <List.Item.Meta
                                            title={item.title}
                                            description={item.description}
                                        />
                                    </Col>
                                    <Col sm="2">
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <div>ราคา {item.price} บาท</div>
                                        </div>
                                    </Col>
                                    <Col sm="3">
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <div>วันที่สร้างข้อมูล: 2018-11-02 10:48</div>
                                        </div>
                                    </Col>
                                    <Col sm="2" style={{ textAlign: 'right' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <div style={{ marginBottom: 10 }}>{item.active ? <Tag color="#87d068">ข้อมูลสมบรูณ์</Tag> :
                                                <Tag color="#f50">ข้อมูลไม่สมบรูณ์</Tag>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col style={{ textAlign: 'right' }}>
                                        <a href="javascript:;" onClick={this.showModal}>จัดการ</a>
                                    </Col>
                                </Row>
                            </List.Item>
                        )}
                    />
                </div>
                <Modal
                    visible={this.state.visible}
                    title="จัดการข้อมูล"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <div className='footerModel'>
                            <Button key='Suspend account' onClick={this.handleCancel}>ลบ</Button>
                            <Button key='back' onClick={this.props.handleCancel}>ตกลง</Button>
                            <Button style={{background: '#8e8e8e'}} key='submit' loading={this.props.loading} onClick={this.props.handleOk}>ยกเลิก </Button>
                        </div>
                    ]}
                >
                    <Form>
                        <FormItem
                            {...formItemLayout}
                            label="ซื้อแพคเกจ"
                        >
                            {getFieldDecorator('buy', {
                                rules: [{
                                    type: 'buy', message: 'The input is not valid E-mail!',
                                }, {
                                    required: false, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="ราคา"
                        >
                            {getFieldDecorator('price', {
                                rules: [{
                                    type: 'price', message: 'The input is not valid E-mail!',
                                }, {
                                    required: false, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="ระยะเวลา"
                        >
                            {getFieldDecorator('duration', {
                                rules: [{
                                    type: 'duratoin', message: 'The input is not valid E-mail!',
                                }, {
                                    required: false, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                    </Form>
                </Modal>
            </LayoutBase>
        )
    }
}

export default Form.create()(PackageList)
