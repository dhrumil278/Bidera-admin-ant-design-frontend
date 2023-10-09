import React, { useState } from 'react';
import {
  Button,
  Card,
  Checkbox,
  Divider,
  Form,
  Input,
  Space,
  Spin,
  notification,
} from 'antd';
import { Typography } from 'antd';
import { Col, Row } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { authSignup } from '../../APIs/authAPI';

const { Title, Text } = Typography;

function AgentSignup() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const onFinishSuccess = async (data) => {
    setIsLoading(true);
    try {
      const response = await authSignup(data);
      setIsLoading(false);
      navigate('/agentVerifyEmail', {
        state: {
          email: response.data.data.email,
          message: response.data.message,
        },
      });
    } catch (error) {
      setIsLoading(false);

      api.error({
        message: error.response.data.message,
        placement: 'topRight',
      });
    }
  };

  return (
    <div style={{ minHeight: '100vh', position: 'relative', display: 'flex' }}>
      {contextHolder}
      {isLoading === true ? (
        <div
          style={{
            margin: 'auto',
          }}
        >
          <Spin size="large" />
        </div>
      ) : (
        <Card
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            width: '100%',
            maxWidth: 400,
            boxShadow: 'rgba(47, 43, 61, 0.1) 0px 4px 18px 0px',
            minHeight: 450,
          }}
        >
          <Space
            direction="vertical"
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* <Image width={50} src={Logo} /> */}
            <Title level={3} style={{ color: '#1b7165', margin: 0 }}>
              Bidera Admin
            </Title>
          </Space>
          <Title level={5}>Welcome to Bidera Admin!</Title>
          <Text type="secondary">
            Please register your account and start the adventure
          </Text>
          <div>
            <Form
              form={form}
              name="basic"
              initialValues={{
                tc: true,
              }}
              style={{ paddingTop: 25 }}
              onFinish={onFinishSuccess}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Row>
                <Col span={12}>
                  <Form.Item
                    style={{ marginBottom: 10, paddingRight: '5px' }}
                    name="firstname"
                    rules={[
                      { type: 'string', message: 'It should be Text!' },
                      { required: true, message: 'Firstname is Required!' },
                    ]}
                  >
                    <Input placeholder="first name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="lastname"
                    style={{ marginBottom: 10, paddingLeft: '5px' }}
                    rules={[
                      { required: true, message: 'Lastname is Required!' },
                      { type: 'string', message: 'Lastname should be text!' },
                    ]}
                  >
                    <Input placeholder="last name" />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col span={24}>
                  <Form.Item
                    name="email"
                    style={{ marginBottom: 10 }}
                    rules={[
                      {
                        type: 'email',
                        message: 'Enter valid Email!',
                      },
                      {
                        required: true,
                        message: 'Email required!',
                      },
                    ]}
                  >
                    <Input placeholder="email" />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col span={24}>
                  <Form.Item
                    name="password"
                    style={{ marginBottom: 10 }}
                    rules={[
                      {
                        required: true,
                        message: 'Password required!',
                      },
                    ]}
                  >
                    <Input.Password placeholder="password" />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col span={24}>
                  <Form.Item
                    name="confirmpassword"
                    style={{ marginBottom: 10 }}
                    rules={[
                      {
                        required: true,
                        message: 'Password required!',
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error('Password should be same!')
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password placeholder="confirm password" />
                  </Form.Item>
                </Col>
              </Row>
              <Space
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  marginBottom: 15,
                }}
              >
                <Form.Item
                  name="tc"
                  valuePropName="checked"
                  style={{ marginBottom: 0 }}
                >
                  <Checkbox>
                    I agree{' '}
                    <Link
                      to="/"
                      style={{
                        color: '#1b7165',
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      Terms & Conditions
                    </Link>
                  </Checkbox>
                </Form.Item>
              </Space>

              <Form.Item shouldUpdate style={{ marginBottom: 10 }}>
                {() => (
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={form.getFieldValue('tc') === false}
                    style={{ width: '100%' }}
                  >
                    Signup
                  </Button>
                )}
              </Form.Item>
            </Form>
          </div>
          <Space
            style={{
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 12 }}>
              already have an accout?{' '}
              <Link
                to="/agentLogin"
                style={{ color: '#1b7165', fontSize: 12, fontWeight: 600 }}
              >
                sign in
              </Link>
            </Text>
          </Space>
          <Divider style={{ fontSize: 12, fontWeight: 300 }}>or</Divider>
          <Space style={{ width: '100%', justifyContent: 'center' }}>
            <i
              className="fa-brands fa-facebook"
              style={{ color: '#3b5998' }}
            ></i>
            <i className="fa-brands fa-google" style={{ color: 'red' }}></i>
            <i
              className="fa-brands fa-twitter"
              style={{ color: '#00acee' }}
            ></i>
            <i className="fa-brands fa-github" style={{ color: '#000000' }}></i>
          </Space>
        </Card>
      )}
    </div>
  );
}

export default AgentSignup;
