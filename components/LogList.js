import React, { Component } from 'react'
import Link from 'next/link'
import { List, Avatar, Form, Button, Modal, Icon, Input, Upload, Select, Tag } from 'antd'
import { Col, Row } from 'reactstrap'
import LayoutBase from './LayoutBase';

const FormItem = Form.Item;

const data = [
    {
        title: 'Lucy',
        active: true,
    },
    {
        title: 'Ant',
        active: true,
    },
    {
        title: 'ddd',
        active: false,
    },
    {
        title: 'resfgh',
        active: true,
    },
];

const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}

function handleBlur() {
    console.log('blur');
}

function handleFocus() {
    console.log('focus');
}

const props = {
    name: 'file',
    action: '//jsonplaceholder.typicode.com/posts/',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

export class LogList extends Component {
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
                <h6 style={{ marginBottom: '2em', fontSize: 15 }}>หมวดหมู่สินค้า</h6>
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
                                    <Col sm="5">
                                        <List.Item.Meta
                                            avatar={<Avatar shape="square" size={50} icon="user" />}
                                            title={item.title}
                                        />
                                    </Col>
                                    <Col sm="3">
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <div>วันที่สร้างข้อมูล: 2018-11-02 10:48</div>
                                        </div>
                                    </Col>
                                    <Col sm="3" style={{ textAlign: 'right' }}>
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
                            <Button style={{ background: '#8e8e8e' }} key='submit' loading={this.props.loading} onClick={this.props.handleOk}>ยกเลิก </Button>
                        </div>
                    ]}
                >
                    <Form>
                        <FormItem
                            {...formItemLayout}
                            label="ระบุชื่อหมวดหมู่"
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
                            label="ตั้งค่าหมวดหมู่"
                        >
                            {getFieldDecorator('setting', {
                                rules: [{
                                    type: 'setting', message: 'The input is not valid E-mail!',
                                }, {
                                    required: false, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Select a person"
                                    optionFilterProp="children"
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="อัพโหลดรูปภาพ"
                        >
                            {getFieldDecorator('duration', {
                                rules: [{
                                    type: 'duratoin', message: 'The input is not valid E-mail!',
                                }, {
                                    required: false, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Upload {...props}>
                                    <Button>
                                        <Icon type="upload" /> Click to Upload
                                    </Button>
                                </Upload>
                            )}
                        </FormItem>
                    </Form>
                </Modal>
            </LayoutBase>
        )
    }
}

export default Form.create()(LogList)
