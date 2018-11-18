import React, { Component } from 'react'
import { Button, Modal, Form, Input } from 'antd'

const FormItem = Form.Item;

export class ModalPaymant extends Component {
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
            <div>
                <Modal
                    visible={this.props.visible}
                    style={{ top: 20 }}
                    title="จัดการข้อมูล"
                    onOk={this.props.handleOk}
                    onCancel={this.props.handleCancel}
                    footer={[
                        <div className='footerModel'>
                            <Button style={{background: '#00b42d'}} key='Suspend account' onClick={this.handleCancel}>อนุมัติ</Button>
                            <Button key='submit' loading={this.props.loading} onClick={this.props.handleOk}>ตกลง </Button>
                        </div>
                    ]}
                >
                    <Form>
                        <FormItem
                            {...formItemLayout}
                            label="ชื่อ"
                        >
                            {getFieldDecorator('account', {
                                rules: [{
                                    type: 'account', message: 'The input is not valid E-mail!',
                                }, {
                                    required: false, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="จำนวนเงิน"
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
                            label="ธนาคาร"
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
                            label="วันที่"
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
                            label="เวลา"
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
                            label="สลีปการโอน"
                        >
                            <div style={{ width: 100, height: 100, background: '#444' }} />
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default Form.create()(ModalPaymant)
