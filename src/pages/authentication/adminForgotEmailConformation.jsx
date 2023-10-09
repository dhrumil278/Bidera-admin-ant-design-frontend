import { Spin, notification } from 'antd';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { adminForgotEmailConfirmation } from '../../APIs/authAPI';

function AdminForgotPasswordConfirmation() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const location = useLocation();

  useEffect(() => {
    const token = new URLSearchParams(location.search).get('token');
    setIsLoading(true);
    if (token !== '') {
      const onGetParams = async (data) => {
        if (data) {
          try {
            const response = await adminForgotEmailConfirmation(data);

            if (response.status === 200) {
              localStorage.setItem('accessToken', response.data.data);
              setIsLoading(false);
              navigate('/adminSetNewPassword', {
                state: {
                  message: response.data.message,
                },
              });
            }
          } catch (error) {
            setIsLoading(false);
            api.error({
              message: error.response.data.message,
              placement: 'topRight',
            });
          }
        }
      };
      onGetParams({ token: token });
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
        <div></div>
      )}
    </div>
  );
}

export default AdminForgotPasswordConfirmation;
