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

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
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
                footer={false}
            >
                <Form onSubmit={this.handleSubmit}>
                    <FormItem
                        {...formItemLayout}
                        label="บัญชี"
                    >
                        {getFieldDecorator('account', {
                            rules: [{ required: true, message: 'กรุณาใส่บัญชี' }],
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
                            rules: [{ required: true, message: 'กรุณาใส่รหัสผ่าน' }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="ชื่อ"
                    >
                        {getFieldDecorator('firstname', {
                            rules: [{ required: true, message: 'กรุณาใส่ชื่อ' }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="นามสกุล"
                    >
                        {getFieldDecorator('lastname', {
                            rules: [{ required: true, message: 'กรุณาใส่นามสกุล' }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="เบอร์โทรศัพท์"
                    >
                        {getFieldDecorator('tel', {
                            rules: [{ required: true, message: 'กรุณาใส่เบอร์โทรศัพท์' }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="วัน/เดือน/ปี"
                    >
                        {getFieldDecorator('birthdate', {
                            rules: [{ required: true, message: 'กรุณาใส่ วัน/เดือน/ปี' }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="เพศ"
                    >
                        {getFieldDecorator('sex', {
                            rules: [{ required: true, message: 'กรุณาเลือกเพศ' }],
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
                                {getFieldDecorator('package', {
                                    rules: [{ required: true, message: 'กรุณาเลือกแพคเกจ' }],
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
                                {getFieldDecorator('balance', {
                                    rules: [{ required: true, message: 'กรุณาใส่ยอดคงเหลือ' }],
                                })(
                                    <Input />
                                )}
                            </FormItem>

                            <FormItem
                                {...formItemLayout}
                                label="ผูกบัญชี"
                            >
                                {getFieldDecorator('binding', {
                                    rules: [{ required: true, message: 'กรุณาใส่ ผูกบัญชี' }],
                                })(
                                    <Input />
                                )}
                            </FormItem>
                        </div>
                    }
                    <FormItem>
                        {
                            this.props.status === 'ผู้ขาย' ?
                                <div className='footerModel'>
                                    <Button key='Suspend account' onClick={this.handleCancel}>ระงับบัญชี</Button>
                                    {
                                        !this.props.active &&
                                        <Button key='back' onClick={this.props.handleCancel}>ยืนยันบัญชี</Button>
                                    }
                                    <Button key='submit' htmlType="submit" >บันทึก </Button>
                                </div> :
                                <div className='footerModel'>
                                    <Button key='Suspend account' onClick={this.handleCancel}>ระงับบัญชี</Button>
                                    <Button key='submit' htmlType="submit" >บันทึก</Button>
                                </div>
                        }
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}

export default Form.create()(ModalUser)
