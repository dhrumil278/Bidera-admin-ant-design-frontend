import React, { useEffect, useState } from 'react';
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
import { Link, useNavigate } from 'react-router-dom';
import { adminLogin } from '../../APIs/authAPI';
import '../../App.css';

const { Title, Text } = Typography;

function AdminLogin() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      navigate('/');
    }
  }, []);

  const onFinishSuccess = async (data) => {
    if (data) {
      setIsLoading(true);
      try {
        const response = await adminLogin(data);

        if (response.status === 200) {
          localStorage.setItem('accessToken', response.data.data);
          setIsLoading(false);
          navigate('/');
        }
      } catch (error) {
        console.log('error: ', error);
        setIsLoading(false);
        api.error({
          message: error.response.data.message,
          placement: 'topRight',
        });
      }
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
            maxWidth: 350,
            boxShadow: 'rgba(47, 43, 61, 0.1) 0px 4px 18px 0px',
            minHeight: 250,
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
            Please sign-in to your account and start the adventure
          </Text>
          <div>
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              style={{ paddingTop: 25 }}
              onFinish={onFinishSuccess}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
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

              <Space
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  marginBottom: 15,
                }}
              >
                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  style={{ marginBottom: 0 }}
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Text>
                  <Link
                    to="/adminForgotPassword"
                    style={{ color: '#1b7165', fontSize: 12, fontWeight: 600 }}
                  >
                    Forgot password ?
                  </Link>
                </Text>
              </Space>

              <Form.Item style={{ marginBottom: 10 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: '100%' }}
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
          <Space
            style={{
              width: '100%',
              justifyContent: 'center',
            }}
          >
            {/* <Text style={{ fontSize: 12 }}>
              new on our platform?{' '}
              <Link
                to="/adminSignup"
                style={{ color: '#1b7165', fontSize: 12, fontWeight: 600 }}
              >
                Create an account
              </Link>
            </Text> */}
          </Space>
          {/* <Divider style={{ fontSize: 12, fontWeight: 300 }}>or</Divider>
          <Space style={{ width: '100%', justifyContent: 'center' }}>
            <Link>
              <i class="fa-brands fa-facebook" style={{ color: '#3b5998' }}></i>
            </Link>
            <i class="fa-brands fa-google" style={{ color: 'red' }}></i>
            <i class="fa-brands fa-twitter" style={{ color: '#00acee' }}></i>
            <i class="fa-brands fa-github" style={{ color: '#000000' }}></i>
          </Space> */}
        </Card>
      )}
    </div>
  );
}

export default AdminLogin;
