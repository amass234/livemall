import React, { Component } from 'react'
import { Table, Form, Select, Input, } from 'antd'
import { Col, Row } from 'reactstrap'
import LayoutBase from './LayoutBase';

const FormItem = Form.Item;
const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}
function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
}

const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}, {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
}];

export class AdminList extends Component {
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
            title: 'ชื่อ',
            dataIndex: 'name',
        }, {
            title: 'E-mail',
            dataIndex: 'age',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.age - b.age,
        }, {
            title: 'เบอร์ติดต่อ',
            dataIndex: 'age',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.age.length - b.age.length,
        }, {
            title: 'ประเภท',
            dataIndex: 'age',
            defaultSortOrder: 'descend',
        }
        ];
        return (
            <LayoutBase>
                <div style={{ margin: '1em 0 1em 0' }}>
                    <Form>
                        <Row>
                            <Col sm="4">
                                <FormItem {...formItemLayout} label="รายชื่อ Admin">
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
                <Table columns={columns} dataSource={data} onChange={onChange} />
            </LayoutBase>
        )
    }
}

export default Form.create()(AdminList)
