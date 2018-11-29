import React, { Component } from 'react'
import Link from 'next/link'
import { Table, Form, Select, Input, Tag } from 'antd'
import { Col, Row } from 'reactstrap'
import CardPayment from './CardPayment';
import ModalPaymant from './ModalPaymant';
import LayoutBase from './LayoutBase';

const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    active: true
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    active: false
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    active: true
}, {
    key: '4',
    name: 'Jim Red',
    age: 32,
    active: true
}];

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
}


const FormItem = Form.Item;
const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}
export class PaymentList extends Component {
    state = {
        loading: false,
        visible: false,
    }

    showModal = (active) => {
        this.setState({
            visible: true,
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
        const columns = [{
            title: 'ชื่อผู้แจ้ง',
            dataIndex: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
        }, {
            title: 'จำนวนเงิน',
            dataIndex: 'age',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.age - b.age,
        }, {
            title: 'ธนาคาร',
            dataIndex: 'age',
            defaultSortOrder: 'descend',
        }, {
            title: 'วันและเวลา',
            dataIndex: 'age',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.age - b.age,
        }, {
            title: 'สถานะ',
            dataIndex: 'active',
            render: (active) => (
                <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ marginBottom: 10 }}>{active ? <Tag color="#87d068">อนุมัติ</Tag> :
                        <Tag color="#f50">ยังไม่ได้อนุมัติ</Tag>}
                    </div>
                    <a href="javascript:;" onClick={() => this.showModal(active)}>จัดการ</a>
                </span>
            ),
        }];
        const output = [...new Map(data.map(o => [o.id, o])).values()]
        return (
            <div>
                <CardPayment />
                <LayoutBase>
                    <div style={{ margin: '1em 0 1em 0' }}>
                        <Form>
                            <Row>
                                <Col sm="4">
                                    <FormItem {...formItemLayout} label="ชื่อผู้แจ้ง">
                                        {getFieldDecorator('search')(
                                            <Input placeholder=" ค้นหา" />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col sm="6">
                                    <FormItem {...formItemLayout} label="ธนาคาร">
                                        {getFieldDecorator('searchs')(
                                            <Select defaultValue="lucy"
                                                style={{ width: 120 }}
                                                onChange={handleChange}
                                                placeholder="ธนาคาร"
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
                    <Table columns={columns} dataSource={data} onChange={onChange} />
                    <ModalPaymant
                        active={this.state.active}
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

export default Form.create()(PaymentList)
