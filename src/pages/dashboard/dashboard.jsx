import {
  Avatar,
  Breadcrumb,
  Button,
  Col,
  Dropdown,
  Layout,
  Menu,
  Popover,
  Row,
  Space,
  Spin,
  notification,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import {
  DashboardOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';
import { Typography } from 'antd';
import DashboardCompo from '../../components/DashboardCompo';

const { Title, Text } = Typography;

const content = (
  <Row>
    <Col style={{ display: 'flex' }}>
      <div>
        <Avatar
          size={30}
          icon={<UserOutlined />}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div>
        <Title level={5}>Dhrumil Amrutiya</Title>
        <Text>Admin</Text>
      </div>
    </Col>
  </Row>
);

// const items = [
//   {
//     key: '1',
//     label: (
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.antgroup.com"
//       >
//         1st menu item
//       </a>
//     ),
//   },
//   {
//     key: '2',
//     label: (
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.aliyun.com"
//       >
//         2nd menu item
//       </a>
//     ),
//   },
//   {
//     key: '3',
//     label: (
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.luohanacademy.com"
//       >
//         3rd menu item
//       </a>
//     ),
//   },
// ];

function Dashboard() {
  const [accessToken, setAccessToken] = useState('');
  const [api, contextHolder] = notification.useNotification();
  const [isLoading, setIsLoading] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    if (collapsed) {
      setCollapsed(false);
    }
  };

  const handleMouseLeave = () => {
    if (!collapsed) {
      setCollapsed(true);
    }
  };

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
        <>
          <Layout style={{ backgroundColor: 'transparent' }}>
            <div
              style={{ minHeight: '100vh' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Sider
                style={{
                  backgroundColor: 'transparent',
                  minHeight: '100vh',
                }}
                trigger={null}
                collapsible
                collapsed={collapsed}
              >
                <Menu
                  mode="inline"
                  style={{
                    borderRight: 0,
                    minHeight: '100vh',
                  }}
                  defaultSelectedKeys={['1']}
                  items={[
                    {
                      key: 1,
                      icon: <DashboardOutlined />,
                      label: 'Dashboard',
                    },
                    {
                      key: 2,
                      icon: <UserSwitchOutlined />,
                      label: 'Manage',
                    },
                  ]}
                />
              </Sider>
            </div>
            <Layout
              style={{ backgroundColor: 'transparent', margin: '15px 25px' }}
            >
              <Header
                style={{
                  backgroundColor: 'white',
                  padding: '0',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingLeft: '25px',
                  paddingRight: '25px',
                  boxShadow: 'rgba(47, 43, 61, 0.1) 0px 4px 18px 0px',
                }}
              >
                <Title level={3} style={{ color: '#1b7165', margin: 0 }}>
                  Bidera Admin
                </Title>
                <Popover
                  placement="bottomRight"
                  content={content}
                  // arrow={mergedArrow}
                >
                  <Avatar
                    size={40}
                    icon={<UserOutlined />}
                    style={{ cursor: 'pointer' }}
                  />
                  {/* <Button>TL</Button> */}
                </Popover>
              </Header>
              <Layout
                style={{
                  backgroundColor: 'transparent',
                  padding: '0 24px 24px',
                }}
              >
                {/* <DashboardCompo /> */}
                <Outlet />
              </Layout>
            </Layout>

            {/* <Layout style={{ backgroundColor: 'transparent' }}></Layout> */}
          </Layout>
        </>
      )}
    </div>
  );
}

export default Dashboard;
