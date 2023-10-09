import { Spin, notification } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [accessToken, setAccessToken] = useState('');
  const [api, contextHolder] = notification.useNotification();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // if (message && message !== null && message !== '') {
    //   api.success({
    //     message: message,
    //     placement: 'topRight',
    //   });
    // }
    const token = localStorage.getItem('accessToken');
    setAccessToken(token);
    console.log('token: ', token);
    if (!token) {
      navigate('/adminLogin');
    }
  }, []);
  return (
    <div>
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
        <p>Dashboard</p>
      )}
    </div>
  );
}

export default Dashboard;
