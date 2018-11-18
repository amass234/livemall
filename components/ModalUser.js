import React, { Component } from 'react'
import { Button, Modal, Form, Input, Select, Divider } from 'antd'

const FormItem = Form.Item;
const Option = Select.Option;
function handleChange(value) {
    console.log(`selected ${value}`);
}

export class ModalUser extends Component {

    componentDidMount() {
        console.log(this.props.status)
    }

    render() {
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
        const { getFieldDecorator } = this.props.form;
        return (
            <Modal
                key={this.props.key}
                visible={this.props.visible}
                style={{ top: 20 }}
                title="จัดการข้อมูล"
                onOk={this.props.handleOk}
                onCancel={this.props.handleCancel}
                footer={
                    <div>
                        {
                            this.props.status === 'ผู้ขาย' ?
                                <div className='footerModel'>
                                    <Button key='Suspend account' onClick={this.handleCancel}>ระงับบัญชี</Button>
                                    <Button key='back' onClick={this.props.handleCancel}>ยืนยันบัญชี</Button>
                                    <Button key='submit' loading={this.props.loading} onClick={this.props.handleOk}>บันทึก </Button>
                                </div> :
                                <div className='footerModel'>
                                    <Button key='Suspend account' onClick={this.handleCancel}>ระงับบัญชี</Button>
                                    <Button key='submit' loading={this.props.loading} onClick={this.props.handleOk}>บันทึก</Button>
                                </div>
                        }
                    </div>
                }>
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="บัญชี"
                    >
                        {getFieldDecorator('account', {
                            rules: [{
                                type: 'account', message: 'The input is not valid E-mail!',
                            }, {
                                required: false, message: 'Please input your E-mail!',
                            }],
                            initialValue: this.props.name
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="รหัสผ่าน"
                    >
                        {getFieldDecorator('password', {
                            rules: [{
                                type: 'password', message: 'The input is not valid E-mail!',
                            }, {
                                required: false, message: 'Please input your E-mail!',
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="ชื่อ"
                    >
                        {getFieldDecorator('firstname', {
                            rules: [{
                                type: 'firstname', message: 'The input is not valid E-mail!',
                            }, {
                                required: false, message: 'Please input your E-mail!',
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="นามสกุล"
                    >
                        {getFieldDecorator('lastname', {
                            rules: [{
                                type: 'lastname', message: 'The input is not valid E-mail!',
                            }, {
                                required: false, message: 'Please input your E-mail!',
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="เบอร์โทรศัพท์"
                    >
                        {getFieldDecorator('tel', {
                            rules: [{
                                type: 'tel', message: 'The input is not valid E-mail!',
                            }, {
                                required: false, message: 'Please input your E-mail!',
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="วัน/เดือน/ปี"
                    >
                        {getFieldDecorator('birthdate', {
                            rules: [{
                                type: 'birthdate', message: 'The input is not valid E-mail!',
                            }, {
                                required: false, message: 'Please input your E-mail!',
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="เพศ"
                    >
                        {getFieldDecorator('sex', {
                            rules: [{
                                type: 'sex', message: 'The input is not valid E-mail!',
                            }, {
                                required: false, message: 'Please input your E-mail!',
                            }],
                        })(
                            <Select style={{ width: 120 }} onChange={handleChange}>
                                <Option value="ชาย">ชาย</Option>
                                <Option value="หญิง">หญิง</Option>
                            </Select>
                        )}
                    </FormItem>

                    {this.props.status === 'ผู้ขาย' &&
                        <div>
                            <FormItem
                                {...formItemLayout}
                                label="บัตรประชาชน"
                            >
                                <div style={{ width: 100, height: 100, background: '#444' }}>

                                </div>
                            </FormItem>
                            <Divider />
                            <FormItem
                                {...formItemLayout}
                                label="แพคเกจ"
                            >
                                {getFieldDecorator('sex', {
                                    rules: [{
                                        type: 'sex', message: 'The input is not valid E-mail!',
                                    }, {
                                        required: false, message: 'Please input your E-mail!',
                                    }],
                                })(
                                    <Select style={{ width: 120 }} onChange={handleChange}>
                                        <Option value="ชาย">7 วัน</Option>
                                        <Option value="หญิง">15 วัน</Option>
                                    </Select>
                                )}
                            </FormItem>

                            <FormItem
                                {...formItemLayout}
                                label="คงเหลือ"
                            >
                                {getFieldDecorator('lastname', {
                                    rules: [{
                                        type: 'lastname', message: 'The input is not valid E-mail!',
                                    }, {
                                        required: false, message: 'Please input your E-mail!',
                                    }],
                                })(
                                    <Input />
                                )}
                            </FormItem>

                            <FormItem
                                {...formItemLayout}
                                label="ผูกบัญชี"
                            >
                                {getFieldDecorator('lastname', {
                                    rules: [{
                                        type: 'lastname', message: 'The input is not valid E-mail!',
                                    }, {
                                        required: false, message: 'Please input your E-mail!',
                                    }],
                                })(
                                    <Input />
                                )}
                            </FormItem>
                        </div>
                    }
                </Form>
            </Modal>
        )
    }
}

export default Form.create()(ModalUser)
