import React, { useEffect, useState } from 'react';
import { Button, Card, Form, Input, Space, Spin, notification } from 'antd';
import { Typography } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { adminSetNewPass, authSetNewPass } from '../../APIs/authAPI';

const { Title, Text } = Typography;

function AdminSetNewPassword() {
  const location = useLocation();
  const { message } = location.state;
  const [accessToken, setAccessToken] = useState('');
  const [api, contextHolder] = notification.useNotification();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (message && message !== '') {
      api.success({
        message: message,
        placement: 'topRight',
      });
    }
    const token = localStorage.getItem('accessToken');
    setAccessToken(token);

    if (!token) {
      navigate('/agentLogin');
    }
  }, []);

  const onFinishSuccess = async (data) => {
    try {
      setIsLoading(true);
      const response = await adminSetNewPass(data, accessToken);

      if (response) {
        localStorage.setItem('accessToken', response.data.data);
        setIsLoading(false);
        navigate('/', {
          state: {
            message: response.data.message,
          },
        });
      }
    } catch (error) {
      console.log('error: ', error);
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
            minHeight: 200,
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
          <Title level={5}>Set New Password!</Title>
          <Text type="secondary">for hello@gmail.com</Text>
          <div>
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              style={{ paddingTop: 20 }}
              onFinish={onFinishSuccess}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
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

              <Form.Item
                name="confirmPassword"
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

              <Form.Item style={{ marginBottom: 10 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: '100%' }}
                >
                  Set New Password
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
            <Link
              to="/login"
              style={{ color: '#1b7165', fontSize: 13, fontWeight: 600 }}
            >
              <i
                class="fa-solid fa-chevron-left"
                style={{ color: '#1b7165' }}
              ></i>{' '}
              Back to login
            </Link>
          </Space>
        </Card>
      )}
    </div>
  );
}

export default AdminSetNewPassword;
