import {
  BellOutlined,
  SecurityScanOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Tabs } from 'antd';
import React from 'react';
import Profile_setProfile from './Profile_setProfile';

function Profile() {
  const items = [
    {
      label: (
        <span>
          <UserOutlined /> Profile
        </span>
      ),
      key: '1',
      children: <Profile_setProfile />,
    },
    {
      label: (
        <span>
          <SecurityScanOutlined /> Security
        </span>
      ),
      key: '2',
      children: `Content of tab `,
    },
    {
      label: (
        <span>
          <BellOutlined /> Notification
        </span>
      ),
      key: '3',
      children: `Content of tab `,
    },
  ];
  return (
    <div style={{ marginTop: 15 }}>
      <Tabs
        defaultActiveKey="1"
        size="middle"
        style={{
          marginBottom: 32,
        }}
        items={items}
        animated={{
          inkBar: false,
        }}
      />
    </div>
  );
}

export default Profile;
