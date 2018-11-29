import React, { Component } from 'react'
import Link from 'next/link'
import { List, Avatar, Form, Select, Tag, Input, Layout } from 'antd'
import { Col, Row } from 'reactstrap'
import { inject, observer } from 'mobx-react';

import CardUser from './CardUser'
import ModalUser from './ModalUser';
import LayoutBase from './LayoutBase';


const data = [
    {
        title: 'Lucy',
        active: true,
        online: true,
        status: 'ผู้ขาย'
    },
    {
        title: 'Ant',
        online: true,
        status: 'ผู้ซื้อ'
    },
    {
        title: 'ddd',
        active: false,
        online: false,
        status: 'ผู้ขาย'
    },
    {
        title: 'resfgh',
        online: false,
        status: 'ผู้ซื้อ'
    },
];

const FormItem = Form.Item;
const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}

@inject('userStore', 'authStore')
@observer
export class UserList extends Component {
    state = {
        loading: false,
        visible: false,
    }

    componentDidMount(){
        this.props.userStore.getDataTest()
    }

    showModal = (status, active) => {
        this.setState({
            visible: true,
            status,
            active
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
                sm: { span: 10 },
                md: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 18 },
                md: { span: 14 },
            },
        };
        // const output = [...new Map(data.map(o => [o.id, o])).values()]
        return (
            <div>
                <CardUser />
                <LayoutBase>
                    <div style={{ margin: '1em 0 1em 0' }}>
                        <Form>
                            <Row>
                                <Col sm="4">
                                    <FormItem {...formItemLayout} label="รายชื่อผู้ใช้งาน">
                                        {getFieldDecorator('search')(
                                            <Input placeholder=" ค้นหา" />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col sm="6">
                                    <FormItem {...formItemLayout} label="ประเภทผู้ใช้งาน">
                                        {getFieldDecorator('searchs')(
                                            <Select
                                                style={{ width: 120 }}
                                                onChange={handleChange}
                                                placeholder="ประเภท"
                                            >
                                                <Option value="jack">Jack</Option>
                                                <Option value="lucy">Lucy</Option>
                                                <Option value="disabled" disabled>Disabled</Option>
                                                <Option value="Yiminghe">yiminghe</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                        </Form>
                    </div>
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
                                    <Col sm="5">
                                        <List.Item.Meta
                                            avatar={<Avatar shape="square" size={50} icon="user" />}
                                            title={item.title}
                                            description={item.status}
                                        />
                                    </Col>
                                    <Col sm="3">
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <div>วันที่สมัคร: 2018-11-02 10:48</div>
                                            <div style={{ color: '#ccc' }}>เพคเกจ: 15วัน คงเหลือ: 7วัน</div>
                                        </div>
                                    </Col>
                                    <Col sm="3" style={{ textAlign: 'right' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            {item.status === 'ผู้ขาย' &&
                                                <div style={{ marginBottom: 10 }}>{item.active ? <Tag color="#87d068">ยืนยันข้อมูลแล้ว</Tag> :
                                                    <Tag color="#f50">ยังไม่ได้ยืนยัน</Tag>}
                                                </div>
                                            }
                                            <div>{item.online ? <Tag color="#87d068">ออนไลน์</Tag> :
                                                <Tag color="#f50">ออฟไลน์</Tag>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col style={{ textAlign: 'right' }}>
                                        <a href="javascript:;" onClick={() => this.showModal(item.status, item.active)}>จัดการ</a>
                                    </Col>
                                </Row>
                            </List.Item>
                        )}
                    />
                    <ModalUser
                        active={this.state.active}
                        status={this.state.status}
                        handleOk={this.handleOk}
                        handleCancel={this.handleCancel}
                        visible={this.state.visible}
                        loading={this.state.loading}
                    />
                </LayoutBase>
            </div>
        )
    }
}

export default Form.create()(UserList)
