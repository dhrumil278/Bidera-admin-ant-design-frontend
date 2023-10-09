import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { adminAcceptInvitation } from '../../APIs/authAPI';
import { Spin, notification } from 'antd';

function AdminEmailConfirmation() {
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
          console.log('data: ', data);
          try {
            const response = await adminAcceptInvitation(data);

            if (response.status === 200) {
              localStorage.setItem('accessToken', response.data.data);
              api.success({
                message: response.data.message,
                placement: 'topRight',
              });
              setTimeout(() => {
                setIsLoading(false);
                navigate('/adminFirstTimeSetPass');
              }, 1500);
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

export default AdminEmailConfirmation;
