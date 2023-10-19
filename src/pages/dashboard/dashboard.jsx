import {
  Avatar,
  Breadcrumb,
  Button,
  Col,
  Divider,
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
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import {
  DashboardOutlined,
  LogoutOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';
import { Typography } from 'antd';
import DashboardCompo from '../../components/DashboardCompo';

const { Title, Text } = Typography;

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
  const handleLogout = () => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      localStorage.removeItem('accessToken');
      navigate('/adminLogin');
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

  const items = [
    {
      key: '1',
      label: (
        <Row>
          <Col
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Avatar size={35} icon={<UserOutlined />} />
            <div style={{ paddingLeft: 15 }}>
              <Title level={5} style={{ margin: 0 }}>
                Dhrumil Amrutiya
              </Title>
              <Text style={{ marginBottom: 0 }}>Admin</Text>
            </div>
          </Col>
          <Divider style={{ marginTop: 5, marginBottom: 5 }} />
        </Row>
      ),
      disabled: true,
    },
    {
      key: '2',
      label: (
        <Link to="/profile">
          <Row style={{ padding: 5, cursor: 'pointer', alignItems: 'center' }}>
            <Col>
              <UserOutlined style={{ fontSize: 18, fontWeight: 400 }} />
            </Col>
            <Col>
              <Text style={{ marginBottom: 0, fontSize: 14, paddingLeft: 15 }}>
                Profile
              </Text>
            </Col>
          </Row>
        </Link>
      ),
    },
    {
      key: '3',
      label: (
        <Row
          style={{ padding: 5, cursor: 'pointer', alignItems: 'center' }}
          onClick={handleLogout}
        >
          <Col>
            <LogoutOutlined style={{ fontSize: 18, fontWeight: 400 }} />
          </Col>
          <Col>
            <Text style={{ marginBottom: 0, fontSize: 14, paddingLeft: 15 }}>
              Logout
            </Text>
          </Col>
        </Row>
      ),
    },
  ];
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
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottomRight"
                  arrow
                >
                  <Avatar
                    size={40}
                    icon={<UserOutlined />}
                    style={{ cursor: 'pointer' }}
                  />
                </Dropdown>
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
