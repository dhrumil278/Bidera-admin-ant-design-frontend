import React, { useEffect, useState } from 'react';
import { Card, Space, Spin, notification } from 'antd';
import { Typography } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Title, Text } = Typography;

function AdminVerifyEmail() {
  const location = useLocation();
  console.log('location: ', location);
  const { email, message } = location.state;
  const [api, contextHolder] = notification.useNotification();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (message && message !== '') {
      api.success({
        message: message,
        placement: 'topRight',
      });
    }
  }, []);

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
            minHeight: 100,
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
          <Title level={5}>Verify your Email!</Title>
          <Text type="secondary">
            Account activation link sent to your email <br />
            address:{' '}
            <Link style={{ color: '#1b7165' }}>
              {email ? email : 'example.gmail.com'}
            </Link>{' '}
            Please follow the link inside to continue.
          </Text>
          <Space
            style={{
              width: '100%',
              justifyContent: 'center',
              paddingTop: '10px',
            }}
          >
            <Text style={{ fontSize: 12 }}>
              Didn't get the email?{' '}
              <Link
                to="/"
                style={{ color: '#1b7165', fontSize: 12, fontWeight: 600 }}
              >
                resend email
              </Link>
            </Text>
          </Space>
        </Card>
      )}
    </div>
  );
}

export default AdminVerifyEmail;
