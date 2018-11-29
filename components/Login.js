import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox, Layout } from 'antd';
import { inject, observer } from 'mobx-react';

const FormItem = Form.Item;
const { Footer, Content } = Layout;

@inject('authStore')
@observer
export class Login extends Component {

  handleEmailChange = () => this.props.authStore.setEmail(email.value);
  handlePasswordChange = () => this.props.authStore.setPassword(password.value);

  handleSubmitForm = (e) => {
    e.preventDefault();
    this.props.authStore.login()
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const {loading} = this.props.authStore
    return (
      <Layout>
        <Content>
          <div className="login_page">
            <Form onSubmit={this.handleSubmitForm} className="login-form">
              <h6 style={{ textAlign: 'center', margin: '1em', color: 'rgb(0, 124, 255)' }}>เข้าสู่ระบบ</h6>
              <FormItem>
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                    onChange={this.handleEmailChange}
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                    onChange={this.handlePasswordChange}
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: false,
                })(
                  <Checkbox>เข้าสู่ระบบอัตโนมัติ</Checkbox>
                )}
                <Button loading={loading} type="primary" htmlType="submit" className="login-form-button">
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
