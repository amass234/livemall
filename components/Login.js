import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox, Layout, Divider } from 'antd';

const FormItem = Form.Item;
const { Header, Footer, Sider, Content } = Layout;

export class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout>
        <Content>
          <div className="login_page">
            <Form onSubmit={this.handleSubmit} className="login-form">
            <h6 style={{ textAlign: 'center', margin: '1em', color: 'rgb(0, 124, 255)' }}>เข้าสู่ระบบ</h6>
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: false,
                })(
                  <Checkbox>เข้าสู่ระบบอัตโนมัติ</Checkbox>
                )}
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
            </Button>
              </FormItem>
            </Form>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Livemall ©2018 Created by COMIOX</Footer>
      </Layout>
    );
  }
}

export default Form.create()(Login)
