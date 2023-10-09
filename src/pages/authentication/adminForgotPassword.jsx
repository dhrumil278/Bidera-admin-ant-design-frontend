import React, { useState } from 'react';
import { Button, Card, Form, Input, Space, Spin, notification } from 'antd';
import { Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { adminForgotPass } from '../../APIs/authAPI';

const { Title, Text } = Typography;

function AdminForgotPassword() {
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const [isLoading, setIsLoading] = useState(false);
  const onFinishSuccess = async (data) => {
    try {
      if (data) {
        setIsLoading(true);
        const response = await adminForgotPass(data);

        if (response) {
          setIsLoading(false);
          navigate('/adminVerifyEmail', {
            state: {
              email: data.email,
              message: response.data.message,
            },
          });
        }
      } else {
        setIsLoading(false);
        api.error({
          message: 'Form Data not Submited!',
          placement: 'topRight',
        });
      }
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
          <Title level={5}>Forgot Password?</Title>
          <Text type="secondary">
            Enter your email and we'll send you instructions to reset your
            password
          </Text>
          <div>
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              style={{ paddingTop: 20 }}
              onFinish={onFinishSuccess}
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

              <Form.Item style={{ marginBottom: 10 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: '100%' }}
                >
                  Send reset link
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
              to="/adminLogin"
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

export default AdminForgotPassword;
